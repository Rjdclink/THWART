# Independence review of 37 previously unresolved THWART files

Review date: October 18, 2026. Source reviewed: `Rjdclink/Bad-Blue` development commit `55118555621959f445815dfb987f4e32bd552db8`, cross-checked against the production source commit `666ce49bcccd8352cb4bb11f97073e719e10b2de`.

**Results: 6 independent of LegalWhat's code/functionality; 31 not independently removable under the user's strict no-shared-dependencies standard.**

**Independent** means no actual LegalWhat callers or active build/runtime dependency was identified; documentation may describe other trading assets, which THWART may receive later. **Not independent** includes proven executable dependencies, shared-purpose legal functionality, repository validation wiring, and documentation relationships that should remain intact.

These findings are based on file content inspection, reverse-import and exact-path searches, TypeScript parsing, dynamic file-loading investigation, and a disposable-copy removal simulation. Three targeted smoke tests passed; this does not establish a full production-equivalent regression pass.

## Individual decisions

1. `.github/workflows/cryptocrawler-test.yml` — **NO — retain in Bad-Blue**. GitHub workflow runs Bad-Blue's CryptoCrawler tests on pushes and PRs; moving it changes existing repository verification.
2. `CRYPTOCRAWL_OPTIONAL_AUTH.md` — **NO — retain in Bad-Blue**. Referenced by VERIFICATION_COMPLETE.md. Removing it leaves an existing documentation reference unresolved.
3. `contracts/cryptocrawl/README.md` — **YES — independent**. Crypto-only deployment instructions; no incoming application imports, build reads, or exact backlinks were found. Documentation only; contracts may be relocated later.
4. `docs/ARBITRAGE_AGENTS_VERIFICATION.md` — **YES — independent**. Crypto-arbitrage verification guide; no LegalWhat content or incoming code/document dependency was found. Documentation only.
5. `docs/LEXARA_LEGAL_MESH.md` — **NO — retain in Bad-Blue**. Explains LEXARA, LegalWhat, and Pantheon legal-provider routing; clearly LegalWhat-owned documentation.
6. `docs/cryptocrawl/bps-expanded-audit-2026-10-13.md` — **NO — retain in Bad-Blue**. Contains LEXARA and Spectra deployment history alongside CryptoCrawler analysis; mixed-domain document.
7. `scripts/cryptocrawl/nix-gen-research-map.txt` — **NO — retain in Bad-Blue**. Specifically referenced by server/services/cryptocrawl/optimization/nix-gen/README.md, which remains in Bad-Blue.
8. `scripts/cryptocrawl/verify-bps-reduction-behavior.cjs` — **NO — retain in Bad-Blue**. Invoked by the retained CryptoCrawler deployment-preflight verifier and loads retained trading source.
9. `scripts/cryptocrawl/verify-chain-fee-lifecycle-behavior.cjs` — **NO — retain in Bad-Blue**. Invoked by the retained deployment-preflight verifier and reads retained trading modules.
10. `scripts/cryptocrawl/verify-power-consistency-behavior.cjs` — **NO — retain in Bad-Blue**. Loads multiple retained CryptoCrawler admin/runtime sources and mocks the Pantheon integration; not a self-contained file.
11. `scripts/cryptocrawl/verify-price-lifecycle-behavior.cjs` — **NO — retain in Bad-Blue**. Invoked by the retained deployment-preflight verifier and dynamically reads retained trading modules.
12. `scripts/cryptocrawl/verify-scan-liveness-behavior.cjs` — **NO — retain in Bad-Blue**. Invoked by the retained deployment-preflight verifier and dynamically reads trading code.
13. `server/migrations/058_cryptocrawler_self_funded_cex_bootstrap.sql` — **NO — retain in Bad-Blue**. The application's migrations runner enumerates all SQL files inside server/migrations; removal alters its supported schema migration set.
14. `server/migrations/060_cryptocrawler_cex_inventory_transform.sql` — **NO — retain in Bad-Blue**. The application's migrations runner enumerates all SQL files inside server/migrations; removal alters its schema migration set.
15. `server/migrations/cryptocrawler-testing-tables.sql` — **NO — retain in Bad-Blue**. The application's migrations runner enumerates all SQL files inside server/migrations, including this testing schema.
16. `server/reactor/fusion/index.ts` — **NO — retain in Bad-Blue**. Exports the shared fusion/Monte Carlo adapter, including legal research evaluation, rather than a CryptoCrawler-only module.
17. `server/reactor/fusion/monte_carlo_adapter.ts` — **NO — retain in Bad-Blue**. Implements legal-research citation evaluation and OSINT analysis as well as other Monte Carlo functions.
18. `server/reactor/fusion/neural_fusion_engine.ts` — **NO — retain in Bad-Blue**. Contains scoring for the legal and OSINT domains; not exclusively CryptoCrawler code.
19. `server/reactor/metrics/index.ts` — **NO — retain in Bad-Blue**. Exports a shared AI-provider rate-limit monitor, not a CryptoCrawler-specific feature.
20. `server/reactor/metrics/rate_limit_monitor.ts` — **NO — retain in Bad-Blue**. Monitors generic AI-provider quotas, tokens, and costs; cannot be assigned exclusively to THWART.
21. `server/services/computationalBeam/ADVANCED_ENHANCEMENT_STRATEGY.md` — **NO — retain in Bad-Blue**. Linked from the shared computationalBeam README; moving it would break that repository reference.
22. `server/services/computationalBeam/HYPER_OPTIMIZATION_STRATEGY.md` — **NO — retain in Bad-Blue**. Describes optimization of shared computational Beam infrastructure rather than a trading-only component.
23. `server/services/computationalBeam/README.md` — **NO — retain in Bad-Blue**. Documents both CryptoCrawler and Pantheon integration; the retained Beam validator also reads this README.
24. `server/services/cryptocrawl/HYPER_EVOLVING_SWARM.md` — **NO — retain in Bad-Blue**. References CANONICAL_AUTHORITIES.md retained in Bad-Blue and is mentioned by retained swarm documentation.
25. `server/services/cryptocrawl/SECURITY_SUMMARY.md` — **YES — independent**. Archived trading-crawler security documentation; no direct application imports, exact backlinks, or LegalWhat-specific content were found.
26. `server/services/cryptocrawl/compensation/README.md` — **NO — retain in Bad-Blue**. Contains LegalWhat context and is referenced by the retained compensation-enhancement documentation.
27. `server/services/cryptocrawl/governance/DEPLOYMENT_GUIDE.md` — **NO — retain in Bad-Blue**. Describes retained governance source, stage management, and deployment procedures; not a self-contained archive.
28. `server/services/cryptocrawl/integration/atomic-bps-anytime-race.ts` — **NO — retain in Bad-Blue**. Loaded directly by scripts/cryptocrawl/verify-bps-reduction-behavior.cjs, itself called by deployment-preflight verification.
29. `server/services/cryptocrawl/scanners/IMPLEMENTATION_SUMMARY.md` — **YES — independent**. Scanner-only documentation, with no incoming application references; its elite-arbitrage-scanner.ts source is already preserved in THWART.
30. `server/services/cryptocrawl/scanners/SECURITY_SUMMARY.md` — **YES — independent**. Scanner-only security notes with no exact external backlink or LegalWhat imports; underlying scanner source is already in THWART.
31. `server/services/cryptocrawl/stealth/circuit-breaker.ts` — **YES — independent**. Standalone exported class with no imports or actual file-specific callers; TypeScript transpilation reported zero errors.
32. `server/services/cryptocrawl/ui/README.md` — **NO — retain in Bad-Blue**. Describes assets from the UI directory served by the existing application and is referenced by dashboard documentation.
33. `server/services/cryptocrawl/ui/dashboard-client.js` — **NO — retain in Bad-Blue**. Loaded by dashboard.html and served by the existing application's static-file route.
34. `server/services/cryptocrawl/ui/dashboard.html` — **NO — retain in Bad-Blue**. Served by Bad-Blue's existing Express static mount; removing it changes the current dashboard.
35. `server/services/cryptocrawl/wallet/.wallet.enc.json` — **NO — retain in Bad-Blue**. Encrypted wallet data is referenced by the paired wallet generator; also inappropriate to publish to a public repository.
36. `server/services/cryptocrawl/wallet/wallet-generator.ts` — **NO — retain in Bad-Blue**. Reads/writes the wallet-data file and application environment configuration; not independent of the retained wallet setup.
37. `server/services/inmateSearch/__tests__/MonteCarloInmateTest.ts` — **NO — retain in Bad-Blue**. Tests inmate and people search capabilities belonging to LegalWhat, not THWART.

## Transfer status

These six newly confirmed independent files have **not been moved or deleted** as part of this classification-only review. The pre-existing transfer manifest remains at 43 files; the production and development branches are unchanged. Do not merge or deploy based on this report.
