# T.H.W.A.R.T. – files withheld before any source-code transfer

**Audit source:** `Rjdclink/Bad-Blue`, `develop` commit `55118555621959f445815dfb987f4e32bd552db8`; cross-checked against Railway deployment source `release/spectra-production-20261014` commit `666ce49bcccd8352cb4bb11f97073e719e10b2de`.

**Named trading-related / possibly shared files inspected:** 1,180.
**High-confidence file candidates to copy:** 11. **Withheld from movement:** 1,169.

**Meaning of withheld:** Either a dependency/reference was found **or** full independence could not be proven. This does **not** mean every withheld file is shared; conservative uncertainty is sufficient to withhold it.

The checks included full-file import and reverse-import scans, application build/test entrypoints and script references, exact source-path/filename mentions, production-versus-development content matches, and bidirectional closed-set validation. Sensitive wallet material is excluded. This is a code audit, not proof from executing a complete production-equivalent regression suite.

## Files approved for copy (not for deleting production without future tests)

1. `server/services/computationalBeam/comprehensive-validate.ts`
2. `server/services/cryptocrawl/config/chains.json`
3. `server/services/cryptocrawl/enhancements/snowball-mods.ts`
4. `server/services/cryptocrawl/mev/flashbots-engine.ts`
5. `server/services/cryptocrawl/mev/index.ts`
6. `server/services/cryptocrawl/mev/validator-bribing-advanced.ts`
7. `server/services/cryptocrawl/mev/validator-bribing.ts`
8. `server/services/cryptocrawl/stealth/config.ts`
9. `server/services/cryptocrawl/stealth/index.ts`
10. `server/services/cryptocrawl/stealth/telemetry.ts`
11. `server/services/cryptocrawl/strategies/cbvh-protocol.ts`

## Numbered list: files NOT approved for movement

The reason is the primary reason for withholding. Paths are deliberately preserved verbatim.

1. `.github/workflows/cryptocrawler-test.yml` — Workflow or deployed build artifact; retain pending migration.
2. `CRYPTOCRAWL_IMPLEMENTATION_SUMMARY.md` — Documentation; retain pending fuller transfer.
3. `CRYPTOCRAWL_OPTIONAL_AUTH.md` — Documentation; retain pending fuller transfer.
4. `artifacts/cryptocrawl/CryptocrawlBalancerFlashLoanReceiver.json` — Workflow or deployed build artifact; retain pending migration.
5. `artifacts/cryptocrawl/CryptocrawlSushiV3FlashReceiver.json` — Workflow or deployed build artifact; retain pending migration.
6. `client/src/hooks/useWallet.ts` — Intra-repository dependency or independent status not conclusively verified.
7. `client/src/pages/cryptocrawler-dashboard.tsx` — Referenced/imported from outside the trading candidate set.
8. `client/src/pages/cryptocrawler-v2.tsx` — Referenced/imported from outside the trading candidate set.
9. `contracts/cryptocrawl/CryptocrawlAaveBalancerDualFlashLoanReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
10. `contracts/cryptocrawl/CryptocrawlAaveV3FlashLoanReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
11. `contracts/cryptocrawl/CryptocrawlBalancerCompositeFlashLoanReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
12. `contracts/cryptocrawl/CryptocrawlBalancerFlashLoanReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
13. `contracts/cryptocrawl/CryptocrawlGhostWalletCapitalVault.sol` — Workflow or deployed build artifact; retain pending migration.
14. `contracts/cryptocrawl/CryptocrawlGhostWalletErc3156Bridge.sol` — Workflow or deployed build artifact; retain pending migration.
15. `contracts/cryptocrawl/CryptocrawlGhostWalletIntermediary.sol` — Workflow or deployed build artifact; retain pending migration.
16. `contracts/cryptocrawl/CryptocrawlGhostWalletUniswapXFiller.sol` — Workflow or deployed build artifact; retain pending migration.
17. `contracts/cryptocrawl/CryptocrawlMorphoFlashLoanReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
18. `contracts/cryptocrawl/CryptocrawlSushiV3FlashReceiver.sol` — Workflow or deployed build artifact; retain pending migration.
19. `contracts/cryptocrawl/README.md` — Workflow or deployed build artifact; retain pending migration.
20. `db/migrations/0018_add_crypto_wallet_tables.sql` — Database migration or service; integration not proven independent.
21. `db/migrations/0022_cryptocrawl_flashbots_auth_identity.sql` — Database migration or service; integration not proven independent.
22. `docs/ARBITRAGE_AGENTS_VERIFICATION.md` — Documentation; retain pending fuller transfer.
23. `docs/ARIES_EDGE_FORMATION_REACTOR.md` — Documentation; retain pending fuller transfer.
24. `docs/CRYPTOCRAWLER_KALSHI_RUNBOOK.md` — Documentation; retain pending fuller transfer.
25. `docs/CRYPTOCRAWLER_STAGED_GOVERNANCE.md` — Documentation; retain pending fuller transfer.
26. `docs/LEXARA_LEGAL_MESH.md` — LegalWhat component or ambiguous shared naming.
27. `docs/cryptocrawl/bps-expanded-audit-2026-10-13.md` — Documentation; retain pending fuller transfer.
28. `docs/cryptocrawl/bps-reduction-repair-evidence.md` — Documentation; retain pending fuller transfer.
29. `docs/cryptocrawl/scan-liveness-repair-evidence.md` — Documentation; retain pending fuller transfer.
30. `docs/cryptocrawler/BPS_FEE_RECOVERY_COMPLETION_20260905.md` — Documentation; retain pending fuller transfer.
31. `docs/cryptocrawler/PROGRESS_CONSOLIDATION_20260905.md` — Documentation; retain pending fuller transfer.
32. `scripts/cryptocrawl/build-server-overflow-authority.mjs` — Build, verification, or integration script; retain pending migration.
33. `scripts/cryptocrawl/compile-flashloan-receiver.ts` — Build, verification, or integration script; retain pending migration.
34. `scripts/cryptocrawl/compile-ghost-wallet-contracts.cjs` — Build, verification, or integration script; retain pending migration.
35. `scripts/cryptocrawl/compile-sushi-v3-flash-receiver.ts` — Build, verification, or integration script; retain pending migration.
36. `scripts/cryptocrawl/configure-flashloan-receiver.ts` — Build, verification, or integration script; retain pending migration.
37. `scripts/cryptocrawl/deploy-dual-flashloan-receiver.ts` — Build, verification, or integration script; retain pending migration.
38. `scripts/cryptocrawl/deploy-flashloan-receiver.ts` — Build, verification, or integration script; retain pending migration.
39. `scripts/cryptocrawl/lib/pr482-canonical-contract.cjs` — Build, verification, or integration script; retain pending migration.
40. `scripts/cryptocrawl/nix-gen-research-map.txt` — Build, verification, or integration script; retain pending migration.
41. `scripts/cryptocrawl/validate-zero-capital-layer.ts` — Build, verification, or integration script; retain pending migration.
42. `scripts/cryptocrawl/verify-300-profitability-live-execution-controls.cjs` — Build, verification, or integration script; retain pending migration.
43. `scripts/cryptocrawl/verify-aave-balancer-provider-mesh.cjs` — Build, verification, or integration script; retain pending migration.
44. `scripts/cryptocrawl/verify-aave-liquidation-profit-integrity.cjs` — Build, verification, or integration script; retain pending migration.
45. `scripts/cryptocrawl/verify-across-cross-chain-economics.cjs` — Build, verification, or integration script; retain pending migration.
46. `scripts/cryptocrawl/verify-across-live-token-authority.cjs` — Build, verification, or integration script; retain pending migration.
47. `scripts/cryptocrawl/verify-across-token-catalog-auth.cjs` — Build, verification, or integration script; retain pending migration.
48. `scripts/cryptocrawl/verify-alchemy-cost-governor.ts` — Build, verification, or integration script; retain pending migration.
49. `scripts/cryptocrawl/verify-alchemy-eip7702-delegation-authority.cjs` — Build, verification, or integration script; retain pending migration.
50. `scripts/cryptocrawl/verify-alchemy-filtered-mempool.cjs` — Build, verification, or integration script; retain pending migration.
51. `scripts/cryptocrawl/verify-antenna-production-hot-path.cjs` — Build, verification, or integration script; retain pending migration.
52. `scripts/cryptocrawl/verify-ape-measured-market-priority.cjs` — Build, verification, or integration script; retain pending migration.
53. `scripts/cryptocrawl/verify-aries-edge-formation-reactor.cjs` — Build, verification, or integration script; retain pending migration.
54. `scripts/cryptocrawl/verify-aries-v2-microstructure.cjs` — Build, verification, or integration script; retain pending migration.
55. `scripts/cryptocrawl/verify-atomic-zero-capital-strategy-coverage.cjs` — Build, verification, or integration script; retain pending migration.
56. `scripts/cryptocrawl/verify-batch12-entrypoint.cjs` — Build, verification, or integration script; retain pending migration.
57. `scripts/cryptocrawl/verify-beam-cancellation-authority.cjs` — Build, verification, or integration script; retain pending migration.
58. `scripts/cryptocrawl/verify-binance-jurisdiction-circuit.cjs` — Build, verification, or integration script; retain pending migration.
59. `scripts/cryptocrawl/verify-bitfinex-rate-floor.cjs` — Build, verification, or integration script; retain pending migration.
60. `scripts/cryptocrawl/verify-bootstrap-execution-history.cjs` — Build, verification, or integration script; retain pending migration.
61. `scripts/cryptocrawl/verify-bps-efficiency-wave2-foundation.cjs` — Build, verification, or integration script; retain pending migration.
62. `scripts/cryptocrawl/verify-bps-frontier-wave3.cjs` — Build, verification, or integration script; retain pending migration.
63. `scripts/cryptocrawl/verify-bps-order-control-revalidation.cjs` — Build, verification, or integration script; retain pending migration.
64. `scripts/cryptocrawl/verify-bps-private-refund-wave4.cjs` — Build, verification, or integration script; retain pending migration.
65. `scripts/cryptocrawl/verify-bps-provider-feedback-wave5.cjs` — Build, verification, or integration script; retain pending migration.
66. `scripts/cryptocrawl/verify-bps-rebate-refund-truth.cjs` — Build, verification, or integration script; retain pending migration.
67. `scripts/cryptocrawl/verify-bps-reduction-behavior.cjs` — Build, verification, or integration script; retain pending migration.
68. `scripts/cryptocrawl/verify-bps-structural-repairs.cjs` — Build, verification, or integration script; retain pending migration.
69. `scripts/cryptocrawl/verify-bps-terminal-off.cjs` — Imports code outside the trading candidate set.
70. `scripts/cryptocrawl/verify-bps-zero-capital-event-handoff.cjs` — Build, verification, or integration script; retain pending migration.
71. `scripts/cryptocrawl/verify-builder-bootstrap-dynamic-gas.cjs` — Build, verification, or integration script; retain pending migration.
72. `scripts/cryptocrawl/verify-builder-sponsored-coldstart-foundation.cjs` — Build, verification, or integration script; retain pending migration.
73. `scripts/cryptocrawl/verify-canonical-execution-family-completion.cjs` — Build, verification, or integration script; retain pending migration.
74. `scripts/cryptocrawl/verify-canonical-governance.ts` — Build, verification, or integration script; retain pending migration.
75. `scripts/cryptocrawl/verify-canonical-refresh-capability-authority.cjs` — Build, verification, or integration script; retain pending migration.
76. `scripts/cryptocrawl/verify-canonical-wallet-architecture.cjs` — Build, verification, or integration script; retain pending migration.
77. `scripts/cryptocrawl/verify-cex-authoritative-batch-handoff.cjs` — Build, verification, or integration script; retain pending migration.
78. `scripts/cryptocrawl/verify-cex-economic-barrier-policy.ts` — Build, verification, or integration script; retain pending migration.
79. `scripts/cryptocrawl/verify-cex-fee-recovery-completion.cjs` — Build, verification, or integration script; retain pending migration.
80. `scripts/cryptocrawl/verify-cex-observation-funnel.ts` — Build, verification, or integration script; retain pending migration.
81. `scripts/cryptocrawl/verify-cex-order-mode-policy.cjs` — Build, verification, or integration script; retain pending migration.
82. `scripts/cryptocrawl/verify-cex-private-authority.ts` — Build, verification, or integration script; retain pending migration.
83. `scripts/cryptocrawl/verify-cex-product-aware-fee-routing.cjs` — Build, verification, or integration script; retain pending migration.
84. `scripts/cryptocrawl/verify-cex-websocket-rpi-modernization.cjs` — Build, verification, or integration script; retain pending migration.
85. `scripts/cryptocrawl/verify-chain-fee-lifecycle-behavior.cjs` — Build, verification, or integration script; retain pending migration.
86. `scripts/cryptocrawl/verify-clean-house-authority-extensions.cjs` — Build, verification, or integration script; retain pending migration.
87. `scripts/cryptocrawl/verify-clean-house.cjs` — Build, verification, or integration script; retain pending migration.
88. `scripts/cryptocrawl/verify-coinbase-advanced-market-data.ts` — Build, verification, or integration script; retain pending migration.
89. `scripts/cryptocrawl/verify-coinbase-advanced-trade-authority.ts` — Build, verification, or integration script; retain pending migration.
90. `scripts/cryptocrawl/verify-coinbase-batch12-preflight.cjs` — Build, verification, or integration script; retain pending migration.
91. `scripts/cryptocrawl/verify-coinbase-integration-wiring.cjs` — Build, verification, or integration script; retain pending migration.
92. `scripts/cryptocrawl/verify-coinbase-spot-settlement-adapter.ts` — Build, verification, or integration script; retain pending migration.
93. `scripts/cryptocrawl/verify-coincap-environment-wiring.cjs` — Build, verification, or integration script; retain pending migration.
94. `scripts/cryptocrawl/verify-coinstats-environment-contract.ts` — Build, verification, or integration script; retain pending migration.
95. `scripts/cryptocrawl/verify-competition-evidence-policy.ts` — Build, verification, or integration script; retain pending migration.
96. `scripts/cryptocrawl/verify-competition-evidence-wiring.cjs` — Build, verification, or integration script; retain pending migration.
97. `scripts/cryptocrawl/verify-compound-runtime-profitability-repairs.cjs` — Build, verification, or integration script; retain pending migration.
98. `scripts/cryptocrawl/verify-compute-antenna-monte-carlo-batch11.cjs` — Build, verification, or integration script; retain pending migration.
99. `scripts/cryptocrawl/verify-controlled-loss-learning.cjs` — Build, verification, or integration script; retain pending migration.
100. `scripts/cryptocrawl/verify-core-topology-lifecycle.ts` — Build, verification, or integration script; retain pending migration.
101. `scripts/cryptocrawl/verify-core-topology-wiring.cjs` — Build, verification, or integration script; retain pending migration.
102. `scripts/cryptocrawl/verify-cross-chain-funding-route-truth.cjs` — Build, verification, or integration script; retain pending migration.
103. `scripts/cryptocrawl/verify-cross-venue-asset-identity.cjs` — Build, verification, or integration script; retain pending migration.
104. `scripts/cryptocrawl/verify-cryptara-hyper-bridge-bootstrap.cjs` — Build, verification, or integration script; retain pending migration.
105. `scripts/cryptocrawl/verify-cryptara-resource-intelligence.cjs` — Build, verification, or integration script; retain pending migration.
106. `scripts/cryptocrawl/verify-cryptara-sovereign-cortex.cjs` — Build, verification, or integration script; retain pending migration.
107. `scripts/cryptocrawl/verify-cryptara-supabase-admission-worker.cjs` — Build, verification, or integration script; retain pending migration.
108. `scripts/cryptocrawl/verify-cryptara-supabase-comp-switch.cjs` — Build, verification, or integration script; retain pending migration.
109. `scripts/cryptocrawl/verify-cryptara-supabase-hyper-bridge.cjs` — Build, verification, or integration script; retain pending migration.
110. `scripts/cryptocrawl/verify-cryptara-supabase-overflow.cjs` — Build, verification, or integration script; retain pending migration.
111. `scripts/cryptocrawl/verify-cryptara-super-worker-runtime.ts` — Build, verification, or integration script; retain pending migration.
112. `scripts/cryptocrawl/verify-cryptara-super-worker.cjs` — Build, verification, or integration script; retain pending migration.
113. `scripts/cryptocrawl/verify-cryptara-wiring.cjs` — Build, verification, or integration script; retain pending migration.
114. `scripts/cryptocrawl/verify-dashboard-control-state.cjs` — Build, verification, or integration script; retain pending migration.
115. `scripts/cryptocrawl/verify-degraded-rpc-cross-chain-admission.cjs` — Build, verification, or integration script; retain pending migration.
116. `scripts/cryptocrawl/verify-deployment-preflight.cjs` — Build, verification, or integration script; retain pending migration.
117. `scripts/cryptocrawl/verify-deterministic-positive-quote-admission.cjs` — Build, verification, or integration script; retain pending migration.
118. `scripts/cryptocrawl/verify-dex-atomic-profit-path.cjs` — Build, verification, or integration script; retain pending migration.
119. `scripts/cryptocrawl/verify-dex-concurrent-discovery.cjs` — Build, verification, or integration script; retain pending migration.
120. `scripts/cryptocrawl/verify-dynamic-cryptara-canary-mc.cjs` — Build, verification, or integration script; retain pending migration.
121. `scripts/cryptocrawl/verify-dynamic-europa-route.ts` — Build, verification, or integration script; retain pending migration.
122. `scripts/cryptocrawl/verify-dynamic-maker-recovery-zerox.cjs` — Build, verification, or integration script; retain pending migration.
123. `scripts/cryptocrawl/verify-dynamic-rpc-provider-admission.cjs` — Build, verification, or integration script; retain pending migration.
124. `scripts/cryptocrawl/verify-dynamic-scale-profile-policy.ts` — Build, verification, or integration script; retain pending migration.
125. `scripts/cryptocrawl/verify-effective-gas-economics.cjs` — Build, verification, or integration script; retain pending migration.
126. `scripts/cryptocrawl/verify-europa-adapter.ts` — Build, verification, or integration script; retain pending migration.
127. `scripts/cryptocrawl/verify-europa-network.ts` — Build, verification, or integration script; retain pending migration.
128. `scripts/cryptocrawl/verify-europa-sushi-registry.ts` — Build, verification, or integration script; retain pending migration.
129. `scripts/cryptocrawl/verify-execution-identity-binding.cjs` — Build, verification, or integration script; retain pending migration.
130. `scripts/cryptocrawl/verify-faucet-alchemy-wiring.cjs` — Build, verification, or integration script; retain pending migration.
131. `scripts/cryptocrawl/verify-filtered-mempool-wiring.cjs` — Build, verification, or integration script; retain pending migration.
132. `scripts/cryptocrawl/verify-final-evidence-route-resolution.cjs` — Build, verification, or integration script; retain pending migration.
133. `scripts/cryptocrawl/verify-first-pass-route-measurability.cjs` — Build, verification, or integration script; retain pending migration.
134. `scripts/cryptocrawl/verify-flash-provider-rescue-path.cjs` — Build, verification, or integration script; retain pending migration.
135. `scripts/cryptocrawl/verify-fluid-simulation-return-decoding.cjs` — Build, verification, or integration script; retain pending migration.
136. `scripts/cryptocrawl/verify-free-tier-startup-gate.cjs` — Build, verification, or integration script; retain pending migration.
137. `scripts/cryptocrawl/verify-full-runtime-regression-repair.cjs` — Build, verification, or integration script; retain pending migration.
138. `scripts/cryptocrawl/verify-funding-arbitrage-policy.ts` — Build, verification, or integration script; retain pending migration.
139. `scripts/cryptocrawl/verify-ghost-settlement-log-failover.cjs` — Build, verification, or integration script; retain pending migration.
140. `scripts/cryptocrawl/verify-ghost-wallet-100-100-remediation.cjs` — Build, verification, or integration script; retain pending migration.
141. `scripts/cryptocrawl/verify-ghost-wallet-atomic-capital.cjs` — Build, verification, or integration script; retain pending migration.
142. `scripts/cryptocrawl/verify-ghost-wallet-autonomous-readiness.cjs` — Build, verification, or integration script; retain pending migration.
143. `scripts/cryptocrawl/verify-ghost-wallet-demand-gas-rpc.cjs` — Build, verification, or integration script; retain pending migration.
144. `scripts/cryptocrawl/verify-ghost-wallet-merge-gate.cjs` — Build, verification, or integration script; retain pending migration.
145. `scripts/cryptocrawl/verify-ghost-wallet-performance-optimizations.cjs` — Build, verification, or integration script; retain pending migration.
146. `scripts/cryptocrawl/verify-hyper-monte-carlo.ts` — Build, verification, or integration script; retain pending migration.
147. `scripts/cryptocrawl/verify-hyperscope-first3-runtime-authority.cjs` — Build, verification, or integration script; retain pending migration.
148. `scripts/cryptocrawl/verify-inventory-intent-netting.cjs` — Build, verification, or integration script; retain pending migration.
149. `scripts/cryptocrawl/verify-kalshi-bps-integration.cjs` — Build, verification, or integration script; retain pending migration.
150. `scripts/cryptocrawl/verify-kalshi-coinbase-funding-integration.cjs` — Build, verification, or integration script; retain pending migration.
151. `scripts/cryptocrawl/verify-kalshi-negative-funding-inverse.cjs` — Build, verification, or integration script; retain pending migration.
152. `scripts/cryptocrawl/verify-kalshi-premerge-completion.cjs` — Build, verification, or integration script; retain pending migration.
153. `scripts/cryptocrawl/verify-kraken-authenticated-fee-authority.cjs` — Build, verification, or integration script; retain pending migration.
154. `scripts/cryptocrawl/verify-kraken-l3-queue-amend.cjs` — Build, verification, or integration script; retain pending migration.
155. `scripts/cryptocrawl/verify-liquidation-log-range-failover.cjs` — Build, verification, or integration script; retain pending migration.
156. `scripts/cryptocrawl/verify-live-maker-adaptive-ttl.cjs` — Build, verification, or integration script; retain pending migration.
157. `scripts/cryptocrawl/verify-low-latency-execution-policy.ts` — Build, verification, or integration script; retain pending migration.
158. `scripts/cryptocrawl/verify-maker-correlation-trace.cjs` — Build, verification, or integration script; retain pending migration.
159. `scripts/cryptocrawl/verify-maker-latency-evidence.cjs` — Build, verification, or integration script; retain pending migration.
160. `scripts/cryptocrawl/verify-maker-taker-policy.ts` — Build, verification, or integration script; retain pending migration.
161. `scripts/cryptocrawl/verify-manual-master-lifecycle.cjs` — Build, verification, or integration script; retain pending migration.
162. `scripts/cryptocrawl/verify-market-data-wiring.cjs` — Build, verification, or integration script; retain pending migration.
163. `scripts/cryptocrawl/verify-market-evidence-kalshi-capability.cjs` — Build, verification, or integration script; retain pending migration.
164. `scripts/cryptocrawl/verify-market-focus-and-cadence.ts` — Build, verification, or integration script; retain pending migration.
165. `scripts/cryptocrawl/verify-migration-authority-runtime.cjs` — Build, verification, or integration script; retain pending migration.
166. `scripts/cryptocrawl/verify-minimum-sufficient-execution-evidence.cjs` — Build, verification, or integration script; retain pending migration.
167. `scripts/cryptocrawl/verify-morpho-zero-fee-flash.cjs` — Build, verification, or integration script; retain pending migration.
168. `scripts/cryptocrawl/verify-multi-topology-discovery-liveness.cjs` — Build, verification, or integration script; retain pending migration.
169. `scripts/cryptocrawl/verify-multi-topology-latency.cjs` — Build, verification, or integration script; retain pending migration.
170. `scripts/cryptocrawl/verify-native-rpc-fallback-mesh.cjs` — Build, verification, or integration script; retain pending migration.
171. `scripts/cryptocrawl/verify-nix-gen-ape-latency-five-dollar-floor.cjs` — Build, verification, or integration script; retain pending migration.
172. `scripts/cryptocrawl/verify-nix-gen-atomic-bps-single-pipeline.cjs` — Build, verification, or integration script; retain pending migration.
173. `scripts/cryptocrawl/verify-nix-gen-bps-surplus-objective.cjs` — Build, verification, or integration script; retain pending migration.
174. `scripts/cryptocrawl/verify-nix-gen-capability-completion.cjs` — Build, verification, or integration script; retain pending migration.
175. `scripts/cryptocrawl/verify-nix-gen-coinbase-convert-auction.cjs` — Build, verification, or integration script; retain pending migration.
176. `scripts/cryptocrawl/verify-nix-gen-completion-static.cjs` — Build, verification, or integration script; retain pending migration.
177. `scripts/cryptocrawl/verify-nix-gen-continuous-positive-margin.cjs` — Build, verification, or integration script; retain pending migration.
178. `scripts/cryptocrawl/verify-nix-gen-current-bps-freshness.cjs` — Build, verification, or integration script; retain pending migration.
179. `scripts/cryptocrawl/verify-nix-gen-dual-resource-pricing.ts` — Build, verification, or integration script; retain pending migration.
180. `scripts/cryptocrawl/verify-nix-gen-foundation.cjs` — Build, verification, or integration script; retain pending migration.
181. `scripts/cryptocrawl/verify-nix-gen-historical-capability-preservation.cjs` — Build, verification, or integration script; retain pending migration.
182. `scripts/cryptocrawl/verify-nix-gen-marginal-resource-value-static.cjs` — Build, verification, or integration script; retain pending migration.
183. `scripts/cryptocrawl/verify-nix-gen-marginal-resource-value.ts` — Build, verification, or integration script; retain pending migration.
184. `scripts/cryptocrawl/verify-nix-gen-measured-portfolio-static.cjs` — Build, verification, or integration script; retain pending migration.
185. `scripts/cryptocrawl/verify-nix-gen-measured-rebalance-route-evidence.cjs` — Build, verification, or integration script; retain pending migration.
186. `scripts/cryptocrawl/verify-nix-gen-optimizer.ts` — Build, verification, or integration script; retain pending migration.
187. `scripts/cryptocrawl/verify-nix-gen-portfolio-view-static.cjs` — Build, verification, or integration script; retain pending migration.
188. `scripts/cryptocrawl/verify-nix-gen-portfolio-view.ts` — Build, verification, or integration script; retain pending migration.
189. `scripts/cryptocrawl/verify-nix-gen-primary-market-anchor.cjs` — Build, verification, or integration script; retain pending migration.
190. `scripts/cryptocrawl/verify-nix-gen-private-execution-bps-feedback.cjs` — Build, verification, or integration script; retain pending migration.
191. `scripts/cryptocrawl/verify-nix-gen-protocol-anchor-arbitrage.cjs` — Build, verification, or integration script; retain pending migration.
192. `scripts/cryptocrawl/verify-nix-gen-replanner.ts` — Build, verification, or integration script; retain pending migration.
193. `scripts/cryptocrawl/verify-nix-gen-robustness-static.cjs` — Build, verification, or integration script; retain pending migration.
194. `scripts/cryptocrawl/verify-nix-gen-robustness.ts` — Build, verification, or integration script; retain pending migration.
195. `scripts/cryptocrawl/verify-nix-gen-runtime-replanner-wiring.cjs` — Build, verification, or integration script; retain pending migration.
196. `scripts/cryptocrawl/verify-nix-gen-scarcity-semantics.cjs` — Build, verification, or integration script; retain pending migration.
197. `scripts/cryptocrawl/verify-nix-gen-stage2-seven-strategy-regression-lock.cjs` — Build, verification, or integration script; retain pending migration.
198. `scripts/cryptocrawl/verify-nix-gen-terminal-calibration-static.cjs` — Build, verification, or integration script; retain pending migration.
199. `scripts/cryptocrawl/verify-nix-gen-zero-capital-funding-learning.cjs` — Build, verification, or integration script; retain pending migration.
200. `scripts/cryptocrawl/verify-no-regression-opportunity-pipeline-v2.cjs` — Build, verification, or integration script; retain pending migration.
201. `scripts/cryptocrawl/verify-no-regression-opportunity-pipeline.cjs` — Build, verification, or integration script; retain pending migration.
202. `scripts/cryptocrawl/verify-okx-account-fee-authority.cjs` — Build, verification, or integration script; retain pending migration.
203. `scripts/cryptocrawl/verify-okx-adaptive-rate-governor.cjs` — Build, verification, or integration script; retain pending migration.
204. `scripts/cryptocrawl/verify-okx-fee-authority.ts` — Build, verification, or integration script; retain pending migration.
205. `scripts/cryptocrawl/verify-okx-order-expiration.cjs` — Build, verification, or integration script; retain pending migration.
206. `scripts/cryptocrawl/verify-operator-treasury-strategy.cjs` — Build, verification, or integration script; retain pending migration.
207. `scripts/cryptocrawl/verify-overflow-complete-runtime-authority.cjs` — Build, verification, or integration script; retain pending migration.
208. `scripts/cryptocrawl/verify-payout-recipient-truth.cjs` — Build, verification, or integration script; retain pending migration.
209. `scripts/cryptocrawl/verify-pending-stream-provider-failover.cjs` — Build, verification, or integration script; retain pending migration.
210. `scripts/cryptocrawl/verify-post-aries-runtime-recovery.cjs` — Build, verification, or integration script; retain pending migration.
211. `scripts/cryptocrawl/verify-power-consistency-behavior.cjs` — Build, verification, or integration script; retain pending migration.
212. `scripts/cryptocrawl/verify-price-lifecycle-behavior.cjs` — Build, verification, or integration script; retain pending migration.
213. `scripts/cryptocrawl/verify-product-discovery-coverage.cjs` — Build, verification, or integration script; retain pending migration.
214. `scripts/cryptocrawl/verify-production-pressure-evidence-repairs.cjs` — Build, verification, or integration script; retain pending migration.
215. `scripts/cryptocrawl/verify-profit-blocker-wiring.cjs` — Build, verification, or integration script; retain pending migration.
216. `scripts/cryptocrawl/verify-profit-ladder-terminal-evidence.ts` — Build, verification, or integration script; retain pending migration.
217. `scripts/cryptocrawl/verify-profitability-recovery-coordinator.cjs` — Build, verification, or integration script; retain pending migration.
218. `scripts/cryptocrawl/verify-profitability-repair-capability-matrix.cjs` — Build, verification, or integration script; retain pending migration.
219. `scripts/cryptocrawl/verify-protocol-anchor-route-locality.cjs` — Build, verification, or integration script; retain pending migration.
220. `scripts/cryptocrawl/verify-provider-failure-locality.cjs` — Build, verification, or integration script; retain pending migration.
221. `scripts/cryptocrawl/verify-provider-runtime-resilience.cjs` — Build, verification, or integration script; retain pending migration.
222. `scripts/cryptocrawl/verify-provider-specific-receiver-coldstart.cjs` — Build, verification, or integration script; retain pending migration.
223. `scripts/cryptocrawl/verify-public-cex-beam-expansion.cjs` — Build, verification, or integration script; retain pending migration.
224. `scripts/cryptocrawl/verify-railway-bootstrap-budget.ts` — Build, verification, or integration script; retain pending migration.
225. `scripts/cryptocrawl/verify-railway-config-compatibility.cjs` — Build, verification, or integration script; retain pending migration.
226. `scripts/cryptocrawl/verify-rainbow-maker-fuel-reserve.cjs` — Build, verification, or integration script; retain pending migration.
227. `scripts/cryptocrawl/verify-rainbow-profit-bridge.cjs` — Build, verification, or integration script; retain pending migration.
228. `scripts/cryptocrawl/verify-remaining-seventeen-batch12.cjs` — Build, verification, or integration script; retain pending migration.
229. `scripts/cryptocrawl/verify-research-bps-transform-reassessment.cjs` — Build, verification, or integration script; retain pending migration.
230. `scripts/cryptocrawl/verify-resilient-http-circuit-breaker.cjs` — Build, verification, or integration script; retain pending migration.
231. `scripts/cryptocrawl/verify-resource-bps-authority.cjs` — Build, verification, or integration script; retain pending migration.
232. `scripts/cryptocrawl/verify-resource-bps-coordination.cjs` — Build, verification, or integration script; retain pending migration.
233. `scripts/cryptocrawl/verify-runtime-build-attestation.cjs` — Build, verification, or integration script; retain pending migration.
234. `scripts/cryptocrawl/verify-runtime-component-isolation.cjs` — Build, verification, or integration script; retain pending migration.
235. `scripts/cryptocrawl/verify-runtime-db-disconnect-resilience.cjs` — Build, verification, or integration script; retain pending migration.
236. `scripts/cryptocrawl/verify-runtime-initialization-efficiency.cjs` — Build, verification, or integration script; retain pending migration.
237. `scripts/cryptocrawl/verify-runtime-readiness-policy.ts` — Build, verification, or integration script; retain pending migration.
238. `scripts/cryptocrawl/verify-runtime-safety-invariants.cjs` — Build, verification, or integration script; retain pending migration.
239. `scripts/cryptocrawl/verify-scan-liveness-behavior.cjs` — Build, verification, or integration script; retain pending migration.
240. `scripts/cryptocrawl/verify-self-funded-capital-authority.cjs` — Build, verification, or integration script; retain pending migration.
241. `scripts/cryptocrawl/verify-single-profit-admission-authority.cjs` — Build, verification, or integration script; retain pending migration.
242. `scripts/cryptocrawl/verify-skale-difficulty-resolution.ts` — Build, verification, or integration script; retain pending migration.
243. `scripts/cryptocrawl/verify-skale-pow-adapter.ts` — Build, verification, or integration script; retain pending migration.
244. `scripts/cryptocrawl/verify-skale-pow-beam.ts` — Build, verification, or integration script; retain pending migration.
245. `scripts/cryptocrawl/verify-solution-implementation.cjs` — Build, verification, or integration script; retain pending migration.
246. `scripts/cryptocrawl/verify-sovereign-antenna-warm-breadth.cjs` — Build, verification, or integration script; retain pending migration.
247. `scripts/cryptocrawl/verify-stablecoin-maker-hyper-mc.cjs` — Build, verification, or integration script; retain pending migration.
248. `scripts/cryptocrawl/verify-stablecoin-maker-proof-engine.cjs` — Build, verification, or integration script; retain pending migration.
249. `scripts/cryptocrawl/verify-stage-one-negative-10-output-contract.cjs` — Build, verification, or integration script; retain pending migration.
250. `scripts/cryptocrawl/verify-stage-soft-gate-retirement.cjs` — Build, verification, or integration script; retain pending migration.
251. `scripts/cryptocrawl/verify-stage4-capital-provenance.ts` — Build, verification, or integration script; retain pending migration.
252. `scripts/cryptocrawl/verify-stage4-compute-coordinator.ts` — Build, verification, or integration script; retain pending migration.
253. `scripts/cryptocrawl/verify-stage4-execution-ledger.ts` — Build, verification, or integration script; retain pending migration.
254. `scripts/cryptocrawl/verify-stale-evidence-reacquisition.cjs` — Build, verification, or integration script; retain pending migration.
255. `scripts/cryptocrawl/verify-startup-database-admission.cjs` — Build, verification, or integration script; retain pending migration.
256. `scripts/cryptocrawl/verify-substantial-profitability-batch9.cjs` — Build, verification, or integration script; retain pending migration.
257. `scripts/cryptocrawl/verify-supabase-background-pressure.cjs` — Build, verification, or integration script; retain pending migration.
258. `scripts/cryptocrawl/verify-sushi-v3-flash-receiver.ts` — Build, verification, or integration script; retain pending migration.
259. `scripts/cryptocrawl/verify-system-native-gas-spend-authority.cjs` — Build, verification, or integration script; retain pending migration.
260. `scripts/cryptocrawl/verify-telemetry-ml-reconciliation.cjs` — Build, verification, or integration script; retain pending migration.
261. `scripts/cryptocrawl/verify-token-contract-directory.cjs` — Build, verification, or integration script; retain pending migration.
262. `scripts/cryptocrawl/verify-topology-execution-integrity.cjs` — Build, verification, or integration script; retain pending migration.
263. `scripts/cryptocrawl/verify-topology-local-runtime-readiness.cjs` — Build, verification, or integration script; retain pending migration.
264. `scripts/cryptocrawl/verify-tradingview-live.ts` — Build, verification, or integration script; retain pending migration.
265. `scripts/cryptocrawl/verify-tradingview-provenance.ts` — Build, verification, or integration script; retain pending migration.
266. `scripts/cryptocrawl/verify-truthful-admin-diagnostics.cjs` — Build, verification, or integration script; retain pending migration.
267. `scripts/cryptocrawl/verify-unified-adaptive-execution.cjs` — Build, verification, or integration script; retain pending migration.
268. `scripts/cryptocrawl/verify-unified-multileg-adaptive-engine.cjs` — Build, verification, or integration script; retain pending migration.
269. `scripts/cryptocrawl/verify-universal-fee-overcompensation.cjs` — Build, verification, or integration script; retain pending migration.
270. `scripts/cryptocrawl/verify-zero-capital-bps-observability.cjs` — Build, verification, or integration script; retain pending migration.
271. `scripts/cryptocrawl/verify-zero-capital-bps-propagation.cjs` — Build, verification, or integration script; retain pending migration.
272. `scripts/cryptocrawl/verify-zero-capital-capability-monotonicity.cjs` — Build, verification, or integration script; retain pending migration.
273. `scripts/cryptocrawl/verify-zero-capital-funding-readiness-wiring.cjs` — Build, verification, or integration script; retain pending migration.
274. `scripts/cryptocrawl/verify-zero-capital-gas-truth.cjs` — Build, verification, or integration script; retain pending migration.
275. `scripts/cryptocrawl/verify-zero-capital-quanticomp-authority.cjs` — Build, verification, or integration script; retain pending migration.
276. `scripts/cryptocrawl/verify-zero-capital-quote-liveness-current-shape.cjs` — Build, verification, or integration script; retain pending migration.
277. `scripts/cryptocrawl/verify-zero-capital-quote-liveness.cjs` — Build, verification, or integration script; retain pending migration.
278. `scripts/cryptocrawl/verify-zero-capital-resource-admission.cjs` — Build, verification, or integration script; retain pending migration.
279. `scripts/cryptocrawl/verify-zero-capital-route-preselection.cjs` — Build, verification, or integration script; retain pending migration.
280. `scripts/cryptocrawl/verify-zero-capital-route-retention-and-standby-truth.cjs` — Build, verification, or integration script; retain pending migration.
281. `scripts/cryptocrawl/verify-zero-capital-route-retention.ts` — Build, verification, or integration script; retain pending migration.
282. `scripts/cryptocrawl/verify-zero-capital-selector-wiring.cjs` — Build, verification, or integration script; retain pending migration.
283. `scripts/cryptocrawl/verify-zero-capital-single-authority.cjs` — Build, verification, or integration script; retain pending migration.
284. `scripts/cryptocrawl/verify-zero-capital-single-route-pipeline.cjs` — Build, verification, or integration script; retain pending migration.
285. `scripts/cryptocrawl/verify-zerox-discovery-boundary.cjs` — Build, verification, or integration script; retain pending migration.
286. `scripts/cryptocrawl/verify-zerox-request-budget.cjs` — Build, verification, or integration script; retain pending migration.
287. `scripts/cryptocrawl/verify-zerox-request-policy.ts` — Build, verification, or integration script; retain pending migration.
288. `scripts/run-arbitrage-agents.ts` — Build, verification, or integration script; retain pending migration.
289. `scripts/test-lexara-mesh-turn.cjs` — LegalWhat component or ambiguous shared naming.
290. `scripts/test-lexara-tts-mesh.cjs` — LegalWhat component or ambiguous shared naming.
291. `scripts/verify-monte-carlo-evolution.cjs` — Build, verification, or integration script; retain pending migration.
292. `server/4ji/integration/fourji_reactor_bridge.ts` — Intra-repository dependency or independent status not conclusively verified.
293. `server/__tests__/lexaraMonteCarloOptimizer.test.ts` — LegalWhat component or ambiguous shared naming.
294. `server/core/power/PowerMesh.ts` — Intra-repository dependency or independent status not conclusively verified.
295. `server/core/power/Reactor.ts` — Intra-repository dependency or independent status not conclusively verified.
296. `server/cryptara-bootstrap-entry.ts` — Imports code outside the trading candidate set.
297. `server/cryptaraModule.ts` — Referenced/imported from outside the trading candidate set.
298. `server/faucetGateway.ts` — Intra-repository dependency or independent status not conclusively verified.
299. `server/lexara/LegalProviderMesh.ts` — LegalWhat component or ambiguous shared naming.
300. `server/lexara/LexaraMonteCarloOptimizer.ts` — LegalWhat component or ambiguous shared naming.
301. `server/lexara/LexaraTTSMesh.ts` — LegalWhat component or ambiguous shared naming.
302. `server/lexara/monteCarloEnhancement.ts` — LegalWhat component or ambiguous shared naming.
303. `server/migrations/007_zero_capital_execution_ledger.sql` — Database migration or service; integration not proven independent.
304. `server/migrations/008_zero_capital_capital_provenance.sql` — Database migration or service; integration not proven independent.
305. `server/migrations/010_cryptocrawl_governance_state.sql` — Database migration or service; integration not proven independent.
306. `server/migrations/011_zero_capital_native_gas_funding.sql` — Database migration or service; integration not proven independent.
307. `server/migrations/012_zero_capital_profit_recipient_proof.sql` — Database migration or service; integration not proven independent.
308. `server/migrations/013_cryptocrawler_private_intelligence_memory.sql` — Database migration or service; integration not proven independent.
309. `server/migrations/014_cryptocrawler_private_outbox.sql` — Database migration or service; integration not proven independent.
310. `server/migrations/015_cryptocrawler_terminal_treasury_sweep.sql` — Database migration or service; integration not proven independent.
311. `server/migrations/016_cryptocrawler_terminal_sweeper_runtime.sql` — Database migration or service; integration not proven independent.
312. `server/migrations/017_cryptocrawler_terminal_sweep_truth_guard.sql` — Database migration or service; integration not proven independent.
313. `server/migrations/018_cryptocrawler_profit_split_eth_payout.sql` — Database migration or service; integration not proven independent.
314. `server/migrations/019_cryptocrawler_dynamic_payout_strategy.sql` — Database migration or service; integration not proven independent.
315. `server/migrations/020_cryptocrawler_trade_safe_payout_liquidity.sql` — Database migration or service; integration not proven independent.
316. `server/migrations/021_cryptocrawler_inventory_access_hardening.sql` — Database migration or service; integration not proven independent.
317. `server/migrations/022_cryptocrawler_payout_destination_fallback.sql` — Database migration or service; integration not proven independent.
318. `server/migrations/023_cryptocrawler_hot_path_schema_authority.sql` — Database migration or service; integration not proven independent.
319. `server/migrations/024_cryptocrawler_funding_lifecycle.sql` — Database migration or service; integration not proven independent.
320. `server/migrations/025_cryptocrawler_rainbow_source_ledger.sql` — Database migration or service; integration not proven independent.
321. `server/migrations/026_cryptocrawler_system_capital_allocations.sql` — Database migration or service; integration not proven independent.
322. `server/migrations/027_cryptocrawler_cex_system_owned_lots.sql` — Database migration or service; integration not proven independent.
323. `server/migrations/028_cryptocrawler_payout_recipient_confirmation.sql` — Database migration or service; integration not proven independent.
324. `server/migrations/029_cryptocrawler_terminal_sweep_recipient_confirmation.sql` — Database migration or service; integration not proven independent.
325. `server/migrations/030_cryptocrawler_payout_confirmation_truth_guard.sql` — Database migration or service; integration not proven independent.
326. `server/migrations/031_cryptocrawler_payout_confirmation_wait.sql` — Database migration or service; integration not proven independent.
327. `server/migrations/032_cryptocrawler_operator_trading_strategy.sql` — Database migration or service; integration not proven independent.
328. `server/migrations/033_cryptocrawler_operator_strategy_sequential_submission.sql` — Database migration or service; integration not proven independent.
329. `server/migrations/034_cryptocrawler_system_capital_treasury_strategy.sql` — Database migration or service; integration not proven independent.
330. `server/migrations/035_cryptocrawler_payout_funding_and_exact_transfer.sql` — Database migration or service; integration not proven independent.
331. `server/migrations/036_cryptocrawler_system_capital_wallet_sweep.sql` — Database migration or service; integration not proven independent.
332. `server/migrations/037_cryptocrawler_treasury_reservation_unification.sql` — Database migration or service; integration not proven independent.
333. `server/migrations/038_cryptocrawler_system_capital_sweep_idempotency.sql` — Database migration or service; integration not proven independent.
334. `server/migrations/039_cryptocrawler_system_capital_transfer_truth_hardening.sql` — Database migration or service; integration not proven independent.
335. `server/migrations/040_cryptocrawler_treasury_reservation_lifecycle_guard.sql` — Database migration or service; integration not proven independent.
336. `server/migrations/041_cryptocrawler_controlled_loss_learning.sql` — Database migration or service; integration not proven independent.
337. `server/migrations/042_cryptocrawler_onchain_system_capital.sql` — Database migration or service; integration not proven independent.
338. `server/migrations/043_cryptocrawler_cross_chain_lifecycle.sql` — Database migration or service; integration not proven independent.
339. `server/migrations/044_cryptocrawler_funding_feedback_recovery.sql` — Database migration or service; integration not proven independent.
340. `server/migrations/045_cryptocrawler_system_native_gas_spend_authority.sql` — Database migration or service; integration not proven independent.
341. `server/migrations/046_cryptocrawler_kalshi_system_owned_margin_capital.sql` — Database migration or service; integration not proven independent.
342. `server/migrations/047_cryptocrawler_kalshi_event_system_owned_cash.sql` — Database migration or service; integration not proven independent.
343. `server/migrations/048_cryptocrawler_kalshi_event_lifecycle.sql` — Database migration or service; integration not proven independent.
344. `server/migrations/049_cryptocrawler_kalshi_probability_calibration.sql` — Database migration or service; integration not proven independent.
345. `server/migrations/050_cryptocrawler_kalshi_event_market_maker.sql` — Database migration or service; integration not proven independent.
346. `server/migrations/051_cryptocrawler_polymarket_event_order_recovery.sql` — Database migration or service; integration not proven independent.
347. `server/migrations/052_cryptocrawler_polymarket_system_owned_cash.sql` — Database migration or service; integration not proven independent.
348. `server/migrations/053_cryptocrawler_cross_venue_event_lifecycle.sql` — Database migration or service; integration not proven independent.
349. `server/migrations/054_cryptocrawler_polymarket_redemption_recovery.sql` — Database migration or service; integration not proven independent.
350. `server/migrations/055_cryptocrawler_coinbase_system_owned_capital.sql` — Database migration or service; integration not proven independent.
351. `server/migrations/057_cryptocrawler_ghost_wallet_runtime.sql` — Database migration or service; integration not proven independent.
352. `server/migrations/058_cryptocrawler_ghost_wallet_gas_reserve.sql` — Database migration or service; integration not proven independent.
353. `server/migrations/058_cryptocrawler_self_funded_cex_bootstrap.sql` — Database migration or service; integration not proven independent.
354. `server/migrations/059_cryptocrawler_zero_capital_rescue_fairness.sql` — Database migration or service; integration not proven independent.
355. `server/migrations/060_cryptocrawler_cex_inventory_transform.sql` — Database migration or service; integration not proven independent.
356. `server/migrations/createCryptocrawlFlashbotsAuthIdentityTable.ts` — Imports code outside the trading candidate set.
357. `server/migrations/cryptocrawler-testing-tables.sql` — Database migration or service; integration not proven independent.
358. `server/migrations/overflow/001_cryptara_comp_cache.sql` — Database migration or service; integration not proven independent.
359. `server/migrations/overflow/002_cryptara_parallel_proxy.sql` — Database migration or service; integration not proven independent.
360. `server/migrations/overflow/003_cryptocrawler_runtime_prerequisites.sql` — Database migration or service; integration not proven independent.
361. `server/migrations/overflow/004_cryptocrawler_terminal_support.sql` — Database migration or service; integration not proven independent.
362. `server/migrations/removeCryptocrawlFlashbotsAuthIdentityTable.ts` — Referenced/imported from outside the trading candidate set.
363. `server/reactor/computationalReactor.ts` — Intra-repository dependency or independent status not conclusively verified.
364. `server/reactor/fusion/index.ts` — Intra-repository dependency or independent status not conclusively verified.
365. `server/reactor/fusion/monte_carlo_adapter.ts` — Intra-repository dependency or independent status not conclusively verified.
366. `server/reactor/fusion/neural_fusion_engine.ts` — Intra-repository dependency or independent status not conclusively verified.
367. `server/reactor/index.ts` — Intra-repository dependency or independent status not conclusively verified.
368. `server/reactor/metrics/index.ts` — Intra-repository dependency or independent status not conclusively verified.
369. `server/reactor/metrics/rate_limit_monitor.ts` — Intra-repository dependency or independent status not conclusively verified.
370. `server/reactor/routing/index.ts` — Intra-repository dependency or independent status not conclusively verified.
371. `server/reactor/routing/model_router.ts` — Intra-repository dependency or independent status not conclusively verified.
372. `server/reactor/routing/redundancy_manager.ts` — Intra-repository dependency or independent status not conclusively verified.
373. `server/reactor/unified.ts` — Intra-repository dependency or independent status not conclusively verified.
374. `server/routes/arbitrageAgents.routes.ts` — Intra-repository dependency or independent status not conclusively verified.
375. `server/routes/monteCarlo.routes.ts` — Intra-repository dependency or independent status not conclusively verified.
376. `server/routes/reactor.routes.ts` — Intra-repository dependency or independent status not conclusively verified.
377. `server/services/computationalBeam/ADVANCED_ENHANCEMENT_STRATEGY.md` — Documentation; retain pending fuller transfer.
378. `server/services/computationalBeam/HYPER_OPTIMIZATION_STRATEGY.md` — Documentation; retain pending fuller transfer.
379. `server/services/computationalBeam/README.md` — Documentation; retain pending fuller transfer.
380. `server/services/computationalBeam/arbitrageOptimizer.ts` — Imports code outside the trading candidate set.
381. `server/services/computationalBeam/credentialValidator.ts` — Intra-repository dependency or independent status not conclusively verified.
382. `server/services/computationalBeam/cryptocrawlerConnector.ts` — Imports code outside the trading candidate set.
383. `server/services/computationalBeam/dashboardOptimizer.ts` — Imports code outside the trading candidate set.
384. `server/services/computationalBeam/demo.ts` — Intra-repository dependency or independent status not conclusively verified.
385. `server/services/computationalBeam/directionalBeamLayer.ts` — Intra-repository dependency or independent status not conclusively verified.
386. `server/services/computationalBeam/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
387. `server/services/computationalBeam/integrityTesting.ts` — Referenced by an existing runtime/build/verification entrypoint.
388. `server/services/computationalBeam/main.ts` — Intra-repository dependency or independent status not conclusively verified.
389. `server/services/computationalBeam/metricsAnalytics.ts` — Referenced by an existing runtime/build/verification entrypoint.
390. `server/services/computationalBeam/neuralLoadPredictor.ts` — Referenced by an existing runtime/build/verification entrypoint.
391. `server/services/computationalBeam/omniAntennaLayer.ts` — Intra-repository dependency or independent status not conclusively verified.
392. `server/services/computationalBeam/pantheonConnector.ts` — Imports code outside the trading candidate set.
393. `server/services/computationalBeam/peopleFinderConnector.ts` — Imports code outside the trading candidate set.
394. `server/services/computationalBeam/safetyRules.ts` — Intra-repository dependency or independent status not conclusively verified.
395. `server/services/computationalBeam/skale-pow-worker.cjs` — Intra-repository dependency or independent status not conclusively verified.
396. `server/services/computationalBeam/skalePowWorkloadAdapter.ts` — Referenced by an existing runtime/build/verification entrypoint.
397. `server/services/computationalBeam/superBatteryLayer.ts` — Intra-repository dependency or independent status not conclusively verified.
398. `server/services/computationalBeam/testing/verify-beam-workloads.ts` — Intra-repository dependency or independent status not conclusively verified.
399. `server/services/computationalBeam/types.ts` — Intra-repository dependency or independent status not conclusively verified.
400. `server/services/computationalBeam/validate.ts` — Intra-repository dependency or independent status not conclusively verified.
401. `server/services/computationalBeam/walletOptimizer.ts` — Imports code outside the trading candidate set.
402. `server/services/computationalBeam/webSearchIntegration.ts` — Imports code outside the trading candidate set.
403. `server/services/computationalBeam/workloadRouter.ts` — Intra-repository dependency or independent status not conclusively verified.
404. `server/services/cryptara/index.ts` — Referenced/imported from outside the trading candidate set.
405. `server/services/cryptara/marketGates/engine.ts` — Intra-repository dependency or independent status not conclusively verified.
406. `server/services/cryptara/marketGates/index.ts` — Intra-repository dependency or independent status not conclusively verified.
407. `server/services/cryptara/marketGates/types.ts` — Intra-repository dependency or independent status not conclusively verified.
408. `server/services/cryptara/network-specialization-learning.ts` — Intra-repository dependency or independent status not conclusively verified.
409. `server/services/cryptara/opportunity-ml-ranker.ts` — Intra-repository dependency or independent status not conclusively verified.
410. `server/services/cryptara/zero-capital-funding-learning.ts` — Intra-repository dependency or independent status not conclusively verified.
411. `server/services/cryptocrawl/ADVANCED_SYSTEM_README.md` — Documentation; retain pending fuller transfer.
412. `server/services/cryptocrawl/CANONICAL_AUTHORITIES.md` — Documentation; retain pending fuller transfer.
413. `server/services/cryptocrawl/CONJOINED_TWIN_IMPLEMENTATION.md` — Documentation; retain pending fuller transfer.
414. `server/services/cryptocrawl/HYPER_EVOLVING_SWARM.md` — Documentation; retain pending fuller transfer.
415. `server/services/cryptocrawl/PR5_IMPLEMENTATION.md` — Documentation; retain pending fuller transfer.
416. `server/services/cryptocrawl/README.md` — Documentation; retain pending fuller transfer.
417. `server/services/cryptocrawl/SECURITY_SUMMARY.md` — Documentation; retain pending fuller transfer.
418. `server/services/cryptocrawl/agents/cain-crawler.ts` — Intra-repository dependency or independent status not conclusively verified.
419. `server/services/cryptocrawl/agents/cain-twin-hybrid.ts` — Imports code outside the trading candidate set.
420. `server/services/cryptocrawl/agents/conjoined-twin-crawler.ts` — Imports code outside the trading candidate set.
421. `server/services/cryptocrawl/agents/enhanced-micro-crawler.ts` — Intra-repository dependency or independent status not conclusively verified.
422. `server/services/cryptocrawl/agents/index.ts` — Intra-repository dependency or independent status not conclusively verified.
423. `server/services/cryptocrawl/agents/starburst-replication.ts` — Imports code outside the trading candidate set.
424. `server/services/cryptocrawl/agents/starburst-snake.ts` — Referenced/imported from outside the trading candidate set.
425. `server/services/cryptocrawl/agents/swarm-orchestrator.ts` — Imports code outside the trading candidate set.
426. `server/services/cryptocrawl/ai/cryptocrawler-ai-harmony.ts` — Imports code outside the trading candidate set.
427. `server/services/cryptocrawl/ai/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
428. `server/services/cryptocrawl/api/admin-api.ts` — Referenced/imported from outside the trading candidate set.
429. `server/services/cryptocrawl/api/blockchain-providers.ts` — Imports code outside the trading candidate set.
430. `server/services/cryptocrawl/api/bridge-api.ts` — Referenced/imported from outside the trading candidate set.
431. `server/services/cryptocrawl/api/canonical-dashboard-api.ts` — Intra-repository dependency or independent status not conclusively verified.
432. `server/services/cryptocrawl/api/dashboard-api.ts` — Intra-repository dependency or independent status not conclusively verified.
433. `server/services/cryptocrawl/api/index.ts` — Referenced/imported from outside the trading candidate set.
434. `server/services/cryptocrawl/api/truthful-admin-diagnostics.ts` — Imports code outside the trading candidate set.
435. `server/services/cryptocrawl/arbitrage/arbitrage-verifier.ts` — Imports code outside the trading candidate set.
436. `server/services/cryptocrawl/babel/cain-reasoning.ts` — Imports code outside the trading candidate set.
437. `server/services/cryptocrawl/babel/crawler-fingerprint.ts` — Imports code outside the trading candidate set.
438. `server/services/cryptocrawl/babel/index.ts` — Intra-repository dependency or independent status not conclusively verified.
439. `server/services/cryptocrawl/babel/light-language.ts` — Imports code outside the trading candidate set.
440. `server/services/cryptocrawl/babel/tower-of-babel.ts` — Imports code outside the trading candidate set.
441. `server/services/cryptocrawl/babel/tradingview-integration.ts` — Imports code outside the trading candidate set.
442. `server/services/cryptocrawl/beam/beam.ts` — Imports code outside the trading candidate set.
443. `server/services/cryptocrawl/beam/beamRoutes.ts` — Referenced/imported from outside the trading candidate set.
444. `server/services/cryptocrawl/bridge/across-approval-gas-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
445. `server/services/cryptocrawl/bridge/across-bridge-provider.ts` — Intra-repository dependency or independent status not conclusively verified.
446. `server/services/cryptocrawl/bridge/across-terminal-amount-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
447. `server/services/cryptocrawl/bridge/balance-monitor.ts` — Intra-repository dependency or independent status not conclusively verified.
448. `server/services/cryptocrawl/bridge/chain-config.ts` — Referenced/imported from outside the trading candidate set.
449. `server/services/cryptocrawl/bridge/coingecko-client.ts` — Intra-repository dependency or independent status not conclusively verified.
450. `server/services/cryptocrawl/bridge/gas-oracle.ts` — Intra-repository dependency or independent status not conclusively verified.
451. `server/services/cryptocrawl/bridge/index.ts` — Intra-repository dependency or independent status not conclusively verified.
452. `server/services/cryptocrawl/bridge/live-price-mesh.ts` — Intra-repository dependency or independent status not conclusively verified.
453. `server/services/cryptocrawl/bridge/network-health.ts` — Intra-repository dependency or independent status not conclusively verified.
454. `server/services/cryptocrawl/bridge/position-recommender.ts` — Intra-repository dependency or independent status not conclusively verified.
455. `server/services/cryptocrawl/bridge/route-optimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
456. `server/services/cryptocrawl/bridge/types.ts` — Intra-repository dependency or independent status not conclusively verified.
457. `server/services/cryptocrawl/bridge/withdraw-deposit.ts` — Intra-repository dependency or independent status not conclusively verified.
458. `server/services/cryptocrawl/capital-free/alchemy-filtered-mempool.ts` — Intra-repository dependency or independent status not conclusively verified.
459. `server/services/cryptocrawl/capital-free/alchemy-filtered-pending-stream.ts` — Intra-repository dependency or independent status not conclusively verified.
460. `server/services/cryptocrawl/capital-free/alchemy-integration.ts` — Imports code outside the trading candidate set.
461. `server/services/cryptocrawl/capital-free/autonomous-optimizer.ts` — Imports code outside the trading candidate set.
462. `server/services/cryptocrawl/capital-free/barter-system.ts` — Imports code outside the trading candidate set.
463. `server/services/cryptocrawl/capital-free/dynamic-gas-funding-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
464. `server/services/cryptocrawl/capital-free/eden-placement-strategy.ts` — Imports code outside the trading candidate set.
465. `server/services/cryptocrawl/capital-free/flash-liquidity-layer.ts` — Imports code outside the trading candidate set.
466. `server/services/cryptocrawl/capital-free/gas-acquisition-system.ts` — Imports code outside the trading candidate set.
467. `server/services/cryptocrawl/capital-free/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
468. `server/services/cryptocrawl/capital-free/nexgen-protocol-layer.ts` — Imports code outside the trading candidate set.
469. `server/services/cryptocrawl/capital-free/partnership-formation.ts` — Imports code outside the trading candidate set.
470. `server/services/cryptocrawl/capital-free/pending-swap-route-decoder.ts` — Intra-repository dependency or independent status not conclusively verified.
471. `server/services/cryptocrawl/capital-free/provider-mesh-mempool-analysis.ts` — Imports code outside the trading candidate set.
472. `server/services/cryptocrawl/capital-free/provider-mesh-pending-stream.ts` — Imports code outside the trading candidate set.
473. `server/services/cryptocrawl/capital-free/starburst-scaling.ts` — Imports code outside the trading candidate set.
474. `server/services/cryptocrawl/capital-free/superchain-integration.ts` — Imports code outside the trading candidate set.
475. `server/services/cryptocrawl/compensation/README.md` — Documentation; retain pending fuller transfer.
476. `server/services/cryptocrawl/compensation/compensationEngine.ts` — Imports code outside the trading candidate set.
477. `server/services/cryptocrawl/compensation/compensationGuarantee.ts` — Referenced/imported from outside the trading candidate set.
478. `server/services/cryptocrawl/compensation/demo.ts` — Intra-repository dependency or independent status not conclusively verified.
479. `server/services/cryptocrawl/compensation/hyper-hybrid-partial-profit-accounting.ts` — Imports code outside the trading candidate set.
480. `server/services/cryptocrawl/compensation/index.ts` — Intra-repository dependency or independent status not conclusively verified.
481. `server/services/cryptocrawl/compensation/payout-recipient-confirmation-observer.ts` — Imports code outside the trading candidate set.
482. `server/services/cryptocrawl/compensation/payoutScheduler.ts` — Imports code outside the trading candidate set.
483. `server/services/cryptocrawl/compensation/rainbow-maker-fuel-reserve.ts` — Imports code outside the trading candidate set.
484. `server/services/cryptocrawl/compensation/rainbow-profit-bridge.ts` — Imports code outside the trading candidate set.
485. `server/services/cryptocrawl/compensation/rainbow-profit-observability.ts` — Imports code outside the trading candidate set.
486. `server/services/cryptocrawl/compensation/rainbow-profit-source-ledger.ts` — Intra-repository dependency or independent status not conclusively verified.
487. `server/services/cryptocrawl/compensation/retained-profit-ledger.ts` — Imports code outside the trading candidate set.
488. `server/services/cryptocrawl/compensation/revenueStreams.ts` — Imports code outside the trading candidate set.
489. `server/services/cryptocrawl/compensation/types.ts` — Intra-repository dependency or independent status not conclusively verified.
490. `server/services/cryptocrawl/compensation/walletVerification.ts` — Imports code outside the trading candidate set.
491. `server/services/cryptocrawl/config/maximum-profitability.ts` — Referenced by an existing runtime/build/verification entrypoint.
492. `server/services/cryptocrawl/config/perChainRisk.ts` — Intra-repository dependency or independent status not conclusively verified.
493. `server/services/cryptocrawl/config/testnet-chains.ts` — Intra-repository dependency or independent status not conclusively verified.
494. `server/services/cryptocrawl/core/cain-crawler.ts` — Imports code outside the trading candidate set.
495. `server/services/cryptocrawl/core/capital-hierarchy.ts` — Referenced by an existing runtime/build/verification entrypoint.
496. `server/services/cryptocrawl/core/defensive-trading-mode.ts` — Imports code outside the trading candidate set.
497. `server/services/cryptocrawl/core/distributedCompute.ts` — Imports code outside the trading candidate set.
498. `server/services/cryptocrawl/core/dynamic-chain-registry.ts` — Imports code outside the trading candidate set.
499. `server/services/cryptocrawl/core/eden-storage.ts` — Imports code outside the trading candidate set.
500. `server/services/cryptocrawl/core/entry-signal-filter.ts` — Imports code outside the trading candidate set.
501. `server/services/cryptocrawl/core/flashloan-atomic-engine.ts` — External code/configuration/document reference remains.
502. `server/services/cryptocrawl/core/light-communication.ts` — Imports code outside the trading candidate set.
503. `server/services/cryptocrawl/core/lux-swarm.ts` — Intra-repository dependency or independent status not conclusively verified.
504. `server/services/cryptocrawl/core/market-condition-detector.ts` — Imports code outside the trading candidate set.
505. `server/services/cryptocrawl/core/master-orchestrator.ts` — Imports code outside the trading candidate set.
506. `server/services/cryptocrawl/core/microtask-engine.ts` — Imports code outside the trading candidate set.
507. `server/services/cryptocrawl/core/neurofusion.ts` — Imports code outside the trading candidate set.
508. `server/services/cryptocrawl/core/quantum-optimization-engine.ts` — Imports code outside the trading candidate set.
509. `server/services/cryptocrawl/core/stealth-security.ts` — Imports code outside the trading candidate set.
510. `server/services/cryptocrawl/core/wallet-identity.ts` — Intra-repository dependency or independent status not conclusively verified.
511. `server/services/cryptocrawl/core/wallet.ts` — Intra-repository dependency or independent status not conclusively verified.
512. `server/services/cryptocrawl/core/zero-capital-engine.ts` — Imports code outside the trading candidate set.
513. `server/services/cryptocrawl/core/zero-capital-price-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
514. `server/services/cryptocrawl/demo-capital-free.ts` — Intra-repository dependency or independent status not conclusively verified.
515. `server/services/cryptocrawl/demo-swarm.ts` — Intra-repository dependency or independent status not conclusively verified.
516. `server/services/cryptocrawl/discovery/candidate-publication-generation.ts` — Intra-repository dependency or independent status not conclusively verified.
517. `server/services/cryptocrawl/discovery/cex-economic-barrier-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
518. `server/services/cryptocrawl/discovery/cex-economic-barrier.ts` — Intra-repository dependency or independent status not conclusively verified.
519. `server/services/cryptocrawl/discovery/cex-edge-attention.ts` — Intra-repository dependency or independent status not conclusively verified.
520. `server/services/cryptocrawl/discovery/cex-fee-mode-observability.ts` — Intra-repository dependency or independent status not conclusively verified.
521. `server/services/cryptocrawl/discovery/cex-observation-candidates.ts` — Intra-repository dependency or independent status not conclusively verified.
522. `server/services/cryptocrawl/discovery/cex-residual-replan.ts` — Imports code outside the trading candidate set.
523. `server/services/cryptocrawl/discovery/configured-zero-capital-gas-economics.ts` — Intra-repository dependency or independent status not conclusively verified.
524. `server/services/cryptocrawl/discovery/cross-chain-opportunity-generator.ts` — Intra-repository dependency or independent status not conclusively verified.
525. `server/services/cryptocrawl/discovery/cross-chain-route-economics.ts` — Intra-repository dependency or independent status not conclusively verified.
526. `server/services/cryptocrawl/discovery/dex-opportunity-generator.ts` — Intra-repository dependency or independent status not conclusively verified.
527. `server/services/cryptocrawl/discovery/dynamic-zero-capital-routes.ts` — Imports code outside the trading candidate set.
528. `server/services/cryptocrawl/discovery/event-venue.ts` — Intra-repository dependency or independent status not conclusively verified.
529. `server/services/cryptocrawl/discovery/funding-arbitrage-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
530. `server/services/cryptocrawl/discovery/funding-rate-discovery.ts` — Imports code outside the trading candidate set.
531. `server/services/cryptocrawl/discovery/funding-rate-monitor.ts` — Imports code outside the trading candidate set.
532. `server/services/cryptocrawl/discovery/graphless-dex-scout.ts` — Imports code outside the trading candidate set.
533. `server/services/cryptocrawl/discovery/kalshi-cross-venue-event-arbitrage.ts` — Imports code outside the trading candidate set.
534. `server/services/cryptocrawl/discovery/kalshi-event-opportunity-generator.ts` — Imports code outside the trading candidate set.
535. `server/services/cryptocrawl/discovery/liquidation-opportunity-generator.ts` — Imports code outside the trading candidate set.
536. `server/services/cryptocrawl/discovery/maker-opportunity-generator.ts` — Intra-repository dependency or independent status not conclusively verified.
537. `server/services/cryptocrawl/discovery/market-universe-controller.ts` — Intra-repository dependency or independent status not conclusively verified.
538. `server/services/cryptocrawl/discovery/measured-candidate-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
539. `server/services/cryptocrawl/discovery/mempool-capability-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
540. `server/services/cryptocrawl/discovery/mempool-opportunity-generator.ts` — Intra-repository dependency or independent status not conclusively verified.
541. `server/services/cryptocrawl/discovery/multi-topology-discovery-controller.ts` — Imports code outside the trading candidate set.
542. `server/services/cryptocrawl/discovery/opportunity-graph.ts` — Imports code outside the trading candidate set.
543. `server/services/cryptocrawl/discovery/polymarket-event-venue.ts` — Intra-repository dependency or independent status not conclusively verified.
544. `server/services/cryptocrawl/discovery/prediction-market-opportunity-generator.ts` — Imports code outside the trading candidate set.
545. `server/services/cryptocrawl/discovery/public-cex-discovery.ts` — Imports code outside the trading candidate set.
546. `server/services/cryptocrawl/discovery/scan-capacity-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
547. `server/services/cryptocrawl/discovery/stage-one-candidate-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
548. `server/services/cryptocrawl/discovery/stage-one-dex-mempool-repair.ts` — Imports code outside the trading candidate set.
549. `server/services/cryptocrawl/discovery/stage-one-dex-mempool-velora-recovery.ts` — Imports code outside the trading candidate set.
550. `server/services/cryptocrawl/discovery/stage-one-measurement-recovery.ts` — Imports code outside the trading candidate set.
551. `server/services/cryptocrawl/discovery/symbol-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
552. `server/services/cryptocrawl/discovery/venue-capability-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
553. `server/services/cryptocrawl/discovery/zero-capital-canonical-discovery.ts` — Imports code outside the trading candidate set.
554. `server/services/cryptocrawl/discovery/zero-capital-route-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
555. `server/services/cryptocrawl/discovery/zero-capital-route-preselection.ts` — Intra-repository dependency or independent status not conclusively verified.
556. `server/services/cryptocrawl/eden/config.ts` — Intra-repository dependency or independent status not conclusively verified.
557. `server/services/cryptocrawl/eden/deployment.ts` — Imports code outside the trading candidate set.
558. `server/services/cryptocrawl/eden/index.ts` — Intra-repository dependency or independent status not conclusively verified.
559. `server/services/cryptocrawl/eden/schema.ts` — Intra-repository dependency or independent status not conclusively verified.
560. `server/services/cryptocrawl/eden/service.ts` — Referenced by an existing runtime/build/verification entrypoint.
561. `server/services/cryptocrawl/eden/types.ts` — Referenced by an existing runtime/build/verification entrypoint.
562. `server/services/cryptocrawl/evolution/frontier-research-integration.ts` — Imports code outside the trading candidate set.
563. `server/services/cryptocrawl/evolution/hyper-evolution-engine.ts` — Imports code outside the trading candidate set.
564. `server/services/cryptocrawl/evolution/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
565. `server/services/cryptocrawl/evolution/measured-execution-feedback.ts` — Imports code outside the trading candidate set.
566. `server/services/cryptocrawl/evolution/swarm-intelligence.ts` — Imports code outside the trading candidate set.
567. `server/services/cryptocrawl/evolution/terminal-network-funding-learning.ts` — Intra-repository dependency or independent status not conclusively verified.
568. `server/services/cryptocrawl/evolution/zero-capital-funding-lifecycle-observer.ts` — Intra-repository dependency or independent status not conclusively verified.
569. `server/services/cryptocrawl/execution/aave-liquidation-atomic-executor.ts` — Imports code outside the trading candidate set.
570. `server/services/cryptocrawl/execution/across-bridge-executor.ts` — Imports code outside the trading candidate set.
571. `server/services/cryptocrawl/execution/across-prebroadcast-durability.ts` — Imports code outside the trading candidate set.
572. `server/services/cryptocrawl/execution/adapters/atomic-size-optimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
573. `server/services/cryptocrawl/execution/adapters/autonomous-route-planner.ts` — Intra-repository dependency or independent status not conclusively verified.
574. `server/services/cryptocrawl/execution/adapters/bootstrap-recovery-state.ts` — Referenced by an existing runtime/build/verification entrypoint.
575. `server/services/cryptocrawl/execution/adapters/builder-repayment-route.ts` — Intra-repository dependency or independent status not conclusively verified.
576. `server/services/cryptocrawl/execution/adapters/builder-sequential-gas-simulator.ts` — Intra-repository dependency or independent status not conclusively verified.
577. `server/services/cryptocrawl/execution/adapters/builder-sponsored-bundle.ts` — Imports code outside the trading candidate set.
578. `server/services/cryptocrawl/execution/adapters/composite-flashloan-receiver-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
579. `server/services/cryptocrawl/execution/adapters/composite-route-measurement-planner.ts` — Intra-repository dependency or independent status not conclusively verified.
580. `server/services/cryptocrawl/execution/adapters/dual-flash-loan-provider-mesh.ts` — Intra-repository dependency or independent status not conclusively verified.
581. `server/services/cryptocrawl/execution/adapters/dual-flash-loan-provider-selection-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
582. `server/services/cryptocrawl/execution/adapters/dual-flashloan-receiver-bootstrap.ts` — Intra-repository dependency or independent status not conclusively verified.
583. `server/services/cryptocrawl/execution/adapters/dual-flashloan-receiver-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
584. `server/services/cryptocrawl/execution/adapters/dual-flashloan-receiver-capability.ts` — Intra-repository dependency or independent status not conclusively verified.
585. `server/services/cryptocrawl/execution/adapters/europa-dynamic-route-discovery.ts` — Referenced by an existing runtime/build/verification entrypoint.
586. `server/services/cryptocrawl/execution/adapters/europa-network.ts` — Intra-repository dependency or independent status not conclusively verified.
587. `server/services/cryptocrawl/execution/adapters/europa-sushi-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
588. `server/services/cryptocrawl/execution/adapters/europa-sushi-v3-flash-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
589. `server/services/cryptocrawl/execution/adapters/europa-zero-gas-adapter.ts` — Referenced by an existing runtime/build/verification entrypoint.
590. `server/services/cryptocrawl/execution/adapters/flash-loan-demand-hint.ts` — Intra-repository dependency or independent status not conclusively verified.
591. `server/services/cryptocrawl/execution/adapters/flash-loan-provider-economics.ts` — Intra-repository dependency or independent status not conclusively verified.
592. `server/services/cryptocrawl/execution/adapters/flash-loan-provider-selection-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
593. `server/services/cryptocrawl/execution/adapters/flash-loan-receiver-capability.ts` — Intra-repository dependency or independent status not conclusively verified.
594. `server/services/cryptocrawl/execution/adapters/flashbots-auth-identity.ts` — Intra-repository dependency or independent status not conclusively verified.
595. `server/services/cryptocrawl/execution/adapters/flashloan-receiver-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
596. `server/services/cryptocrawl/execution/adapters/monte-carlo-profitability.ts` — Intra-repository dependency or independent status not conclusively verified.
597. `server/services/cryptocrawl/execution/adapters/monte-carlo-worker.ts` — Intra-repository dependency or independent status not conclusively verified.
598. `server/services/cryptocrawl/execution/adapters/onchain-payload-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
599. `server/services/cryptocrawl/execution/adapters/onchain-route-quoter.ts` — Intra-repository dependency or independent status not conclusively verified.
600. `server/services/cryptocrawl/execution/adapters/parallel-monte-carlo-pool.ts` — Intra-repository dependency or independent status not conclusively verified.
601. `server/services/cryptocrawl/execution/adapters/primary-market-anchor-adapter.ts` — Intra-repository dependency or independent status not conclusively verified.
602. `server/services/cryptocrawl/execution/adapters/primary-market-anchor-routes.ts` — Intra-repository dependency or independent status not conclusively verified.
603. `server/services/cryptocrawl/execution/adapters/protocol-anchor-adapter.ts` — Imports code outside the trading candidate set.
604. `server/services/cryptocrawl/execution/adapters/provider-specific-receiver-bootstrap.ts` — Intra-repository dependency or independent status not conclusively verified.
605. `server/services/cryptocrawl/execution/adapters/railway-bootstrap-budget.ts` — Imports code outside the trading candidate set.
606. `server/services/cryptocrawl/execution/adapters/ravn-execution-adapter.ts` — Intra-repository dependency or independent status not conclusively verified.
607. `server/services/cryptocrawl/execution/adapters/skale-pow-adapter.ts` — Intra-repository dependency or independent status not conclusively verified.
608. `server/services/cryptocrawl/execution/adapters/sponsored-receiver-manager.ts` — Imports code outside the trading candidate set.
609. `server/services/cryptocrawl/execution/adapters/stage4-capital-provenance.ts` — Imports code outside the trading candidate set.
610. `server/services/cryptocrawl/execution/adapters/stage4-execution-ledger.ts` — Imports code outside the trading candidate set.
611. `server/services/cryptocrawl/execution/adapters/stage4-pow-compute-coordinator.ts` — Referenced by an existing runtime/build/verification entrypoint.
612. `server/services/cryptocrawl/execution/adapters/zero-capital-route-direction.ts` — Intra-repository dependency or independent status not conclusively verified.
613. `server/services/cryptocrawl/execution/builder-sponsored-receiver-bootstrap.ts` — Imports code outside the trading candidate set.
614. `server/services/cryptocrawl/execution/builder-sponsored-zero-capital-coldstart.ts` — Imports code outside the trading candidate set.
615. `server/services/cryptocrawl/execution/canonical-execution-scheduler.ts` — Imports code outside the trading candidate set.
616. `server/services/cryptocrawl/execution/centralized-exchange-executor.ts` — Imports code outside the trading candidate set.
617. `server/services/cryptocrawl/execution/cex-inventory-ledger.ts` — Imports code outside the trading candidate set.
618. `server/services/cryptocrawl/execution/cex-order-mode-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
619. `server/services/cryptocrawl/execution/cex-order-serialization.ts` — Intra-repository dependency or independent status not conclusively verified.
620. `server/services/cryptocrawl/execution/cex-private-websocket-order-transport.ts` — Imports code outside the trading candidate set.
621. `server/services/cryptocrawl/execution/cex-settlement.ts` — Imports code outside the trading candidate set.
622. `server/services/cryptocrawl/execution/cex-spot-product-policy.ts` — Imports code outside the trading candidate set.
623. `server/services/cryptocrawl/execution/cex-submit-time-product-guard.ts` — Intra-repository dependency or independent status not conclusively verified.
624. `server/services/cryptocrawl/execution/cex-system-capital-placement.ts` — Imports code outside the trading candidate set.
625. `server/services/cryptocrawl/execution/cex-system-capital-settlement-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
626. `server/services/cryptocrawl/execution/cex-system-owned-inventory-transform.ts` — Imports code outside the trading candidate set.
627. `server/services/cryptocrawl/execution/cex-system-owned-lot-ledger.ts` — Intra-repository dependency or independent status not conclusively verified.
628. `server/services/cryptocrawl/execution/cex-treasury-transfer-worker.ts` — Imports code outside the trading candidate set.
629. `server/services/cryptocrawl/execution/chain-native-fees.ts` — Intra-repository dependency or independent status not conclusively verified.
630. `server/services/cryptocrawl/execution/coinbase-convert-execution-auction.ts` — Imports code outside the trading candidate set.
631. `server/services/cryptocrawl/execution/coinbase-executable-plan-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
632. `server/services/cryptocrawl/execution/coinbase-product-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
633. `server/services/cryptocrawl/execution/coinbase-spot-settlement-adapter.ts` — Imports code outside the trading candidate set.
634. `server/services/cryptocrawl/execution/coinbase-system-capital-placement.ts` — Imports code outside the trading candidate set.
635. `server/services/cryptocrawl/execution/coinbase-system-capital-settlement-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
636. `server/services/cryptocrawl/execution/controlled-loss-feedback-recovery.ts` — Imports code outside the trading candidate set.
637. `server/services/cryptocrawl/execution/controlled-loss-learning-runtime.ts` — Imports code outside the trading candidate set.
638. `server/services/cryptocrawl/execution/controlled-loss-learning-worker.ts` — Imports code outside the trading candidate set.
639. `server/services/cryptocrawl/execution/cross-chain-durable-lifecycle.ts` — Imports code outside the trading candidate set.
640. `server/services/cryptocrawl/execution/cryptara-dynamic-canary-controller.ts` — Intra-repository dependency or independent status not conclusively verified.
641. `server/services/cryptocrawl/execution/dex-settlement-observer.ts` — Imports code outside the trading candidate set.
642. `server/services/cryptocrawl/execution/dex-zerox-atomic-executor.ts` — Imports code outside the trading candidate set.
643. `server/services/cryptocrawl/execution/distributed-api-quota.ts` — Intra-repository dependency or independent status not conclusively verified.
644. `server/services/cryptocrawl/execution/evm-signer-lane.ts` — Intra-repository dependency or independent status not conclusively verified.
645. `server/services/cryptocrawl/execution/exact-decimal.ts` — Intra-repository dependency or independent status not conclusively verified.
646. `server/services/cryptocrawl/execution/exact-post-victim-backrun-compiler.ts` — Imports code outside the trading candidate set.
647. `server/services/cryptocrawl/execution/execution-readiness.ts` — Intra-repository dependency or independent status not conclusively verified.
648. `server/services/cryptocrawl/execution/flash-liquidation-executor.ts` — Imports code outside the trading candidate set.
649. `server/services/cryptocrawl/execution/flash-loan-aggregator.ts` — Imports code outside the trading candidate set.
650. `server/services/cryptocrawl/execution/funding-capital-reservation.ts` — Imports code outside the trading candidate set.
651. `server/services/cryptocrawl/execution/funding-crosschain-execution-adapter.ts` — Imports code outside the trading candidate set.
652. `server/services/cryptocrawl/execution/funding-position-lifecycle.ts` — Referenced/imported from outside the trading candidate set.
653. `server/services/cryptocrawl/execution/hyper-hybrid-cex-execution.ts` — Imports code outside the trading candidate set.
654. `server/services/cryptocrawl/execution/index.ts` — Imports code outside the trading candidate set.
655. `server/services/cryptocrawl/execution/inventory-rebalance-executor.ts` — Imports code outside the trading candidate set.
656. `server/services/cryptocrawl/execution/inventory-rebalancer.ts` — Intra-repository dependency or independent status not conclusively verified.
657. `server/services/cryptocrawl/execution/kalshi-cross-venue-event-lifecycle.ts` — Imports code outside the trading candidate set.
658. `server/services/cryptocrawl/execution/kalshi-cross-venue-terminal-reconciliation.ts` — Imports code outside the trading candidate set.
659. `server/services/cryptocrawl/execution/kalshi-event-canonical-dispatch.ts` — Imports code outside the trading candidate set.
660. `server/services/cryptocrawl/execution/kalshi-event-canonical-maintenance.ts` — Imports code outside the trading candidate set.
661. `server/services/cryptocrawl/execution/kalshi-event-historical-recovery.ts` — Imports code outside the trading candidate set.
662. `server/services/cryptocrawl/execution/kalshi-event-lifecycle.ts` — Imports code outside the trading candidate set.
663. `server/services/cryptocrawl/execution/kalshi-event-market-maker.ts` — Imports code outside the trading candidate set.
664. `server/services/cryptocrawl/execution/kalshi-event-order-authority.ts` — Imports code outside the trading candidate set.
665. `server/services/cryptocrawl/execution/kalshi-event-resource-lease.ts` — Imports code outside the trading candidate set.
666. `server/services/cryptocrawl/execution/kalshi-event-system-owned-cash-ledger.ts` — Imports code outside the trading candidate set.
667. `server/services/cryptocrawl/execution/kalshi-funding-cex-hedge.ts` — Intra-repository dependency or independent status not conclusively verified.
668. `server/services/cryptocrawl/execution/kalshi-funding-evidence.ts` — Imports code outside the trading candidate set.
669. `server/services/cryptocrawl/execution/kalshi-funding-hedge-capital.ts` — Imports code outside the trading candidate set.
670. `server/services/cryptocrawl/execution/kalshi-funding-lifecycle-adapter.ts` — Imports code outside the trading candidate set.
671. `server/services/cryptocrawl/execution/kalshi-perps-order-authority.ts` — Imports code outside the trading candidate set.
672. `server/services/cryptocrawl/execution/kalshi-post-cex-fallback.ts` — Intra-repository dependency or independent status not conclusively verified.
673. `server/services/cryptocrawl/execution/kalshi-system-owned-margin-ledger.ts` — Imports code outside the trading candidate set.
674. `server/services/cryptocrawl/execution/kraken-maker-queue-amend.ts` — Imports code outside the trading candidate set.
675. `server/services/cryptocrawl/execution/kraken-system-capital-placement.ts` — Imports code outside the trading candidate set.
676. `server/services/cryptocrawl/execution/low-latency-execution-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
677. `server/services/cryptocrawl/execution/maker-lifecycle-trace.ts` — Intra-repository dependency or independent status not conclusively verified.
678. `server/services/cryptocrawl/execution/maker-taker-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
679. `server/services/cryptocrawl/execution/measured-topology-execution-adapter.ts` — Imports code outside the trading candidate set.
680. `server/services/cryptocrawl/execution/meson-zeroex-native-gas-strategy.ts` — Intra-repository dependency or independent status not conclusively verified.
681. `server/services/cryptocrawl/execution/mev-backrun-executor.ts` — Imports code outside the trading candidate set.
682. `server/services/cryptocrawl/execution/multi-relay-submitter.ts` — Imports code outside the trading candidate set.
683. `server/services/cryptocrawl/execution/native-gas-funding-coordinator.ts` — Imports code outside the trading candidate set.
684. `server/services/cryptocrawl/execution/okx-convert-execution-auction.ts` — Imports code outside the trading candidate set.
685. `server/services/cryptocrawl/execution/okx-convert-settlement-wrapper.ts` — Imports code outside the trading candidate set.
686. `server/services/cryptocrawl/execution/okx-funding-evidence.ts` — Intra-repository dependency or independent status not conclusively verified.
687. `server/services/cryptocrawl/execution/okx-funding-lifecycle-adapter.ts` — Imports code outside the trading candidate set.
688. `server/services/cryptocrawl/execution/okx-margin-short-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
689. `server/services/cryptocrawl/execution/onchain-receiver-profit-provenance.ts` — Intra-repository dependency or independent status not conclusively verified.
690. `server/services/cryptocrawl/execution/onchain-system-capital-ledger.ts` — Intra-repository dependency or independent status not conclusively verified.
691. `server/services/cryptocrawl/execution/onchain-system-capital-reconciler.ts` — Imports code outside the trading candidate set.
692. `server/services/cryptocrawl/execution/polymarket-event-order-authority.ts` — Imports code outside the trading candidate set.
693. `server/services/cryptocrawl/execution/polymarket-event-settlement-authority.ts` — Imports code outside the trading candidate set.
694. `server/services/cryptocrawl/execution/polymarket-system-owned-cash-ledger.ts` — Imports code outside the trading candidate set.
695. `server/services/cryptocrawl/execution/post-only-maker-adapters.ts` — Imports code outside the trading candidate set.
696. `server/services/cryptocrawl/execution/prepared-native-fee-budget.ts` — Intra-repository dependency or independent status not conclusively verified.
697. `server/services/cryptocrawl/execution/resource-lease-authority.ts` — Referenced/imported from outside the trading candidate set.
698. `server/services/cryptocrawl/execution/resource-scheduler.ts` — Imports code outside the trading candidate set.
699. `server/services/cryptocrawl/execution/self-funded-cex-bootstrap.ts` — Imports code outside the trading candidate set.
700. `server/services/cryptocrawl/execution/settlement-types.ts` — Intra-repository dependency or independent status not conclusively verified.
701. `server/services/cryptocrawl/execution/stablecoin-maker-strategy.ts` — Intra-repository dependency or independent status not conclusively verified.
702. `server/services/cryptocrawl/execution/system-capital-allocation-ledger.ts` — Intra-repository dependency or independent status not conclusively verified.
703. `server/services/cryptocrawl/execution/system-capital-sweep-worker.ts` — Imports code outside the trading candidate set.
704. `server/services/cryptocrawl/execution/system-native-gas-spend-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
705. `server/services/cryptocrawl/execution/system-owned-native-transaction.ts` — Intra-repository dependency or independent status not conclusively verified.
706. `server/services/cryptocrawl/execution/treasury-transfer-recovery-worker.ts` — Imports code outside the trading candidate set.
707. `server/services/cryptocrawl/execution/ultra-low-latency-executor.ts` — Imports code outside the trading candidate set.
708. `server/services/cryptocrawl/execution/unified-execution-router.ts` — Intra-repository dependency or independent status not conclusively verified.
709. `server/services/cryptocrawl/execution/zero-capital-alternative-prepared-executor.ts` — Intra-repository dependency or independent status not conclusively verified.
710. `server/services/cryptocrawl/execution/zero-capital-canonical-executor.ts` — Imports code outside the trading candidate set.
711. `server/services/cryptocrawl/execution/zero-capital-composite-prepared-executor.ts` — Intra-repository dependency or independent status not conclusively verified.
712. `server/services/cryptocrawl/execution/zero-capital-composite-selection-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
713. `server/services/cryptocrawl/execution/zero-capital-flash-canonical-executor.ts` — Imports code outside the trading candidate set.
714. `server/services/cryptocrawl/execution/zero-capital-realized-profit-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
715. `server/services/cryptocrawl/execution/zero-capital-rescue-fairness.ts` — Intra-repository dependency or independent status not conclusively verified.
716. `server/services/cryptocrawl/execution/zero-capital-resource-scheduler.ts` — Imports code outside the trading candidate set.
717. `server/services/cryptocrawl/faucet/autonomous-faucet.ts` — Referenced/imported from outside the trading candidate set.
718. `server/services/cryptocrawl/faucet/competition-evidence-policy.ts` — Referenced by an existing runtime/build/verification entrypoint.
719. `server/services/cryptocrawl/faucet/concurrent-execution-wiring.ts` — Imports code outside the trading candidate set.
720. `server/services/cryptocrawl/faucet/facet-handler.ts` — Imports code outside the trading candidate set.
721. `server/services/cryptocrawl/faucet/facet-high-risk-tests.ts` — Intra-repository dependency or independent status not conclusively verified.
722. `server/services/cryptocrawl/faucet/facet-simulation.ts` — Intra-repository dependency or independent status not conclusively verified.
723. `server/services/cryptocrawl/faucet/facet-test-runner.ts` — Intra-repository dependency or independent status not conclusively verified.
724. `server/services/cryptocrawl/faucet/higher-order-mesh.ts` — External code/configuration/document reference remains.
725. `server/services/cryptocrawl/faucet/index.ts` — Intra-repository dependency or independent status not conclusively verified.
726. `server/services/cryptocrawl/ghost-wallet/capital-fabric.ts` — Intra-repository dependency or independent status not conclusively verified.
727. `server/services/cryptocrawl/ghost-wallet/existing-arbitrage-infrastructure.ts` — Intra-repository dependency or independent status not conclusively verified.
728. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-advisory.ts` — Intra-repository dependency or independent status not conclusively verified.
729. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-autonomous-controller.ts` — Referenced/imported from outside the trading candidate set.
730. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-bootstrap-work-recovery.ts` — Intra-repository dependency or independent status not conclusively verified.
731. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-borrower-demand-mesh.ts` — Imports code outside the trading candidate set.
732. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-borrower-mandate.ts` — Referenced/imported from outside the trading candidate set.
733. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-borrower-surface.ts` — Referenced/imported from outside the trading candidate set.
734. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-builder.ts` — Intra-repository dependency or independent status not conclusively verified.
735. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-chain-events.ts` — Imports code outside the trading candidate set.
736. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-controller-economics.ts` — Intra-repository dependency or independent status not conclusively verified.
737. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-engine.ts` — Referenced/imported from outside the trading candidate set.
738. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-external-bridge.ts` — Referenced/imported from outside the trading candidate set.
739. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-funding-mesh.ts` — Intra-repository dependency or independent status not conclusively verified.
740. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-gas-pricing.ts` — Intra-repository dependency or independent status not conclusively verified.
741. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-gas-reserve-schema.ts` — Intra-repository dependency or independent status not conclusively verified.
742. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-gas-reserve.ts` — Imports code outside the trading candidate set.
743. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-infrastructure-manager.ts` — Intra-repository dependency or independent status not conclusively verified.
744. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-intermediary-bootstrap.ts` — Imports code outside the trading candidate set.
745. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-log-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
746. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-mandate-runtime-guard.ts` — Intra-repository dependency or independent status not conclusively verified.
747. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-payout.ts` — Intra-repository dependency or independent status not conclusively verified.
748. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-performance-intelligence.ts` — Referenced/imported from outside the trading candidate set.
749. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-pimlico-sponsor.ts` — Intra-repository dependency or independent status not conclusively verified.
750. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-provider-mesh.ts` — Referenced/imported from outside the trading candidate set.
751. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-runtime-state.ts` — Intra-repository dependency or independent status not conclusively verified.
752. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-settlement-ingest.ts` — Intra-repository dependency or independent status not conclusively verified.
753. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-ultra-worker.ts` — Imports code outside the trading candidate set.
754. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-uniswapx-demand.ts` — Imports code outside the trading candidate set.
755. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-venue-universe.ts` — Intra-repository dependency or independent status not conclusively verified.
756. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-work-codec.ts` — Intra-repository dependency or independent status not conclusively verified.
757. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-work-dedupe.ts` — Intra-repository dependency or independent status not conclusively verified.
758. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-work-ledger.ts` — Intra-repository dependency or independent status not conclusively verified.
759. `server/services/cryptocrawl/ghost-wallet/ghost-wallet-work-signal.ts` — Intra-repository dependency or independent status not conclusively verified.
760. `server/services/cryptocrawl/ghost-wallet/intent-book.ts` — Intra-repository dependency or independent status not conclusively verified.
761. `server/services/cryptocrawl/ghost-wallet/onchain-capital-sources.ts` — Intra-repository dependency or independent status not conclusively verified.
762. `server/services/cryptocrawl/ghost-wallet/profit-funded-native-payout.ts` — Intra-repository dependency or independent status not conclusively verified.
763. `server/services/cryptocrawl/ghost-wallet/zero-capital-alternative-selection-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
764. `server/services/cryptocrawl/governance/DEPLOYMENT_GUIDE.md` — Documentation; retain pending fuller transfer.
765. `server/services/cryptocrawl/governance/OPERATIONAL_RUNBOOK.md` — Documentation; retain pending fuller transfer.
766. `server/services/cryptocrawl/governance/README.md` — Documentation; retain pending fuller transfer.
767. `server/services/cryptocrawl/governance/adaptive-profit-operating-envelope.ts` — Intra-repository dependency or independent status not conclusively verified.
768. `server/services/cryptocrawl/governance/arbitrage-agents.ts` — Referenced/imported from outside the trading candidate set.
769. `server/services/cryptocrawl/governance/atomic-zero-capital-strategy-coverage.ts` — Intra-repository dependency or independent status not conclusively verified.
770. `server/services/cryptocrawl/governance/automatic-stage-progression.ts` — Imports code outside the trading candidate set.
771. `server/services/cryptocrawl/governance/autonomy.ts` — Intra-repository dependency or independent status not conclusively verified.
772. `server/services/cryptocrawl/governance/compatibility.ts` — Intra-repository dependency or independent status not conclusively verified.
773. `server/services/cryptocrawl/governance/composer-interface.ts` — Imports code outside the trading candidate set.
774. `server/services/cryptocrawl/governance/cryptara-integration.ts` — Imports code outside the trading candidate set.
775. `server/services/cryptocrawl/governance/diagnostic.ts` — Intra-repository dependency or independent status not conclusively verified.
776. `server/services/cryptocrawl/governance/escalation.ts` — Intra-repository dependency or independent status not conclusively verified.
777. `server/services/cryptocrawl/governance/governance.ts` — Imports code outside the trading candidate set.
778. `server/services/cryptocrawl/governance/handler.ts` — Intra-repository dependency or independent status not conclusively verified.
779. `server/services/cryptocrawl/governance/hard-limits.ts` — Intra-repository dependency or independent status not conclusively verified.
780. `server/services/cryptocrawl/governance/index.ts` — Referenced/imported from outside the trading candidate set.
781. `server/services/cryptocrawl/governance/kill-switch.ts` — Imports code outside the trading candidate set.
782. `server/services/cryptocrawl/governance/monitoring-dashboard.ts` — Imports code outside the trading candidate set.
783. `server/services/cryptocrawl/governance/operator-trading-strategy.ts` — Imports code outside the trading candidate set.
784. `server/services/cryptocrawl/governance/profit-admission-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
785. `server/services/cryptocrawl/governance/profit-ladder-daily-profit-budget.ts` — Intra-repository dependency or independent status not conclusively verified.
786. `server/services/cryptocrawl/governance/profit-ladder-notional-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
787. `server/services/cryptocrawl/governance/profit-ladder.ts` — Imports code outside the trading candidate set.
788. `server/services/cryptocrawl/governance/risk-governor.ts` — Referenced/imported from outside the trading candidate set.
789. `server/services/cryptocrawl/governance/stage-governor.ts` — Intra-repository dependency or independent status not conclusively verified.
790. `server/services/cryptocrawl/governance/stage-management.ts` — Imports code outside the trading candidate set.
791. `server/services/cryptocrawl/governance/stage-one-bootstrap-authority.ts` — Imports code outside the trading candidate set.
792. `server/services/cryptocrawl/governance/stage-one-evidence-hydrator.ts` — Imports code outside the trading candidate set.
793. `server/services/cryptocrawl/governance/stage-state-store.ts` — Intra-repository dependency or independent status not conclusively verified.
794. `server/services/cryptocrawl/governance/system-control.ts` — Intra-repository dependency or independent status not conclusively verified.
795. `server/services/cryptocrawl/governance/tests/governance-test-suite.ts` — Imports code outside the trading candidate set.
796. `server/services/cryptocrawl/governance/treasury-execution-barrier.ts` — Intra-repository dependency or independent status not conclusively verified.
797. `server/services/cryptocrawl/governance/types.ts` — Intra-repository dependency or independent status not conclusively verified.
798. `server/services/cryptocrawl/governance/zero-capital-infrastructure-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
799. `server/services/cryptocrawl/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
800. `server/services/cryptocrawl/initial-gas-readiness.ts` — Intra-repository dependency or independent status not conclusively verified.
801. `server/services/cryptocrawl/integration/across-bridge-observability.ts` — Imports code outside the trading candidate set.
802. `server/services/cryptocrawl/integration/ape-adaptive-command.ts` — Intra-repository dependency or independent status not conclusively verified.
803. `server/services/cryptocrawl/integration/ape-directional-market.ts` — Intra-repository dependency or independent status not conclusively verified.
804. `server/services/cryptocrawl/integration/ape-hypergraph-intelligence.ts` — Intra-repository dependency or independent status not conclusively verified.
805. `server/services/cryptocrawl/integration/ape-measured-opportunity-admission.ts` — Intra-repository dependency or independent status not conclusively verified.
806. `server/services/cryptocrawl/integration/ape-profitability-toolbox.ts` — Intra-repository dependency or independent status not conclusively verified.
807. `server/services/cryptocrawl/integration/ape-profitable-snapshot-lease.ts` — Intra-repository dependency or independent status not conclusively verified.
808. `server/services/cryptocrawl/integration/ape-rescue-orchestration.ts` — Intra-repository dependency or independent status not conclusively verified.
809. `server/services/cryptocrawl/integration/ape-resident-workbench.ts` — Intra-repository dependency or independent status not conclusively verified.
810. `server/services/cryptocrawl/integration/atomic-bps-anytime-race.ts` — External code/configuration/document reference remains.
811. `server/services/cryptocrawl/integration/atomic-profitability-resident-routing.ts` — Intra-repository dependency or independent status not conclusively verified.
812. `server/services/cryptocrawl/integration/authenticated-fee-tier-optimization-wiring.ts` — Imports code outside the trading candidate set.
813. `server/services/cryptocrawl/integration/authoritative-monte-carlo-wiring.ts` — Imports code outside the trading candidate set.
814. `server/services/cryptocrawl/integration/bps-activity.ts` — Imports code outside the trading candidate set.
815. `server/services/cryptocrawl/integration/bps-compression-mesh.ts` — Imports code outside the trading candidate set.
816. `server/services/cryptocrawl/integration/bps-decomposition-observability.ts` — Imports code outside the trading candidate set.
817. `server/services/cryptocrawl/integration/bps-frontier-wave3-wiring.ts` — Imports code outside the trading candidate set.
818. `server/services/cryptocrawl/integration/bps-private-refund-evidence.ts` — Imports code outside the trading candidate set.
819. `server/services/cryptocrawl/integration/canonical-runtime-wiring.ts` — Imports code outside the trading candidate set.
820. `server/services/cryptocrawl/integration/cex-fee-recovery-wiring.ts` — Imports code outside the trading candidate set.
821. `server/services/cryptocrawl/integration/cex-four-mode-observability-wiring.ts` — Imports code outside the trading candidate set.
822. `server/services/cryptocrawl/integration/cex-inventory-readiness-wiring.ts` — Imports code outside the trading candidate set.
823. `server/services/cryptocrawl/integration/computational-reactor-wiring.ts` — Imports code outside the trading candidate set.
824. `server/services/cryptocrawl/integration/cross-venue-timing-guard-wiring.ts` — Imports code outside the trading candidate set.
825. `server/services/cryptocrawl/integration/cryptara-assessment-wiring.ts` — Imports code outside the trading candidate set.
826. `server/services/cryptocrawl/integration/cryptara-beam-wiring.ts` — Referenced/imported from outside the trading candidate set.
827. `server/services/cryptocrawl/integration/cryptara-bootstrap-wiring.ts` — Imports code outside the trading candidate set.
828. `server/services/cryptocrawl/integration/cryptara-cex-evidence-wiring.ts` — Imports code outside the trading candidate set.
829. `server/services/cryptocrawl/integration/cryptara-kalshi-prediction-wiring.ts` — Imports code outside the trading candidate set.
830. `server/services/cryptocrawl/integration/cryptara-ml-persistence.ts` — Imports code outside the trading candidate set.
831. `server/services/cryptocrawl/integration/cryptara-overflow-primary-gateway.ts` — Intra-repository dependency or independent status not conclusively verified.
832. `server/services/cryptocrawl/integration/cryptara-overflow-super-worker.ts` — Intra-repository dependency or independent status not conclusively verified.
833. `server/services/cryptocrawl/integration/cryptara-parallel-cognition.ts` — Intra-repository dependency or independent status not conclusively verified.
834. `server/services/cryptocrawl/integration/cryptara-predictive-prefetch-wiring.ts` — Imports code outside the trading candidate set.
835. `server/services/cryptocrawl/integration/cryptara-primary-archive-worker.ts` — Imports code outside the trading candidate set.
836. `server/services/cryptocrawl/integration/cryptara-provider-consensus-wiring.ts` — Imports code outside the trading candidate set.
837. `server/services/cryptocrawl/integration/cryptara-resource-intelligence.ts` — Intra-repository dependency or independent status not conclusively verified.
838. `server/services/cryptocrawl/integration/cryptara-shared-readiness.ts` — Intra-repository dependency or independent status not conclusively verified.
839. `server/services/cryptocrawl/integration/cryptara-sovereign-cortex-wiring.ts` — Imports code outside the trading candidate set.
840. `server/services/cryptocrawl/integration/cryptara-supabase-admission-worker.ts` — Imports code outside the trading candidate set.
841. `server/services/cryptocrawl/integration/cryptara-supabase-comp-switch.ts` — Intra-repository dependency or independent status not conclusively verified.
842. `server/services/cryptocrawl/integration/cryptara-supabase-hyper-bridge-bootstrap.ts` — Intra-repository dependency or independent status not conclusively verified.
843. `server/services/cryptocrawl/integration/cryptara-supabase-hyper-bridge.ts` — Intra-repository dependency or independent status not conclusively verified.
844. `server/services/cryptocrawl/integration/cryptara-supabase-overflow-worker.ts` — Imports code outside the trading candidate set.
845. `server/services/cryptocrawl/integration/cryptara-super-worker.ts` — Intra-repository dependency or independent status not conclusively verified.
846. `server/services/cryptocrawl/integration/cryptara-two-speed-revalidation-wiring.ts` — Imports code outside the trading candidate set.
847. `server/services/cryptocrawl/integration/dual-provider-zero-capital-execution-wiring.ts` — Imports code outside the trading candidate set.
848. `server/services/cryptocrawl/integration/dynamic-profitability-admission-wiring.ts` — Imports code outside the trading candidate set.
849. `server/services/cryptocrawl/integration/economic-transformation-wiring.ts` — Imports code outside the trading candidate set.
850. `server/services/cryptocrawl/integration/execution-readiness-profitability-wiring.ts` — Imports code outside the trading candidate set.
851. `server/services/cryptocrawl/integration/external-capital-selection-observer.ts` — Imports code outside the trading candidate set.
852. `server/services/cryptocrawl/integration/filtered-mempool-observability.ts` — Imports code outside the trading candidate set.
853. `server/services/cryptocrawl/integration/inventory-constrained-cex-execution-wiring.ts` — Imports code outside the trading candidate set.
854. `server/services/cryptocrawl/integration/kalshi-bps-optimization-wiring.ts` — Imports code outside the trading candidate set.
855. `server/services/cryptocrawl/integration/kalshi-monte-carlo-context-wiring.ts` — Imports code outside the trading candidate set.
856. `server/services/cryptocrawl/integration/kalshi-quanti-context.ts` — Intra-repository dependency or independent status not conclusively verified.
857. `server/services/cryptocrawl/integration/kalshi-system-wiring.ts` — Imports code outside the trading candidate set.
858. `server/services/cryptocrawl/integration/learning-lifecycle-wiring.ts` — Imports code outside the trading candidate set.
859. `server/services/cryptocrawl/integration/legacy-intelligence-quarantine.ts` — Imports code outside the trading candidate set.
860. `server/services/cryptocrawl/integration/master-orchestrator-measured-wiring.ts` — Imports code outside the trading candidate set.
861. `server/services/cryptocrawl/integration/master-pipeline.ts` — Referenced/imported from outside the trading candidate set.
862. `server/services/cryptocrawl/integration/measured-candidate-expiry-guard-wiring.ts` — Imports code outside the trading candidate set.
863. `server/services/cryptocrawl/integration/measured-rebalance-route-evidence-wiring.ts` — Imports code outside the trading candidate set.
864. `server/services/cryptocrawl/integration/monte-carlo-calibration-wiring.ts` — Imports code outside the trading candidate set.
865. `server/services/cryptocrawl/integration/oracle-evidence-wiring.ts` — Imports code outside the trading candidate set.
866. `server/services/cryptocrawl/integration/order-book-evolution-wiring.ts` — Imports code outside the trading candidate set.
867. `server/services/cryptocrawl/integration/overflow-learning-persistence.ts` — Intra-repository dependency or independent status not conclusively verified.
868. `server/services/cryptocrawl/integration/prediction-market-discovery-wiring.ts` — Imports code outside the trading candidate set.
869. `server/services/cryptocrawl/integration/primary-learning-persistence.ts` — Imports code outside the trading candidate set.
870. `server/services/cryptocrawl/integration/profitability-recovery-coordinator.ts` — Imports code outside the trading candidate set.
871. `server/services/cryptocrawl/integration/provider-specific-zero-capital-execution-wiring.ts` — Imports code outside the trading candidate set.
872. `server/services/cryptocrawl/integration/runtime-json-state-store.ts` — Intra-repository dependency or independent status not conclusively verified.
873. `server/services/cryptocrawl/integration/runtime-observability.ts` — Imports code outside the trading candidate set.
874. `server/services/cryptocrawl/integration/stage-one-spread-observability.ts` — Imports code outside the trading candidate set.
875. `server/services/cryptocrawl/integration/stage-two-cross-chain-reduction.ts` — Imports code outside the trading candidate set.
876. `server/services/cryptocrawl/integration/stage-two-zero-capital-bps-reduction.ts` — Imports code outside the trading candidate set.
877. `server/services/cryptocrawl/integration/technical-evidence-synchronizer.ts` — Imports code outside the trading candidate set.
878. `server/services/cryptocrawl/integration/telemetry-bootstrap.ts` — Imports code outside the trading candidate set.
879. `server/services/cryptocrawl/integration/universal-bps-rescue-coordinator.ts` — Imports code outside the trading candidate set.
880. `server/services/cryptocrawl/integration/zero-capital-alternative-capital-wiring.ts` — Intra-repository dependency or independent status not conclusively verified.
881. `server/services/cryptocrawl/integration/zero-capital-atomic-bps-engine.ts` — Imports code outside the trading candidate set.
882. `server/services/cryptocrawl/integration/zero-capital-atomic-bps-workers.ts` — Referenced by an existing runtime/build/verification entrypoint.
883. `server/services/cryptocrawl/integration/zero-capital-atomic-stack-wiring.ts` — Imports code outside the trading candidate set.
884. `server/services/cryptocrawl/integration/zero-capital-dynamic-attempt-barrier-wiring.ts` — Imports code outside the trading candidate set.
885. `server/services/cryptocrawl/integration/zero-capital-flash-provider-wiring.ts` — Imports code outside the trading candidate set.
886. `server/services/cryptocrawl/integration/zero-capital-profit-output-floor.ts` — Intra-repository dependency or independent status not conclusively verified.
887. `server/services/cryptocrawl/integration/zero-capital-profitability-rescue-fair.ts` — Imports code outside the trading candidate set.
888. `server/services/cryptocrawl/integration/zero-capital-profitability-rescue-v2.ts` — Imports code outside the trading candidate set.
889. `server/services/cryptocrawl/integration/zero-capital-profitability-rescue-v3.ts` — Imports code outside the trading candidate set.
890. `server/services/cryptocrawl/integration/zero-capital-profitability-rescue-v4.ts` — Imports code outside the trading candidate set.
891. `server/services/cryptocrawl/integration/zero-capital-readiness-diagnostics.ts` — Imports code outside the trading candidate set.
892. `server/services/cryptocrawl/integration/zero-capital-recovery-observability.ts` — Imports code outside the trading candidate set.
893. `server/services/cryptocrawl/integration/zero-capital-resource-wiring.ts` — Imports code outside the trading candidate set.
894. `server/services/cryptocrawl/integration/zero-capital-route-split-rescue-core.ts` — Imports code outside the trading candidate set.
895. `server/services/cryptocrawl/integration/zero-capital-route-split-rescue.ts` — Imports code outside the trading candidate set.
896. `server/services/cryptocrawl/integration/zero-capital-shadow-priority-wiring.ts` — Imports code outside the trading candidate set.
897. `server/services/cryptocrawl/integration/zero-capital-stage-handoff-supervisor.ts` — Imports code outside the trading candidate set.
898. `server/services/cryptocrawl/integration/zerox-budget-observability.ts` — Imports code outside the trading candidate set.
899. `server/services/cryptocrawl/integrity/operational-integrity.ts` — Imports code outside the trading candidate set.
900. `server/services/cryptocrawl/intelligence/aries-edge-formation-reactor.ts` — Intra-repository dependency or independent status not conclusively verified.
901. `server/services/cryptocrawl/intelligence/aries-microstructure.ts` — Intra-repository dependency or independent status not conclusively verified.
902. `server/services/cryptocrawl/intelligence/aries-vault.ts` — Intra-repository dependency or independent status not conclusively verified.
903. `server/services/cryptocrawl/intelligence/canonical-intelligence-outbox.ts` — Imports code outside the trading candidate set.
904. `server/services/cryptocrawl/intelligence/canonical-intelligence-repository.ts` — Imports code outside the trading candidate set.
905. `server/services/cryptocrawl/intelligence/canonical-opportunity-state.ts` — Intra-repository dependency or independent status not conclusively verified.
906. `server/services/cryptocrawl/intelligence/cex-cross-impact-advisory.ts` — Intra-repository dependency or independent status not conclusively verified.
907. `server/services/cryptocrawl/intelligence/cex-fee-recovery-authority.ts` — Imports code outside the trading candidate set.
908. `server/services/cryptocrawl/intelligence/cex-fee-resolver.ts` — Imports code outside the trading candidate set.
909. `server/services/cryptocrawl/intelligence/cex-four-mode-matrix.ts` — Intra-repository dependency or independent status not conclusively verified.
910. `server/services/cryptocrawl/intelligence/cex-order-book-stream.ts` — Imports code outside the trading candidate set.
911. `server/services/cryptocrawl/intelligence/cex-order-control-health.ts` — Intra-repository dependency or independent status not conclusively verified.
912. `server/services/cryptocrawl/intelligence/cex-private-authority.ts` — Imports code outside the trading candidate set.
913. `server/services/cryptocrawl/intelligence/cex-private-execution-feedback.ts` — Imports code outside the trading candidate set.
914. `server/services/cryptocrawl/intelligence/coinbase-advanced-market-data.ts` — Imports code outside the trading candidate set.
915. `server/services/cryptocrawl/intelligence/coinbase-advanced-trade-authority.ts` — Imports code outside the trading candidate set.
916. `server/services/cryptocrawl/intelligence/coinbase-app-private-authority.ts` — Imports code outside the trading candidate set.
917. `server/services/cryptocrawl/intelligence/coinbase-app-read-authority.ts` — Imports code outside the trading candidate set.
918. `server/services/cryptocrawl/intelligence/coinbase-fee-evidence.ts` — Imports code outside the trading candidate set.
919. `server/services/cryptocrawl/intelligence/coinbase-fee-rebate-authority.ts` — Imports code outside the trading candidate set.
920. `server/services/cryptocrawl/intelligence/coinbase-private-execution-feedback.ts` — Imports code outside the trading candidate set.
921. `server/services/cryptocrawl/intelligence/coinbase-stablepair-fee-authority.ts` — Imports code outside the trading candidate set.
922. `server/services/cryptocrawl/intelligence/dex-quote-provider-mesh.ts` — Imports code outside the trading candidate set.
923. `server/services/cryptocrawl/intelligence/erc20-decimals-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
924. `server/services/cryptocrawl/intelligence/gravity-reaper.ts` — Imports code outside the trading candidate set.
925. `server/services/cryptocrawl/intelligence/hyper-neural-predictor.ts` — Imports code outside the trading candidate set.
926. `server/services/cryptocrawl/intelligence/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
927. `server/services/cryptocrawl/intelligence/kalshi-authenticated-authority.ts` — Imports code outside the trading candidate set.
928. `server/services/cryptocrawl/intelligence/kalshi-capital-efficiency-authority.ts` — Imports code outside the trading candidate set.
929. `server/services/cryptocrawl/intelligence/kalshi-event-depth-authority.ts` — Imports code outside the trading candidate set.
930. `server/services/cryptocrawl/intelligence/kalshi-event-fee-authority.ts` — Imports code outside the trading candidate set.
931. `server/services/cryptocrawl/intelligence/kalshi-event-market-making-authority.ts` — Imports code outside the trading candidate set.
932. `server/services/cryptocrawl/intelligence/kalshi-event-semantics-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
933. `server/services/cryptocrawl/intelligence/kalshi-margin-fee-authority.ts` — Imports code outside the trading candidate set.
934. `server/services/cryptocrawl/intelligence/kalshi-perps-market-authority.ts` — Imports code outside the trading candidate set.
935. `server/services/cryptocrawl/intelligence/kalshi-prediction-market-authority.ts` — Imports code outside the trading candidate set.
936. `server/services/cryptocrawl/intelligence/kalshi-probability-calibration-authority.ts` — Imports code outside the trading candidate set.
937. `server/services/cryptocrawl/intelligence/kraken-funding-beta-authority.ts` — Imports code outside the trading candidate set.
938. `server/services/cryptocrawl/intelligence/kraken-l3-queue-intelligence.ts` — Imports code outside the trading candidate set.
939. `server/services/cryptocrawl/intelligence/liquidity-resilience.ts` — Intra-repository dependency or independent status not conclusively verified.
940. `server/services/cryptocrawl/intelligence/maker-microstructure-proof.ts` — Imports code outside the trading candidate set.
941. `server/services/cryptocrawl/intelligence/maker-terminal-calibration.ts` — Intra-repository dependency or independent status not conclusively verified.
942. `server/services/cryptocrawl/intelligence/maker-tick-queue-optimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
943. `server/services/cryptocrawl/intelligence/market-data-providers.ts` — Imports code outside the trading candidate set.
944. `server/services/cryptocrawl/intelligence/okx-account-fee-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
945. `server/services/cryptocrawl/intelligence/okx-region-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
946. `server/services/cryptocrawl/intelligence/okx-rpi-capability.ts` — Intra-repository dependency or independent status not conclusively verified.
947. `server/services/cryptocrawl/intelligence/okx-rpi-fee-advisory.ts` — Imports code outside the trading candidate set.
948. `server/services/cryptocrawl/intelligence/okx-rpi-taker-depth.ts` — Intra-repository dependency or independent status not conclusively verified.
949. `server/services/cryptocrawl/intelligence/parallel-lanes.ts` — Imports code outside the trading candidate set.
950. `server/services/cryptocrawl/intelligence/polymarket-authenticated-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
951. `server/services/cryptocrawl/intelligence/polymarket-geographic-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
952. `server/services/cryptocrawl/intelligence/profit-estimator.ts` — Intra-repository dependency or independent status not conclusively verified.
953. `server/services/cryptocrawl/intelligence/provider-quality-auction.ts` — Intra-repository dependency or independent status not conclusively verified.
954. `server/services/cryptocrawl/intelligence/six-cane-system.ts` — Imports code outside the trading candidate set.
955. `server/services/cryptocrawl/intelligence/sovereign-antenna-quality.ts` — Intra-repository dependency or independent status not conclusively verified.
956. `server/services/cryptocrawl/intelligence/token-contract-directory.ts` — Imports code outside the trading candidate set.
957. `server/services/cryptocrawl/intelligence/universal-bps-opportunity-discovery.ts` — Imports code outside the trading candidate set.
958. `server/services/cryptocrawl/intelligence/universal-bps-search-expansion.ts` — Imports code outside the trading candidate set.
959. `server/services/cryptocrawl/intelligence/zerox-fee-economics.ts` — Intra-repository dependency or independent status not conclusively verified.
960. `server/services/cryptocrawl/intelligence/zerox-request-budget.ts` — Intra-repository dependency or independent status not conclusively verified.
961. `server/services/cryptocrawl/intelligence/zerox-request-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
962. `server/services/cryptocrawl/learning/deep-learning-store.ts` — Imports code outside the trading candidate set.
963. `server/services/cryptocrawl/learning/execution-outcome.ts` — Intra-repository dependency or independent status not conclusively verified.
964. `server/services/cryptocrawl/learning/instant-learning-engine.ts` — Imports code outside the trading candidate set.
965. `server/services/cryptocrawl/learning/reinforcement-learning-bidder.ts` — Imports code outside the trading candidate set.
966. `server/services/cryptocrawl/learning/settlement-profit-calibrator.ts` — Intra-repository dependency or independent status not conclusively verified.
967. `server/services/cryptocrawl/learning/supabase-compatibility.ts` — Imports code outside the trading candidate set.
968. `server/services/cryptocrawl/learning/terminal-feedback-identity.ts` — Intra-repository dependency or independent status not conclusively verified.
969. `server/services/cryptocrawl/legacy/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
970. `server/services/cryptocrawl/mev/triple-dip-extractor.ts` — Imports code outside the trading candidate set.
971. `server/services/cryptocrawl/optimization/adaptive-profitability-search-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
972. `server/services/cryptocrawl/optimization/adaptive-topology-optimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
973. `server/services/cryptocrawl/optimization/bps-reduction-super-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
974. `server/services/cryptocrawl/optimization/cryptara-adaptive-strategy-state.ts` — Imports code outside the trading candidate set.
975. `server/services/cryptocrawl/optimization/cryptara-decision-priority.ts` — Intra-repository dependency or independent status not conclusively verified.
976. `server/services/cryptocrawl/optimization/divine-engine.ts` — Imports code outside the trading candidate set.
977. `server/services/cryptocrawl/optimization/dynamic-execution-path-selector.ts` — Intra-repository dependency or independent status not conclusively verified.
978. `server/services/cryptocrawl/optimization/economic-transformation-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
979. `server/services/cryptocrawl/optimization/execution-readiness-profitability-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
980. `server/services/cryptocrawl/optimization/external-capital-capability-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
981. `server/services/cryptocrawl/optimization/fee-surface-hyperdynamic-strategy-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
982. `server/services/cryptocrawl/optimization/hyperdynamic-bps-solution-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
983. `server/services/cryptocrawl/optimization/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
984. `server/services/cryptocrawl/optimization/marginal-bps-allocator.ts` — Intra-repository dependency or independent status not conclusively verified.
985. `server/services/cryptocrawl/optimization/nix-gen/README.md` — Documentation; retain pending fuller transfer.
986. `server/services/cryptocrawl/optimization/nix-gen/authority.ts` — Intra-repository dependency or independent status not conclusively verified.
987. `server/services/cryptocrawl/optimization/nix-gen/canonical-bid-adapters.ts` — Intra-repository dependency or independent status not conclusively verified.
988. `server/services/cryptocrawl/optimization/nix-gen/capital-routing-advisory.ts` — Intra-repository dependency or independent status not conclusively verified.
989. `server/services/cryptocrawl/optimization/nix-gen/cex-ordering.ts` — Intra-repository dependency or independent status not conclusively verified.
990. `server/services/cryptocrawl/optimization/nix-gen/completion-manifest.ts` — Intra-repository dependency or independent status not conclusively verified.
991. `server/services/cryptocrawl/optimization/nix-gen/coordinator.ts` — Intra-repository dependency or independent status not conclusively verified.
992. `server/services/cryptocrawl/optimization/nix-gen/dual-resource-pricing.ts` — Intra-repository dependency or independent status not conclusively verified.
993. `server/services/cryptocrawl/optimization/nix-gen/global-live-portfolio.ts` — Intra-repository dependency or independent status not conclusively verified.
994. `server/services/cryptocrawl/optimization/nix-gen/global-optimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
995. `server/services/cryptocrawl/optimization/nix-gen/index.ts` — Intra-repository dependency or independent status not conclusively verified.
996. `server/services/cryptocrawl/optimization/nix-gen/integration-contract.ts` — Intra-repository dependency or independent status not conclusively verified.
997. `server/services/cryptocrawl/optimization/nix-gen/kalshi-advisory.ts` — Intra-repository dependency or independent status not conclusively verified.
998. `server/services/cryptocrawl/optimization/nix-gen/live-priority-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
999. `server/services/cryptocrawl/optimization/nix-gen/marginal-resource-value.ts` — Intra-repository dependency or independent status not conclusively verified.
1000. `server/services/cryptocrawl/optimization/nix-gen/measured-portfolio-preparation.ts` — Intra-repository dependency or independent status not conclusively verified.
1001. `server/services/cryptocrawl/optimization/nix-gen/portfolio-view.ts` — Intra-repository dependency or independent status not conclusively verified.
1002. `server/services/cryptocrawl/optimization/nix-gen/quanti-analysis.ts` — Intra-repository dependency or independent status not conclusively verified.
1003. `server/services/cryptocrawl/optimization/nix-gen/replanner.ts` — Intra-repository dependency or independent status not conclusively verified.
1004. `server/services/cryptocrawl/optimization/nix-gen/resource-opportunity-pricing.ts` — Intra-repository dependency or independent status not conclusively verified.
1005. `server/services/cryptocrawl/optimization/nix-gen/robust-uncertainty.ts` — Intra-repository dependency or independent status not conclusively verified.
1006. `server/services/cryptocrawl/optimization/nix-gen/scarcity-pricing.ts` — Intra-repository dependency or independent status not conclusively verified.
1007. `server/services/cryptocrawl/optimization/nix-gen/strategy-limb-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
1008. `server/services/cryptocrawl/optimization/nix-gen/terminal-calibration.ts` — Intra-repository dependency or independent status not conclusively verified.
1009. `server/services/cryptocrawl/optimization/nix-gen/types.ts` — Intra-repository dependency or independent status not conclusively verified.
1010. `server/services/cryptocrawl/optimization/nix-gen/zero-capital-ordering.ts` — Intra-repository dependency or independent status not conclusively verified.
1011. `server/services/cryptocrawl/optimization/opportunity-decay-model.ts` — Intra-repository dependency or independent status not conclusively verified.
1012. `server/services/cryptocrawl/optimization/profitability-score.ts` — Intra-repository dependency or independent status not conclusively verified.
1013. `server/services/cryptocrawl/optimization/research-bps-execution-tactics.ts` — Intra-repository dependency or independent status not conclusively verified.
1014. `server/services/cryptocrawl/optimization/unified-multileg-arbitrage-engine.ts` — Imports code outside the trading candidate set.
1015. `server/services/cryptocrawl/optimization/universal-fee-overcompensation-engine.ts` — Imports code outside the trading candidate set.
1016. `server/services/cryptocrawl/optimization/zero-capital-composite-evidence-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
1017. `server/services/cryptocrawl/optimization/zero-capital-provider-cost-curve.ts` — Referenced by an existing runtime/build/verification entrypoint.
1018. `server/services/cryptocrawl/optimization/zero-capital-route-evidence-registry.ts` — Intra-repository dependency or independent status not conclusively verified.
1019. `server/services/cryptocrawl/rate-limiting/automatic-rate-limiter.ts` — Imports code outside the trading candidate set.
1020. `server/services/cryptocrawl/rate-limiting/index.ts` — Intra-repository dependency or independent status not conclusively verified.
1021. `server/services/cryptocrawl/risk/circuit-breaker.ts` — External code/configuration/document reference remains.
1022. `server/services/cryptocrawl/risk/kelly-criterion.ts` — Imports code outside the trading candidate set.
1023. `server/services/cryptocrawl/risk/mandatory-risk-shield.ts` — External code/configuration/document reference remains.
1024. `server/services/cryptocrawl/risk/progressive-position-sizing.ts` — Referenced by an existing runtime/build/verification entrypoint.
1025. `server/services/cryptocrawl/runtime/adaptive-profit-operations-wiring.ts` — Imports code outside the trading candidate set.
1026. `server/services/cryptocrawl/runtime/alchemy-filtered-mempool-wiring.ts` — Imports code outside the trading candidate set.
1027. `server/services/cryptocrawl/runtime/alchemy-standard-rpc-first-wiring.ts` — Imports code outside the trading candidate set.
1028. `server/services/cryptocrawl/runtime/coinbase-readiness-wiring.ts` — Imports code outside the trading candidate set.
1029. `server/services/cryptocrawl/runtime/coincap-environment-wiring.ts` — Imports code outside the trading candidate set.
1030. `server/services/cryptocrawl/runtime/core-runtime-lifecycle.ts` — Intra-repository dependency or independent status not conclusively verified.
1031. `server/services/cryptocrawl/runtime/core-runtime.ts` — Imports code outside the trading candidate set.
1032. `server/services/cryptocrawl/runtime/cryptocrawl-overflow-runtime-schema.ts` — Imports code outside the trading candidate set.
1033. `server/services/cryptocrawl/runtime/cryptocrawl-runtime-database.ts` — Referenced/imported from outside the trading candidate set.
1034. `server/services/cryptocrawl/runtime/database-coordination.ts` — Imports code outside the trading candidate set.
1035. `server/services/cryptocrawl/runtime/discovery-work-context.ts` — Intra-repository dependency or independent status not conclusively verified.
1036. `server/services/cryptocrawl/runtime/dynamic-rpc-provider-wiring.ts` — Imports code outside the trading candidate set.
1037. `server/services/cryptocrawl/runtime/end-to-end-latency-harness.ts` — Imports code outside the trading candidate set.
1038. `server/services/cryptocrawl/runtime/environment-contract.ts` — Intra-repository dependency or independent status not conclusively verified.
1039. `server/services/cryptocrawl/runtime/expanded-market-universe-wiring.ts` — Imports code outside the trading candidate set.
1040. `server/services/cryptocrawl/runtime/expanded-network-observability.ts` — Imports code outside the trading candidate set.
1041. `server/services/cryptocrawl/runtime/hybrid-cex-execution-wiring.ts` — Imports code outside the trading candidate set.
1042. `server/services/cryptocrawl/runtime/low-latency-execution-wiring.ts` — Imports code outside the trading candidate set.
1043. `server/services/cryptocrawl/runtime/manual-power-state.ts` — Referenced/imported from outside the trading candidate set.
1044. `server/services/cryptocrawl/runtime/market-focus-wiring.ts` — Imports code outside the trading candidate set.
1045. `server/services/cryptocrawl/runtime/no-bps-maker-admission-wiring.ts` — Imports code outside the trading candidate set.
1046. `server/services/cryptocrawl/runtime/performance-evidence-contract.ts` — Intra-repository dependency or independent status not conclusively verified.
1047. `server/services/cryptocrawl/runtime/positive-profit-capture-wiring.ts` — Imports code outside the trading candidate set.
1048. `server/services/cryptocrawl/runtime/rainbow-profit-bridge-wiring.ts` — Imports code outside the trading candidate set.
1049. `server/services/cryptocrawl/runtime/readiness-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
1050. `server/services/cryptocrawl/runtime/rpc-fallback-admission-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
1051. `server/services/cryptocrawl/runtime/rpc-request-coalescer.ts` — Intra-repository dependency or independent status not conclusively verified.
1052. `server/services/cryptocrawl/runtime/runtime-attestation.ts` — Intra-repository dependency or independent status not conclusively verified.
1053. `server/services/cryptocrawl/runtime/runtime-invariant-monitor.ts` — Imports code outside the trading candidate set.
1054. `server/services/cryptocrawl/runtime/stablecoin-maker-execution-wiring.ts` — Imports code outside the trading candidate set.
1055. `server/services/cryptocrawl/runtime/stage-proof-metrics-wiring.ts` — Imports code outside the trading candidate set.
1056. `server/services/cryptocrawl/runtime/system-capital-placement-wiring.ts` — Imports code outside the trading candidate set.
1057. `server/services/cryptocrawl/runtime/system-capital-provenance.ts` — Intra-repository dependency or independent status not conclusively verified.
1058. `server/services/cryptocrawl/runtime/system-owned-gas-funding-proof-wiring.ts` — Intra-repository dependency or independent status not conclusively verified.
1059. `server/services/cryptocrawl/runtime/system-owned-native-zero-capital-execution-wiring.ts` — Imports code outside the trading candidate set.
1060. `server/services/cryptocrawl/runtime/terminal-treasury-lifecycle.ts` — Imports code outside the trading candidate set.
1061. `server/services/cryptocrawl/runtime/zero-capital-gas-authority.ts` — Intra-repository dependency or independent status not conclusively verified.
1062. `server/services/cryptocrawl/runtime/zero-capital-network-capability-registry.ts` — Imports code outside the trading candidate set.
1063. `server/services/cryptocrawl/runtime/zero-capital-realized-profit-wiring.ts` — Imports code outside the trading candidate set.
1064. `server/services/cryptocrawl/scaling/dynamic-scale-physics.ts` — Imports code outside the trading candidate set.
1065. `server/services/cryptocrawl/scaling/dynamic-scale-pressure-wiring.ts` — Imports code outside the trading candidate set.
1066. `server/services/cryptocrawl/scaling/dynamic-scale-profile-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
1067. `server/services/cryptocrawl/scanner/realtime-stream.ts` — Imports code outside the trading candidate set.
1068. `server/services/cryptocrawl/scanners/IMPLEMENTATION_SUMMARY.md` — Documentation; retain pending fuller transfer.
1069. `server/services/cryptocrawl/scanners/README.md` — Documentation; retain pending fuller transfer.
1070. `server/services/cryptocrawl/scanners/SECURITY_SUMMARY.md` — Documentation; retain pending fuller transfer.
1071. `server/services/cryptocrawl/scanners/elite-arbitrage-scanner.ts` — Intra-repository dependency or independent status not conclusively verified.
1072. `server/services/cryptocrawl/stealth/PERFECTION_SUMMARY.md` — Documentation; retain pending fuller transfer.
1073. `server/services/cryptocrawl/stealth/README.md` — Documentation; retain pending fuller transfer.
1074. `server/services/cryptocrawl/stealth/async-mutex.ts` — Intra-repository dependency or independent status not conclusively verified.
1075. `server/services/cryptocrawl/stealth/circuit-breaker.ts` — External code/configuration/document reference remains.
1076. `server/services/cryptocrawl/stealth/continuous-learning-system.ts` — Intra-repository dependency or independent status not conclusively verified.
1077. `server/services/cryptocrawl/stealth/dynamic-scale-physics.ts` — Intra-repository dependency or independent status not conclusively verified.
1078. `server/services/cryptocrawl/stealth/operational-integrity.ts` — Intra-repository dependency or independent status not conclusively verified.
1079. `server/services/cryptocrawl/stealth/types.ts` — Intra-repository dependency or independent status not conclusively verified.
1080. `server/services/cryptocrawl/stealth/ultra-low-latency-executor.ts` — Intra-repository dependency or independent status not conclusively verified.
1081. `server/services/cryptocrawl/strategies/adaptive-ensemble-engine.ts` — Imports code outside the trading candidate set.
1082. `server/services/cryptocrawl/strategies/advanced-arbitrage.ts` — Intra-repository dependency or independent status not conclusively verified.
1083. `server/services/cryptocrawl/strategies/disco-ball-mirror.ts` — Intra-repository dependency or independent status not conclusively verified.
1084. `server/services/cryptocrawl/strategies/gas-sponsorship.ts` — Intra-repository dependency or independent status not conclusively verified.
1085. `server/services/cryptocrawl/strategies/snipe-strategy.ts` — Intra-repository dependency or independent status not conclusively verified.
1086. `server/services/cryptocrawl/testing/cryptocrawler-test-harness.ts` — Imports code outside the trading candidate set.
1087. `server/services/cryptocrawl/testing/estimate-computing-power.js` — Intra-repository dependency or independent status not conclusively verified.
1088. `server/services/cryptocrawl/testing/extreme-scenario-tests.ts` — Imports code outside the trading candidate set.
1089. `server/services/cryptocrawl/testing/index.ts` — Intra-repository dependency or independent status not conclusively verified.
1090. `server/services/cryptocrawl/testing/live-market-dry-run.ts` — Imports code outside the trading candidate set.
1091. `server/services/cryptocrawl/testing/probability-analysis.js` — Intra-repository dependency or independent status not conclusively verified.
1092. `server/services/cryptocrawl/testing/run-1500-target-optimization.ts` — Intra-repository dependency or independent status not conclusively verified.
1093. `server/services/cryptocrawl/testing/run-99th-percentile-optimization.js` — Intra-repository dependency or independent status not conclusively verified.
1094. `server/services/cryptocrawl/testing/run-arbitrage-live-cycles.ts` — Intra-repository dependency or independent status not conclusively verified.
1095. `server/services/cryptocrawl/testing/run-extreme-tests.ts` — Intra-repository dependency or independent status not conclusively verified.
1096. `server/services/cryptocrawl/testing/run-monte-carlo-standalone.js` — Intra-repository dependency or independent status not conclusively verified.
1097. `server/services/cryptocrawl/testing/run-profit-optimization.ts` — Intra-repository dependency or independent status not conclusively verified.
1098. `server/services/cryptocrawl/testing/run-realworld-optimization.js` — Intra-repository dependency or independent status not conclusively verified.
1099. `server/services/cryptocrawl/testing/run-testnet-monte-carlo.ts` — Imports code outside the trading candidate set.
1100. `server/services/cryptocrawl/testing/run-tests.ts` — Intra-repository dependency or independent status not conclusively verified.
1101. `server/services/cryptocrawl/testing/run-zero-capital-optimization.js` — Intra-repository dependency or independent status not conclusively verified.
1102. `server/services/cryptocrawl/testing/verify-all-chains.ts` — Intra-repository dependency or independent status not conclusively verified.
1103. `server/services/cryptocrawl/testing/verify-aries-vault.ts` — Intra-repository dependency or independent status not conclusively verified.
1104. `server/services/cryptocrawl/testing/verify-automatic-native-gas-plan.ts` — Intra-repository dependency or independent status not conclusively verified.
1105. `server/services/cryptocrawl/testing/verify-autonomous-stage-progression.ts` — Intra-repository dependency or independent status not conclusively verified.
1106. `server/services/cryptocrawl/testing/verify-capital-hierarchy.ts` — Intra-repository dependency or independent status not conclusively verified.
1107. `server/services/cryptocrawl/testing/verify-live-price-failover.ts` — Intra-repository dependency or independent status not conclusively verified.
1108. `server/services/cryptocrawl/testing/verify-native-gas-funding-coordinator.ts` — Intra-repository dependency or independent status not conclusively verified.
1109. `server/services/cryptocrawl/testing/verify-profit-routing.ts` — Intra-repository dependency or independent status not conclusively verified.
1110. `server/services/cryptocrawl/testing/verify-provider-failover.ts` — Intra-repository dependency or independent status not conclusively verified.
1111. `server/services/cryptocrawl/testing/verify-settlement-lifecycle.ts` — Intra-repository dependency or independent status not conclusively verified.
1112. `server/services/cryptocrawl/testing/verify-wallet-assets.ts` — Intra-repository dependency or independent status not conclusively verified.
1113. `server/services/cryptocrawl/training/index.ts` — Referenced by an existing runtime/build/verification entrypoint.
1114. `server/services/cryptocrawl/training/scheduled-monte-carlo-training.ts` — Imports code outside the trading candidate set.
1115. `server/services/cryptocrawl/ui/README.md` — Documentation; retain pending fuller transfer.
1116. `server/services/cryptocrawl/ui/dashboard-client.js` — Intra-repository dependency or independent status not conclusively verified.
1117. `server/services/cryptocrawl/ui/dashboard.html` — Intra-repository dependency or independent status not conclusively verified.
1118. `server/services/cryptocrawl/utils/resilient-http.ts` — Intra-repository dependency or independent status not conclusively verified.
1119. `server/services/cryptocrawl/validate-swarm.ts` — Intra-repository dependency or independent status not conclusively verified.
1120. `server/services/cryptocrawl/validation/index.ts` — Intra-repository dependency or independent status not conclusively verified.
1121. `server/services/cryptocrawl/validation/monte-carlo-calibration-store.ts` — Imports code outside the trading candidate set.
1122. `server/services/cryptocrawl/validation/monte-carlo-engine.ts` — Imports code outside the trading candidate set.
1123. `server/services/cryptocrawl/validation/monte-carlo-hyper-engine.ts` — Intra-repository dependency or independent status not conclusively verified.
1124. `server/services/cryptocrawl/validation/monte-carlo-policy.ts` — Intra-repository dependency or independent status not conclusively verified.
1125. `server/services/cryptocrawl/validation/multi-oracle-validator.ts` — Imports code outside the trading candidate set.
1126. `server/services/cryptocrawl/validation/order-book-evolution-store.ts` — Intra-repository dependency or independent status not conclusively verified.
1127. `server/services/cryptocrawl/validation/runtime-confidence-bootstrap.ts` — Intra-repository dependency or independent status not conclusively verified.
1128. `server/services/cryptocrawl/validation/verify-hyper-quanti-admission.ts` — Intra-repository dependency or independent status not conclusively verified.
1129. `server/services/cryptocrawl/validation/verify-hyper-shared-data-fabric.ts` — Intra-repository dependency or independent status not conclusively verified.
1130. `server/services/cryptocrawl/verification/canonicalCryptoVerifier.ts` — Referenced/imported from outside the trading candidate set.
1131. `server/services/cryptocrawl/wallet/.wallet.enc.json` — Sensitive wallet/credentials: not eligible for public transfer.
1132. `server/services/cryptocrawl/wallet/wallet-generator.ts` — Sensitive wallet/credentials: not eligible for public transfer.
1133. `server/services/geoconsole/monteCarloPathEngine.ts` — LegalWhat component or ambiguous shared naming.
1134. `server/services/inmateSearch/__tests__/MonteCarloInmateTest.ts` — LegalWhat component or ambiguous shared naming.
1135. `server/services/monteCarlo/EvolutionaryCycleEngine.ts` — Imports code outside the trading candidate set.
1136. `server/services/monteCarlo/MonteCarloConfig.ts` — Intra-repository dependency or independent status not conclusively verified.
1137. `server/services/monteCarlo/MonteCarloCrawlerOptimizer.ts` — Imports code outside the trading candidate set.
1138. `server/services/monteCarlo/MonteCarloEngine.ts` — Intra-repository dependency or independent status not conclusively verified.
1139. `server/services/monteCarlo/index.ts` — Referenced/imported from outside the trading candidate set.
1140. `server/services/peopleSearch/router/MonteCarloEngine.ts` — LegalWhat component or ambiguous shared naming.
1141. `server/services/peopleSearch/router/__tests__/MonteCarloEngine.test.ts` — LegalWhat component or ambiguous shared naming.
1142. `server/services/quantiComp/adaptiveOptimizer.ts` — Intra-repository dependency or independent status not conclusively verified.
1143. `server/services/quantiComp/adaptiveRuntime.ts` — Intra-repository dependency or independent status not conclusively verified.
1144. `server/services/quantiComp/backendRegistry.ts` — Intra-repository dependency or independent status not conclusively verified.
1145. `server/services/quantiComp/backendRuntime.ts` — Intra-repository dependency or independent status not conclusively verified.
1146. `server/services/quantiComp/dataFabric.ts` — Intra-repository dependency or independent status not conclusively verified.
1147. `server/services/quantiComp/index.ts` — Intra-repository dependency or independent status not conclusively verified.
1148. `server/services/quantiComp/interactionModel.ts` — Intra-repository dependency or independent status not conclusively verified.
1149. `server/services/quantiComp/parallelismGovernor.ts` — Intra-repository dependency or independent status not conclusively verified.
1150. `server/services/quantiComp/resourceProfiler.ts` — Intra-repository dependency or independent status not conclusively verified.
1151. `server/services/quantiComp/runtime.ts` — Intra-repository dependency or independent status not conclusively verified.
1152. `server/services/quantiComp/testing/verify-quanti-adaptive.ts` — Intra-repository dependency or independent status not conclusively verified.
1153. `server/services/quantiComp/testing/verify-quanti-backends.ts` — Intra-repository dependency or independent status not conclusively verified.
1154. `server/services/quantiComp/testing/verify-quanti-comp.ts` — Intra-repository dependency or independent status not conclusively verified.
1155. `server/services/quantiComp/testing/verify-quanti-data-fabric.ts` — Intra-repository dependency or independent status not conclusively verified.
1156. `server/services/quantiComp/testing/verify-quanti-parallelism.ts` — Intra-repository dependency or independent status not conclusively verified.
1157. `server/services/quantiComp/types.ts` — Intra-repository dependency or independent status not conclusively verified.
1158. `services/cryptocrawler-executor/index.ts` — Imports code outside the trading candidate set.
1159. `shared/cryptaraConfig.ts` — External code/configuration/document reference remains.
1160. `shared/cryptaraMultiplierSystem.ts` — Intra-repository dependency or independent status not conclusively verified.
1161. `shared/cryptaraPersistence.ts` — Intra-repository dependency or independent status not conclusively verified.
1162. `shared/cryptaraRankManager.ts` — Intra-repository dependency or independent status not conclusively verified.
1163. `shared/cryptaraRewards.ts` — Intra-repository dependency or independent status not conclusively verified.
1164. `shared/cryptaraTypes.ts` — Intra-repository dependency or independent status not conclusively verified.
1165. `supabase/functions/cryptocrawler-terminal-sweeper/index.ts` — Database migration or service; integration not proven independent.
1166. `supabase/functions/cryptocrawler-terminal-sweeper/okx.ts` — Database migration or service; integration not proven independent.
1167. `supabase/functions/cryptocrawler-terminal-sweeper/payouts.ts` — Database migration or service; integration not proven independent.
1168. `supabase/functions/cryptocrawler-terminal-sweeper/shared.ts` — Database migration or service; integration not proven independent.
1169. `supabase/functions/cryptocrawler-terminal-sweeper/terminal.ts` — Database migration or service; integration not proven independent.

## Summary by primary reason

| Classification | Count |
|---|---:|
| Intra-repository dependency or independent status not conclusively verified | 388 |
| Imports code outside the trading candidate set | 336 |
| Build, verification, or integration script; retain pending migration | 257 |
| Database migration or service; integration not proven independent | 65 |
| Documentation; retain pending fuller transfer | 32 |
| Referenced/imported from outside the trading candidate set | 31 |
| Referenced by an existing runtime/build/verification entrypoint | 25 |
| Workflow or deployed build artifact; retain pending migration | 14 |
| LegalWhat component or ambiguous shared naming | 12 |
| External code/configuration/document reference remains | 7 |
| Sensitive wallet/credentials: not eligible for public transfer | 2 |

**No Bad-Blue files were modified or removed in producing this report.**

