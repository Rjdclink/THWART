  // Fetch crypto system status
  const fetchSystemStatus = useCallback(async () => {
    try {
      const res = await fetch("/admin/crypto/status", {
        credentials: "include",
        headers: { "Cache-Control": "no-store" },
      });

      if (res.status === 401) {
        addConsoleLog('warn', 'Session expired - please re-authenticate');
        setSystemStatus({
          running: false,
          cryptoCrawl: { enabled: false, gasOracle: false, balanceMonitor: false, networkHealth: false },
          startedAt: null,
          uptime: 0,
        });
        return;
      }

      if (res.ok) {
        const data = await res.json();
        setSystemStatus(data);
        addConsoleLog('info', `System status: ${data.running ? 'RUNNING' : 'STOPPED'}`);
      }
    } catch (error) {
      addConsoleLog('error', 'Failed to fetch system status');
      setSystemStatus({
        running: false,
        cryptoCrawl: { enabled: false, gasOracle: false, balanceMonitor: false, networkHealth: false },
        startedAt: null,
        uptime: 0,
      });
    }
  }, [addConsoleLog]);

  // Fetch crypto stats
  const fetchCryptoStats = useCallback(async () => {
    try {
      const res = await fetch("/api/crypto/stats", {
        credentials: "include",
        headers: { "Cache-Control": "no-store" },
      });

      if (res.ok) {
        const data = await res.json();
        setCryptoStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch crypto stats:', error);
    }
  }, []);

  // Fetch faucet status
  const fetchFaucetStatus = useCallback(async () => {
    setLoadingFaucet(true);
    try {
      const res = await fetch("/api/crypto/faucet/status", {
        credentials: "include",
        headers: { "Cache-Control": "no-store" },
      });

      if (res.ok) {
        const data = await res.json();
        setFaucetStatus(prev => ({
          ...prev,
          ...data,
          enabled: data.enabled ?? true,
        }));
        addConsoleLog('info', `[Faucet] Status: ${data.mode || 'active'}, Progress: ${(data.dailyTargetProgress || 0).toFixed(1)}%`);
      }
    } catch (error) {
      addConsoleLog('warn', '[Faucet] Using default settings');
    } finally {
      setLoadingFaucet(false);
    }
  }, [addConsoleLog]);
