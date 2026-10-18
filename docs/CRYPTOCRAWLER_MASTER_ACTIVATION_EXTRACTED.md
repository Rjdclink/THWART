# CryptoCrawler startup preserved from LegalWhat

Original source: `server/services/4ji-orchestrator/master-activation.ts` at original pre-separation commit `8bae7c0d7bd106f89a1b93242ff9410f98302ff9`.

The following is the extracted trading-only initializer. It is deliberately not wired into the LegalWhat startup sequence; THWART can rewire it later.

```ts
  /**
   * Initialize CryptoCrawler with Monte Carlo simulations
   */
  private static async initializeCryptoCrawler(): Promise<void> {
    const cryptoCrawlerConfig = {
      enabled: true,
      monteCarlo: {
        enabled: this.config.cryptoCrawler.enableMonteCarloSimulations,
        continuous: true,
        predictiveLearning: true,
        marketTrendEvolution: true,
      },
      scheduling: {
        platformOptimization: this.config.cryptoCrawler.platformOptimizationSchedule,
        monteCarloSimulations: this.config.cryptoCrawler.monteCarloSchedule,
        timezone: this.config.cryptoCrawler.scheduleTimezone,
      },
      userDeviceComputation: {
        enabled: this.config.cryptoCrawler.enableUserDeviceComputation,
        offPeakHours: true,
        optimizeUsage: true,
      },
      autonomousEvolution: {
        enabled: this.config.cryptoCrawler.enableAutonomousEvolution,
        learning: true,
        recursiveAdaptive: true,
      },
    };

    await this.storeDomainState(Domain.CRYPTO_CRAWLER, 'cryptoCrawlerConfig', cryptoCrawlerConfig);
    log.info('CryptoCrawler Monte Carlo Operations initialized', {
      schedule: cryptoCrawlerConfig.scheduling,
    });
  }
```

Other trading-only configuration, health calculation, monitoring, and domain-state writes remain recoverable from the immutable GitHub recovery branch.
