import express, { Request, Response } from 'express';
import { autonomousFaucet } from '../services/cryptocrawl/faucet/autonomous-faucet';

const router = express.Router();

/**
 * GET /api/health/cryptocrawl-faucet
 * Public liveness probe for the CryptoCrawl autonomous faucet.
 *
 * Designed for monitoring (no auth). Exposes only operational signals:
 * - active: whether the loop is running in this process
 * - faucetId: unique instance id (helps detect multi-instance duplication)
 * - lastLoopIterationAt: heartbeat timestamp (stall detection)
 */
router.get('/cryptocrawl-faucet', (_req: Request, res: Response) => {
  const now = Date.now();
  const active = autonomousFaucet.isActive();
  const faucetId = autonomousFaucet.getFaucetId();

  let state: ReturnType<typeof autonomousFaucet.getState> | null = null;
  try {
    state = autonomousFaucet.getState();
  } catch {
    state = null;
  }

  const mode = state?.mode ?? (active ? 'unknown' : 'closed');
  const lastLoopIterationAt = state?.lastLoopIterationAt ?? 0;
  const lastSuccessfulTrade = state?.lastSuccessfulTrade ?? 0;

  // Stall threshold: allow longer sleeps in stealth mode.
  const maxStallMs = mode === 'stealth' ? 2 * 60_000 : 30_000;
  const stallMs = active && lastLoopIterationAt ? Math.max(0, now - lastLoopIterationAt) : null;
  const stalled = active && lastLoopIterationAt > 0 && now - lastLoopIterationAt > maxStallMs;

  res.json({
    ok: !stalled,
    active,
    faucetId,
    mode,
    lastLoopIterationAt,
    lastSuccessfulTrade,
    stalled,
    stallMs,
    maxStallMs,
    timestamp: new Date().toISOString(),
  });
});

export default router;
