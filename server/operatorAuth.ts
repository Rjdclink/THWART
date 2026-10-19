import { Router, type RequestHandler } from 'express';
import { checkMasterPassword, createMasterSessionToken, verifyMasterSessionToken, getMasterSessionMaxAgeSeconds, MASTER_SESSION_COOKIE } from './masterPassword';
import { authRateLimit } from './rateLimit';

export const operatorAuth = Router();
const cookieOptions = () => ({ httpOnly: true, sameSite: 'lax' as const, secure: process.env.NODE_ENV === 'production', path: '/' });
operatorAuth.post('/master-login', authRateLimit, (req, res) => {
  if (!checkMasterPassword(typeof req.body?.password === 'string' ? req.body.password : '')) {
    return res.status(401).json({ message: 'Invalid master password' });
  }
  res.cookie(MASTER_SESSION_COOKIE, createMasterSessionToken(), { ...cookieOptions(), maxAge: getMasterSessionMaxAgeSeconds() * 1000 });
  return res.json({ success: true, redirectRoute: '/cryptocrawler-v2' });
});
operatorAuth.use((req, _res, next) => {
  if (verifyMasterSessionToken(req.cookies?.[MASTER_SESSION_COOKIE])) {
    (req as any).user = { id: 'admin-master-root', isMasterBypass: true, isAdmin: true, accessState: 'master' };
    (req as any).isAuthenticated = () => true;
  }
  next();
});
operatorAuth.get('/auth/user', (req, res) => res.json((req as any).user || null));
operatorAuth.post('/auth/logout', (_req, res) => {
  res.clearCookie(MASTER_SESSION_COOKIE, cookieOptions());
  res.json({ success: true });
});
export const requireOperator: RequestHandler = (req, res, next) => {
  if (verifyMasterSessionToken(req.cookies?.[MASTER_SESSION_COOKIE])) {
    (req as any).user = { id: 'admin-master-root', isMasterBypass: true, isAdmin: true, accessState: 'master' };
    (req as any).isAuthenticated = () => true;
  }
  const key = process.env.INTERNAL_KEY || process.env.INTERNAL_API_KEY;
  const provided = req.header('X-Internal-Key') || req.header('X-Internal-Api-Key');
  if ((req as any).user?.isMasterBypass || (key && provided === key)) return next();
  return res.status(401).json({ error: 'Operator authentication required' });
};
