import path from 'node:path';
import { build as esbuildBuild } from 'esbuild';

// Archived trading-only Vite worker hook extracted from LegalWhat's frontend build.
const __dirname = process.cwd();

function cryptocrawlMonteCarloWorkerBuild() {
  return {
    name: "cryptocrawl-monte-carlo-worker-build",
    apply: "build" as const,
    async closeBundle() {
      await esbuildBuild({
        entryPoints: [path.resolve(__dirname, "server/services/cryptocrawl/execution/adapters/monte-carlo-worker.ts")],
        bundle: true,
        platform: "node",
        target: "node20",
        format: "esm",
        outfile: path.resolve(__dirname, "dist/cryptocrawl-monte-carlo-worker.js"),
        packages: "external",
        define: { "process.env.NODE_ENV": "'production'" },
      });
    },
  };
}
