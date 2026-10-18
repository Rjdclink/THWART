// Archived CryptoCrawler observational crawler definitions from Lexara's shared registry.
// This metadata belongs to THWART, not the LegalWhat legal research crawler pool.
const always = () => true;
function c(id: string, displayName: string, family: string, implementationPath: string,
  capabilities: readonly string[], executionMode: string, latencyClass: string,
  configured: () => boolean = always, notes?: string) {
  return { id, displayName, family, implementationPath, capabilities, executionMode, latencyClass, configured, notes };
}
export const CRYPTOCRAWLER_OBSERVATIONAL_CRAWLERS = [
  // Crypto-domain crawlers are available to Lexara only as read-only evidence
  // producers. They never receive trading/execution authority.
  c('cain', 'CainCrawler', 'crypto-observational', 'server/services/cryptocrawl/core/cain-crawler.ts', ['crypto-observation', 'pattern-analysis'], 'observational', 'fast'),
  c('conjoined-twin', 'ConjoinedTwinCrawler', 'crypto-observational', 'server/services/cryptocrawl/agents/conjoined-twin-crawler.ts', ['crypto-observation', 'verification'], 'observational', 'fast'),
  c('enhanced-micro', 'EnhancedMicroCrawler', 'crypto-observational', 'server/services/cryptocrawl/agents/enhanced-micro-crawler.ts', ['crypto-observation', 'market-observation'], 'observational', 'fast'),
  c('cain-twin-hybrid', 'CainTwinHybrid', 'crypto-observational', 'server/services/cryptocrawl/agents/cain-twin-hybrid.ts', ['crypto-observation', 'pattern-analysis'], 'observational', 'fast'),
  c('gravity', 'GravityCrawler', 'crypto-observational', 'server/services/cryptocrawl/intelligence/gravity-reaper.ts', ['crypto-observation', 'market-observation'], 'observational', 'instant'),
  c('disco-ball', 'DiscoBallCrawler', 'crypto-observational', 'server/services/cryptocrawl/strategies/disco-ball-mirror.ts', ['crypto-observation', 'market-observation'], 'observational', 'fast'),
  c('starburst-dynamic', 'Starburst Dynamic Crawler Pool', 'crypto-observational', 'server/services/cryptocrawl/capital-free/starburst-scaling.ts', ['crypto-observation', 'market-observation'], 'observational', 'fast'),
  c('starburst-micro', 'Starburst Micro-Crawlers', 'crypto-observational', 'server/services/cryptocrawl/capital-free/starburst-scaling.ts', ['crypto-observation', 'market-observation'], 'observational', 'instant'),
  c('verification-crawlers', 'Verification Crawlers', 'crypto-observational', 'server/services/cryptocrawl/compensation/compensationGuarantee.ts', ['verification', 'crypto-observation'], 'observational', 'instant', always, 'Read-only deterministic payout-evidence verification; no execution or settlement authority.'),
  c('snake-agent', 'SnakeAgent Legacy Crawler', 'crypto-observational', 'server/services/cryptocrawl/agents/starburst-snake.ts', ['crypto-observation', 'pattern-analysis'], 'observational', 'instant', always, 'Compatibility crawler is read-only and cannot submit trades.'),
] as const;
