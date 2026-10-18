  // CryptoCrawler State
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [cryptoStats, setCryptoStats] = useState<CryptoStats | null>(null);
  const [faucetStatus, setFaucetStatus] = useState<FaucetStatus>({
    enabled: true,
    mode: 'open',
    profitThisSession: 0,
    profitThisHour: 0,
    profitThisDay: 0,
    dailyTarget: 35000,
    dailyTargetProgress: 0,
    tradesThisHour: 0,
    tradesThisDay: 0,
    stealthLevel: 0,
    healthScore: 100,
    consecutiveFailures: 0,
    currentWindow: 0,
    totalWindows: 18,
    autoOptimize: true,
    profitableTimesOnly: true,
    antiDetectionEnabled: true,
  });
  
  // Loading States
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFaucet, setLoadingFaucet] = useState(false);
  const [togglingFaucet, setTogglingFaucet] = useState(false);
  const [startingSystem, setStartingSystem] = useState(false);
  const [stoppingSystem, setStoppingSystem] = useState(false);
