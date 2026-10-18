// Trading-only schema authority extracted from LegalWhat on 2026-10-18.
// Preserved as THWART source; independent compilation is not required.
import * as fs from 'fs';
import * as path from 'path';
import { pool } from '../db';
import { isCryptoCrawlerDatabaseAccessAllowed } from '../services/cryptocrawl/runtime/manual-power-state.js';
import { createCryptoGovernanceStateTable } from './createCryptoGovernanceStateTable';
import { removeCryptocrawlFlashbotsAuthIdentityTable } from './removeCryptocrawlFlashbotsAuthIdentityTable';

type MigrationCoordinator = { query: (text: string, values?: unknown[]) => Promise<any> };
interface SchemaMigrationResult { name: string; success: boolean; message?: string; error?: string }

const CRYPTOCRAWL_AUTHORITY_MIGRATIONS = [
  '023_cryptocrawler_hot_path_schema_authority.sql',
  '024_cryptocrawler_funding_lifecycle.sql',
  '025_cryptocrawler_rainbow_source_ledger.sql',
] as const;

const CRYPTOCRAWL_REQUIRED_AUTHORITY_TABLES = [
  'public.cryptocrawler_resource_leases',
  'public.cryptocrawler_mc_calibration_v1',
  'private.cryptocrawler_kraken_nonce_state',
  'private.cryptocrawler_funding_lifecycles',
] as const;

const CRYPTOCRAWL_RESOURCE_SLOT_FUNCTION_SIGNATURE =
  'private.cryptocrawler_claim_resource_slot(text,integer,integer,text,text,text,timestamp with time zone)';

export class CryptocrawlerAuthoritySchemaError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CryptocrawlerAuthoritySchemaError';
  }
}

function resolveBundledMigrationPath(file: string): string {
  const candidates = [
    path.resolve(process.cwd(), 'dist', 'migrations', file),
    path.resolve(process.cwd(), 'server', 'migrations', file),
  ];
  const resolved = candidates.find(candidate => fs.existsSync(candidate));
  if (!resolved) {
    throw new Error(`Migration-owned CryptoCrawler SQL asset is missing: ${file}`);
  }
  return resolved;
}

async function runCryptocrawlerAuthorityMigration(
  coordinator: MigrationCoordinator,
  file: typeof CRYPTOCRAWL_AUTHORITY_MIGRATIONS[number],
): Promise<{ message: string }> {
  const filePath = resolveBundledMigrationPath(file);
  const sql = fs.readFileSync(filePath, 'utf8');
  if (!sql.trim()) throw new Error(`Migration-owned CryptoCrawler SQL asset is empty: ${file}`);
  // DDL/migrations belong on a session-capable/direct connection. Using the same
  // client that owns STARTUP_MIGRATION_LOCK also keeps ownership and mutation in
  // one session and avoids routing migration DDL through Supavisor transaction mode.
  await coordinator.query(sql);
  return { message: `${file} applied from migration authority on session coordinator` };
}

async function verifyCryptocrawlerAuthoritySchemaOnce(): Promise<void> {
  // One query proves every execution-critical relation plus the shared slot
  // claimant. The same proof primes runtime lease and funding readiness so those
  // workers do not pay duplicate schema probes after startup.
  const result = await pool.query(
    `SELECT
       to_regclass($1)::text AS resource_leases,
       to_regclass($2)::text AS mc_calibration,
       to_regclass($3)::text AS kraken_nonce,
       to_regclass($4)::text AS funding_lifecycles,
       to_regprocedure($5)::text AS resource_slot_claimant`,
    [...CRYPTOCRAWL_REQUIRED_AUTHORITY_TABLES, CRYPTOCRAWL_RESOURCE_SLOT_FUNCTION_SIGNATURE],
  );
  const row = result.rows?.[0] || {};
  const observed = [row.resource_leases, row.mc_calibration, row.kraken_nonce, row.funding_lifecycles];
  const missing = CRYPTOCRAWL_REQUIRED_AUTHORITY_TABLES.filter((_, index) => !observed[index]);
  if (missing.length > 0 || !row.resource_slot_claimant) {
    const missingAuthority = [
      ...missing,
      ...(!row.resource_slot_claimant ? [CRYPTOCRAWL_RESOURCE_SLOT_FUNCTION_SIGNATURE] : []),
    ];
    throw new Error(`required CryptoCrawler authority schema is absent: ${missingAuthority.join(', ')}`);
  }

  const [resourceAuthority, fundingAuthority] = await Promise.all([
    import('../services/cryptocrawl/execution/resource-lease-authority.js'),
    import('../services/cryptocrawl/execution/funding-position-lifecycle.js'),
  ]);
  resourceAuthority.primeResourceLeaseAuthorityReady();
  fundingAuthority.primeFundingLifecycleStoreReady();
}

function schemaRetryDelayMs(attempt: number): number {
  const capMs = Math.min(4_000, 500 * Math.max(1, attempt));
  const floorMs = Math.min(250, Math.max(50, Math.floor(capMs / 4)));
  return floorMs + Math.floor(Math.random() * Math.max(1, capMs - floorMs + 1));
}

export async function requireCryptocrawlerAuthoritySchema(maxAttempts = 6): Promise<void> {
  if (process.env.NODE_ENV === 'production' && !isCryptoCrawlerDatabaseAccessAllowed()) {
    throw new CryptocrawlerAuthoritySchemaError('CryptoCrawler master power is OFF; authority schema I/O is disabled');
  }
  let lastError: unknown = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await verifyCryptocrawlerAuthoritySchemaOnce();
      return;
    } catch (error) {
      lastError = error;
      if (attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, schemaRetryDelayMs(attempt)));
      }
    }
  }
  const message = lastError instanceof Error ? lastError.message : String(lastError || 'unknown schema verification failure');
  throw new CryptocrawlerAuthoritySchemaError(`CryptoCrawler authority schema readiness failed after ${maxAttempts} attempts: ${message}`);
}

function schemaFailureResult(error: unknown): SchemaMigrationResult {
  return {
    name: 'CryptoCrawler authority schema readiness',
    success: false,
    error: error instanceof Error ? error.message : String(error),
  };
}

export const tradingMigrationSteps = [
  {
    name: 'CryptoCrawler hot-path schema authority',
    run: coordinator => {
      if (!coordinator) throw new Error('CryptoCrawler authority migration requires the session migration coordinator');
      return runCryptocrawlerAuthorityMigration(coordinator, '023_cryptocrawler_hot_path_schema_authority.sql');
    },
  },
  {
    name: 'CryptoCrawler funding lifecycle schema authority',
    run: coordinator => {
      if (!coordinator) throw new Error('CryptoCrawler authority migration requires the session migration coordinator');
      return runCryptocrawlerAuthorityMigration(coordinator, '024_cryptocrawler_funding_lifecycle.sql');
    },
  },
  {
    name: 'CryptoCrawler Rainbow source-ledger schema authority',
    run: coordinator => {
      if (!coordinator) throw new Error('CryptoCrawler authority migration requires the session migration coordinator');
      return runCryptocrawlerAuthorityMigration(coordinator, '025_cryptocrawler_rainbow_source_ledger.sql');
    },
  },
  { name: 'CryptoCrawler governance state', run: createCryptoGovernanceStateTable },
  { name: 'Remove legacy CryptoCrawler Flashbots auth secret table', run: removeCryptocrawlFlashbotsAuthIdentityTable },
];
