import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createServer } from 'node:http';
import path from 'node:path';
import { operatorAuth, requireOperator } from './operatorAuth';
import { dashboardApi, adminApi, wss } from './services/cryptocrawl/api/index';
import bridgeApi from './services/cryptocrawl/api/bridge-api';
import cryptoWiringRoutes from './routes/cryptoWiring.routes';
import stageGovernorRoutes from './routes/stageGovernor.routes';
import arbitrageAgentsRoutes from './routes/arbitrageAgents.routes';
import { createBeamRouter } from './services/cryptocrawl/beam/beamRoutes';

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use('/api', operatorAuth);
app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'thwart' }));
app.use('/api/crypto', requireOperator, cryptoWiringRoutes, dashboardApi);
app.use('/admin/crypto', requireOperator, adminApi);
app.use('/api/bridge', requireOperator, bridgeApi);
app.use('/api/governance', requireOperator, stageGovernorRoutes);
app.use('/api/arbitrage', requireOperator, arbitrageAgentsRoutes);
app.use('/beam', createBeamRouter());
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));
app.use('/admin', (_req, res) => res.status(404).json({ error: 'Not found' }));
app.use(express.static(path.resolve('dist/public')));
app.get('*', (_req, res) => res.sendFile(path.resolve('dist/public/index.html')));
const server = createServer(app);
server.on('upgrade', (request, socket, head) => {
  if (request.url === '/api/crypto/live') {
    wss.handleUpgrade(request, socket, head, ws => wss.emit('connection', ws, request));
  } else socket.destroy();
});
server.listen(Number(process.env.PORT || 5000), '0.0.0.0', () => {
  console.log('THWART listening; CryptoCrawler remains stopped until operator start.');
});
