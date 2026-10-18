  // Toggle faucet
  const handleToggleFaucet = async (enabled: boolean) => {
    setTogglingFaucet(true);
    addConsoleLog('info', `[Faucet] ${enabled ? '🟢 Turning ON' : '🔴 Turning OFF'}...`);
    
    try {
      const res = await fetch('/api/crypto/faucet/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ enabled }),
      });
      
      if (res.ok) {
        setFaucetStatus(prev => ({ ...prev, enabled, mode: enabled ? 'open' : 'closed' }));
        toast({ title: enabled ? "Faucet Activated" : "Faucet Deactivated", description: enabled ? "Autonomous profit optimization is ACTIVE" : "Faucet stopped" });
        addConsoleLog('info', `[Faucet] ✅ Successfully ${enabled ? 'activated' : 'deactivated'}`);
      } else {
        // Optimistic update
        setFaucetStatus(prev => ({ ...prev, enabled, mode: enabled ? 'open' : 'closed' }));
        addConsoleLog('info', `[Faucet] ✅ ${enabled ? 'Activated' : 'Deactivated'} (local)`);
      }
    } catch (error) {
      setFaucetStatus(prev => ({ ...prev, enabled, mode: enabled ? 'open' : 'closed' }));
      addConsoleLog('warn', '[Faucet] Toggle applied locally');
    } finally {
      setTogglingFaucet(false);
    }
  };

  // Update faucet settings
  const handleUpdateFaucetSettings = async (settings: Partial<FaucetStatus>) => {
    setFaucetStatus(prev => ({ ...prev, ...settings }));
    addConsoleLog('info', '[Faucet] Settings updated');
    
    try {
      await fetch('/api/crypto/faucet/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(settings),
      });
    } catch (error) {
      // Settings saved locally
    }
  };

  // Start system
  const handleStartSystem = async () => {
    setStartingSystem(true);
    addConsoleLog('info', '[CryptoCrawler] Starting system...');
    
    try {
      const res = await fetch('/admin/crypto/start', {
        method: 'POST',
        credentials: 'include',
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "System Started", description: "CryptoCrawler is now running" });
        addConsoleLog('info', '[CryptoCrawler] ✓ System started');
        fetchSystemStatus();
      } else {
        throw new Error(data.error || 'Could not start system');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not start system';
      toast({ title: "Failed to Start", description: message, variant: "destructive" });
      addConsoleLog('error', `[CryptoCrawler] Failed to start: ${message}`);
    } finally {
      setStartingSystem(false);
    }
  };

  // Stop system
  const handleStopSystem = async () => {
    setStoppingSystem(true);
    addConsoleLog('info', '[CryptoCrawler] Stopping system...');
    
    try {
      const res = await fetch('/admin/crypto/stop', {
        method: 'POST',
        credentials: 'include',
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "System Stopped", description: "CryptoCrawler has been stopped" });
        addConsoleLog('info', '[CryptoCrawler] ✓ System stopped');
        fetchSystemStatus();
      } else {
        throw new Error(data.error || 'Could not stop system');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not stop system';
      toast({ title: "Failed to Stop", description: message, variant: "destructive" });
      addConsoleLog('error', `[CryptoCrawler] Failed to stop: ${message}`);
    } finally {
      setStoppingSystem(false);
    }
  };
