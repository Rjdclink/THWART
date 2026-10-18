# CRYPTARA-only HTTP handlers extracted from shared GENIE routing

```ts
/**
 * GET /api/genie/cryptara/status
 * Get CRYPTARA status
 */
router.get('/cryptara/status', async (req: Request, res: Response) => {
  try {
    await initializeGenie();
    
    const cryptara = genie?.getCryptara();
    const status = cryptara?.getStatus();
    const patterns = cryptara?.getRecentPatterns();
    const predictions = cryptara?.getRecentPredictions();
    
    return res.json({
      success: true,
      status,
      recentPatterns: patterns?.slice(-10),
      recentPredictions: predictions?.slice(-10),
    });
  } catch (error: any) {
    log.error('CRYPTARA status error', { error });
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});


// ============================================================================
// CRYPTARA FAUCET ROUTE
// ============================================================================

/**
 * POST /api/genie/cryptara/faucet
 * Trigger CRYPTARA faucet operation (requires authentication)
 */
router.post('/cryptara/faucet', async (req: Request, res: Response) => {
  try {
    await initializeGenie();
    
    if (!adminPanel?.isAdmin()) {
      return res.status(403).json({ 
        success: false, 
        error: 'Authentication required' 
      });
    }
    
    const { operationType } = req.body;
    
    if (!operationType) {
      return res.status(400).json({ 
        success: false, 
        error: 'operationType is required (simulation or evolution)' 
      });
    }
    
    const cryptara = genie?.getCryptara();
    await cryptara?.triggerFaucet(operationType);
    
    return res.json({
      success: true,
      message: `Faucet triggered: ${operationType}`,
      status: cryptara?.getStatus(),
    });
  } catch (error: any) {
    log.error('Faucet trigger error', { error });
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

/**
 * POST /api/genie/cryptara/simulation
 * Run Monte Carlo simulation (requires authentication)
 */
router.post('/cryptara/simulation', async (req: Request, res: Response) => {
  try {
    await initializeGenie();
    
    if (!adminPanel?.isAdmin()) {
      return res.status(403).json({ 
        success: false, 
        error: 'Authentication required' 
      });
    }
    
    const cryptara = genie?.getCryptara();
    const result = await cryptara?.runMonteCarloSimulation();
    
    return res.json({
      success: true,
      simulation: result,
    });
  } catch (error: any) {
    log.error('Simulation error', { error });
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});


```
