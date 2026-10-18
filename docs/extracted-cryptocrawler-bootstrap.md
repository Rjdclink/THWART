# Preserved CryptoCrawler-only bootstrap segments

These blocks were extracted from Bad-Blue `server/index.ts` before removing CryptoCrawler-only startup behavior. They are retained here for THWART; no LegalWhat worker, voice, database, authentication or readiness logic is removed.

## Segment 1

```ts
async function waitForOverflowBootstrapReadiness(): Promise<boolean> {
  // CryptoCrawler is operator-controlled. Server readiness must never wake its
  // Overflow bridge, workers, schema verifier, or database pools while Master
  // Power is OFF.
  startupTrace('cryptocrawler_overflow_bootstrap_deferred', {
    reason: 'manual_master_power_off',
    databaseIo: false,
    workerStartup: false,
  });
  return false;
}
```

## Segment 2

```ts
  console.log('[STARTUP] ✓ CryptoCrawler services deferred; Master Power remains OFF until explicit dashboard start');

  // CryptoCrawler is an operator-controlled runtime. Process/bootstrap readiness
  // initializes shared dependencies only; discovery/execution must remain stopped
  // until an authenticated master explicitly presses Start on the dashboard.
  console.log('[STARTUP] ✓ CryptoCrawler runtime remains STOPPED pending explicit master start');
```

## Segment 3

```ts
  // LegalWhat proves only its ordinary application database here. CryptoCrawler's
  // Overflow data plane is deliberately absent from process bootstrap and can be
  // opened only by the authenticated /admin/crypto/start lifecycle.
```

## Segment 4

```ts
    startupTrace('cryptocrawler_master_power_off_at_boot', {
      lifecycle: 'STOPPED',
      overflowProbeIssued: false,
      cryptoDatabaseIo: false,
    });
    console.log('[STARTUP] ✓ CryptoCrawler Master Power OFF: no CryptoCrawler Overflow probe, worker, schema I/O, or market activity started');
```

## Segment 5

```ts
    startupTrace('application_ready', {
      cryptocrawlerMasterPower: 'OFF',
      cryptocrawlerDatabaseIo: false,
    });
    console.log('[STARTUP] ✓ Server fully initialized; CryptoCrawler remains fully OFF pending manual dashboard start');
```

