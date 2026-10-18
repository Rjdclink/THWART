interface CryptoStats {
  profit: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    allTime: number;
  };
  trades: {
    total: number;
    successful: number;
    failed: number;
    successRate: string;
  };
}

interface FaucetStatus {
  enabled: boolean;
  mode: string;
  profitThisSession: number;
  profitThisHour: number;
  profitThisDay: number;
  dailyTarget: number;
  dailyTargetProgress: number;
  tradesThisHour: number;
  tradesThisDay: number;
  stealthLevel: number;
  healthScore: number;
  consecutiveFailures: number;
  currentWindow: number;
  totalWindows: number;
  autoOptimize: boolean;
  profitableTimesOnly: boolean;
  antiDetectionEnabled: boolean;
}

interface SystemStatus {
  running: boolean;
  cryptoCrawl: {
    enabled: boolean;
    gasOracle: boolean;
    balanceMonitor: boolean;
    networkHealth: boolean;
  };
  startedAt: string | null;
  uptime: number;
}
