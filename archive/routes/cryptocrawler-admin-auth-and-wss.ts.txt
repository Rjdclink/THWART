/** Archived CryptoCrawler REST and WebSocket registration, extracted from LegalWhat's shared routes.ts. */
// Original trading-only imports:
import { dashboardApi, adminApi, wss } from "./services/cryptocrawl/api/index";
import { verifyCanonicalCryptoSetup } from "./services/cryptocrawl/verification/canonicalCryptoVerifier.js";
import { SUPPORTED_CHAINS } from "./services/cryptocrawl/bridge/chain-config.js";

  // ============================================
  // CRYPTOCRAWL DASHBOARD API - STRICT AUTH REQUIRED
  // No fallback users, no auto-create, 401 only
  // ============================================
  
  // ============================================
  // CRYPTO VERIFIER ROUTES (HEADER-ONLY, NO SESSION)
  // Only /admin/crypto/verify-* bypasses session auth via header match.
  // ============================================

  const requireInternalVerifyHeader: RequestHandler = (req, res, next) => {
    const provided = String(req.header('X-Internal-Verify') || '');
    const secret = String(process.env.INTERNAL_VERIFY_SECRET || '');
    if (provided && secret && provided === secret) return next();
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Verifier header auth failed',
    });
  };

  // Mount verifier handlers BEFORE the session-protected /admin/crypto router.
  // This guarantees verifier access does not depend on passport/session middleware.
  const cryptoVerifyRouter = express.Router();
  cryptoVerifyRouter.get('/verify-canonical', requireInternalVerifyHeader, (_req, res) => {
    const report = verifyCanonicalCryptoSetup();
    res.json({ success: report.ok, report });
  });
  cryptoVerifyRouter.get('/verify-chains', requireInternalVerifyHeader, (_req, res) => {
    const issues: Array<{ chain: string; issue: string }> = [];
    for (const [chain, cfg] of Object.entries(SUPPORTED_CHAINS)) {
      if (!cfg.chainId || typeof cfg.chainId !== 'number') issues.push({ chain, issue: 'Missing/invalid chainId' });
      if (!cfg.rpcUrl || String(cfg.rpcUrl).trim().length === 0) issues.push({ chain, issue: 'Missing rpcUrl' });
      if (!cfg.usdc || !cfg.usdt) issues.push({ chain, issue: 'Missing stablecoin addresses (usdc/usdt)' });
    }
    res.json({
      success: issues.length === 0,
      supportedChains: Object.keys(SUPPORTED_CHAINS),
      issues,
    });
  });
  app.use('/admin/crypto', cryptoVerifyRouter);

  // Auth middleware for CryptoCrawler routes. Platform master sessions and
  // existing internal service keys are the only control identities.
  const cryptoAuthMiddleware: RequestHandler = (req, res, next) => {
    // Set no-cache headers
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    });

    // INTERNAL KEY BYPASS CHECK (allow programmatic access regardless of auth config)
    // Must check this FIRST before any auth config checks
    const earlyInternalKey = String(process.env.INTERNAL_KEY || process.env.INTERNAL_API_KEY || '');
    if (earlyInternalKey) {
      const providedKey =
        String(req.header('X-Internal-Key') || '') ||
        String(req.header('X-Internal-Api-Key') || '') ||
        String(req.header('X-Internal-Verify') || '');
      if (providedKey && providedKey === earlyInternalKey) {
        return next();
      }
    }

    // VERIFIER BYPASS (as requested):
    // If request path starts with /admin/crypto/verify
    // AND header X-Internal-Verify === INTERNAL_VERIFY_SECRET
    // THEN bypass session + passport
    // ELSE enforce normal session auth
    //
    // This is intentionally narrow and does NOT touch any other /admin/crypto/* routes.
    const fullPath = String((req as any).originalUrl || '').split('?')[0];
    const isVerifyRoute =
      fullPath.startsWith('/admin/crypto/verify') ||
      (String((req as any).baseUrl || '') === '/admin/crypto' && String((req as any).path || '').startsWith('/verify'));

    if (isVerifyRoute) {
      // Force execution visibility (no secrets).
      const serviceName = process.env.RAILWAY_SERVICE_NAME || process.env.SERVICE_NAME || 'unknown';
      const commit =
        process.env.RAILWAY_GIT_COMMIT_SHA || process.env.GIT_COMMIT || process.env.SOURCE_VERSION || 'unknown';
      const nodeEnv = process.env.NODE_ENV || 'unknown';

      const provided = String(req.header('X-Internal-Verify') || '');
      const secret = String(process.env.INTERNAL_VERIFY_SECRET || '');
      if (provided && secret && provided === secret) return next();

      console.log('[VERIFIER_V2_REACHED]', {
        ts: new Date().toISOString(),
        serviceName,
        commit,
        nodeEnv,
        originalUrl: String((req as any).originalUrl || ''),
        baseUrl: String((req as any).baseUrl || ''),
        path: String((req as any).path || ''),
        host: String(req.headers?.host || ''),
        hasInternalVerifyHeader: Boolean(provided),
        headerLength: provided.length,
        hasInternalVerifySecret: Boolean(secret),
        secretLength: secret.length,
        headerMatches: Boolean(provided && secret && provided === secret),
      });

      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Verifier header auth failed',
        marker: 'VERIFIER_V2_REACHED',
        diagnostics: {
          serviceName,
          commit,
          nodeEnv,
          fullPath,
          baseUrl: String((req as any).baseUrl || ''),
          path: String((req as any).path || ''),
          hasHeader: Boolean(provided),
          headerLength: provided.length,
          hasSecret: Boolean(secret),
          secretLength: secret.length,
          // Avoid leaking values; provide only a boolean match indicator.
          matches: Boolean(provided && secret && provided === secret),
        },
      });
    }

    // INTERNAL KEY BYPASS (for /api/crypto/* and /admin/crypto/*):
    // If INTERNAL_KEY is set, requests may authenticate via header instead of session.
    // This is required for non-browser callers (cron/agents) and UI toggles where session isn't reliable.
    const internalKey = String(process.env.INTERNAL_KEY || process.env.INTERNAL_API_KEY || '');
    if (internalKey) {
      const provided =
        String(req.header('X-Internal-Key') || '') ||
        String(req.header('X-Internal-Api-Key') || '') ||
        String(req.header('X-Internal-Verify') || '');
      if (provided && provided === internalKey) {
        return next();
      }
    }
    
    // STRICT: Check if user is authenticated via passport
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      // TEMP DIAGNOSTICS: identify why crypto auth failed (no secrets)
      console.log('[CRYPTO_AUTH_FAIL]', {
        ts: new Date().toISOString(),
        reason: 'not_authenticated',
        originalUrl: String((req as any).originalUrl || ''),
        host: String(req.headers?.host || ''),
        hasCookie: Boolean(req.headers?.cookie),
        hasAuthorization: Boolean(req.headers?.authorization),
        hasInternalVerifyHeader: Boolean(req.headers?.['x-internal-verify']),
        hasInternalKeyHeader: Boolean(req.headers?.['x-internal-key'] || req.headers?.['x-internal-api-key']),
        nodeEnv: process.env.NODE_ENV || 'unknown',
        hasInternalVerifySecret: Boolean(process.env.INTERNAL_VERIFY_SECRET),
        hasInternalKey: Boolean(process.env.INTERNAL_KEY || process.env.INTERNAL_API_KEY),
      });
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Authentication required. Please login at /login',
      });
    }
    
    const user = req.user as Express.User;
    
    // STRICT: Must be master password user (admin)
    if (!user.isMasterBypass) {
      console.log('[CRYPTO_AUTH_FAIL]', {
        ts: new Date().toISOString(),
        reason: 'not_master_bypass',
        originalUrl: String((req as any).originalUrl || ''),
        host: String(req.headers?.host || ''),
        userFlags: {
          isMasterBypass: Boolean((user as any).isMasterBypass),
          isAdmin: Boolean((user as any).isAdmin),
          isAdminBypass: Boolean((user as any).isAdminBypass),
        },
      });
      return res.status(403).json({
        success: false,
        error: 'Forbidden',
        message: 'Admin access required',
      });
    }
    
    next();
  };
  
  app.use('/api/crypto', cryptoAuthMiddleware, dashboardApi);
  app.use('/admin/crypto', cryptoAuthMiddleware, adminApi);
  
  // Setup WebSocket upgrade handler for CryptoCrawl
  httpServer.on('upgrade', (request, socket, head) => {
    if (request.url === '/api/crypto/live') {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });
  
