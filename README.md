# THWART / CryptoCrawler

Independent source copy of the trading application from Bad-Blue production commit `48dfb50edb3eeac3ac177475b1f57415b2de33d7`. Bad-Blue is unchanged and is not a build or runtime dependency. Shared utilities are local copies; there are no imports into the LegalWhat repository.

Includes CryptoCrawler services, CRYPTARA, computational Beam, QuantiComp, contracts, trading migrations, verification scripts, dashboards, API routers, independent operator sign-in and build configuration. Existing historical extraction fragments are retained under `archive/` as text. The encrypted production wallet is not copied.

## Build and configure

Use Node 20 and npm 10. Run `npm ci`, `npm run build`, then `npm start`. The Dockerfile and Railway configuration support a separate deployment. The trading runtime remains stopped until an operator explicitly starts it through the dashboard.

Supply fresh values using `.env.example`: operator password, session secret, database/Overflow configuration, RPC providers and exchange credentials needed for enabled capabilities. Configure dedicated data stores and initialize the included schema/migrations. Set wallet and payout destinations explicitly; no live wallets, balances, credentials or customer data were migrated.

The browser opens the CryptoCrawler dashboard after sign-in. The existing dashboard and admin routers retain their trading controls and manual-start behavior. This separation creates no deployments or trading executions.

## Verification and inventory

- `node scripts/verify-independent-repository.cjs`: checks local imports across code and scripts.
- `node --import tsx scripts/verify-independent-auth.ts`: verifies anonymous/wrong-password rejection, valid sessions, tamper rejection and service keys.
- `npm run build`: builds the browser, Monte Carlo worker, server and proof-of-work worker using the existing Overflow-aware bundler.

These checks passed locally. Exchange execution, funds movement, configured database operation and a production deployment were not run. `docs/separation/file-inventory.csv` records source-file decisions and before/after blob hashes. Earlier extraction audit documents describe historical work and are superseded by this inventory.
