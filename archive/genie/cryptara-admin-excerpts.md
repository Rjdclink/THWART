# CRYPTARA administrator permissions and diagnostics

```ts
      {
        id: 'perm-cryptara-crawler',
        name: 'CRYPTARA Market Crawler',
        category: 'crawler',
        description: 'Crypto market surveillance: continuous monitoring',
        approved: true,
        approvedBy: 'system',
        approvedAt: new Date(),
        scheduledFor: null,
        weekday: null,
        timeSlot: null,
      },
      {
        id: 'perm-crypto-faucet',
        name: 'Crypto Faucet Trigger',
        category: 'faucet',
        description: 'Faucet-initiated crypto operations',
        approved: false,
        approvedBy: null,
        approvedAt: null,
        scheduledFor: null,
        weekday: null,
        timeSlot: null,
      },

    // CRYPTARA diagnostic
    const cryptaraStatus = this.genie?.getCryptara()?.getStatus();
    diagnostics.push({
      moduleName: 'CRYPTARA (Crypto Intelligence)',
      status: cryptaraStatus?.isRunning ? 'healthy' : 'offline',
      synopsis: cryptaraStatus?.isRunning
        ? `CRYPTARA is actively surveilling crypto markets. It has run ${cryptaraStatus.totalSimulations} Monte Carlo simulations, detected ${cryptaraStatus.totalPatterns} patterns, and generated ${cryptaraStatus.totalPredictions} predictions. Faucet status: ${cryptaraStatus.faucetStatus}.`
        : 'CRYPTARA is currently offline. Initialize 4JI-GENIE to start crypto surveillance.',
      lastCheck: new Date(),
      metrics: {
        uptime: cryptaraStatus?.uptime ?? 0,
        requestsProcessed: cryptaraStatus?.totalSimulations ?? 0,
        errorRate: cryptaraStatus ? (cryptaraStatus.errorCount / Math.max(cryptaraStatus.totalSimulations, 1)) * 100 : 0,
        avgResponseTimeMs: 500,
      },
    });


```
