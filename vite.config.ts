import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { monteCarloWorkerAssetPlugin } from './scripts/cryptocrawl/vite-monte-carlo-worker-build';
const root = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({ root: path.join(root, 'client'), plugins: [react(), monteCarloWorkerAssetPlugin()], resolve: { alias: { '@': path.join(root, 'client/src'), '@shared': path.join(root, 'shared') } }, build: { outDir: path.join(root, 'dist/public'), emptyOutDir: true } });
