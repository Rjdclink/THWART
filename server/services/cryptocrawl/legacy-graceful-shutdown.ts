/** CryptoCrawler-only graceful shutdown extracted from LegalWhat. */
export async function stopCryptoCrawlerForLegacyShutdown(): Promise<void> {
    try {
      const { stopCryptoCrawlerRuntime, systemState } = await import('./api/admin-api.js');
      if (systemState.lifecycle !== 'STOPPED') {
        const runtimeStop = await stopCryptoCrawlerRuntime();
        if (!runtimeStop.stopped) {
          console.warn('[SHUTDOWN] CryptoCrawler stop left unresolved components:', runtimeStop.failures);
        } else {
          console.log('[SHUTDOWN] CryptoCrawler stopped');
        }
      }
    } catch (e) {
      console.warn('[SHUTDOWN] Error stopping CryptoCrawler:', e);
    }
}
