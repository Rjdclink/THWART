import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { CRYPTARAModule, initializeCRYPTARA, shutdownCRYPTARA } from '../cryptaraModule';
import { initializeALEXARA, shutdownALEXARA } from '../alexaraModule';
import { shutdownBitNeuralPathways } from '../bitNeuralPathways';

describe('CRYPTARA Module', () => {
  let cryptara: CRYPTARAModule;

  beforeEach(async () => {
    await shutdownCRYPTARA();
    await shutdownBitNeuralPathways();
    cryptara = await initializeCRYPTARA();
  });

  afterEach(async () => {
    await shutdownCRYPTARA();
    await shutdownBitNeuralPathways();
  });

  it('should initialize correctly', () => {
    expect(cryptara.isInitialized()).toBe(true);
  });

  it('should create pattern clusters on initialization', () => {
    const clusterIds = cryptara.getClusterIds();
    expect(clusterIds.length).toBeGreaterThan(0);
  });

  it('should analyze data patterns', async () => {
    const result = await cryptara.analyzePatterns(
      { address: '0x123', amount: 100, timestamp: Date.now() },
      'transaction'
    );

    expect(result).toBeDefined();
    expect(result.category).toBe('transaction');
    expect(result.confidence).toBeGreaterThanOrEqual(0);
    expect(result.sandboxCompliant).toBe(true);
  });

  it('should detect patterns in analysis', async () => {
    const result = await cryptara.analyzePatterns(
      { nodes: ['a', 'b', 'c'], connections: 5 },
      'network'
    );

    expect(result.detectedPatterns).toBeDefined();
    expect(Array.isArray(result.detectedPatterns)).toBe(true);
  });

  it('should create network nodes', async () => {
    const result = await cryptara.analyzePatterns(
      { entities: ['entity1', 'entity2'] },
      'network'
    );

    expect(result.networkNodes).toBeDefined();
  });

  it('should reject forbidden data types', async () => {
    await expect(
      cryptara.analyzePatterns(
        { pii: 'sensitive data', name: 'test' },
        'behavioral'
      )
    ).rejects.toThrow('sandbox violation');
  });

  it('should share metadata with ALEXARA', async () => {
    // Initialize ALEXARA
    await initializeALEXARA();

    const metadata = await cryptara.shareMetadataWithALEXARA();

    expect(metadata).toBeDefined();
    expect(metadata.patterns).toBeGreaterThanOrEqual(0);

    await shutdownALEXARA();
  });

  it('should return valid sandbox boundary', () => {
    const boundary = cryptara.getSandboxBoundary();

    expect(boundary).toBeDefined();
    expect(boundary.allowedCategories).toContain('network');
    expect(boundary.forbiddenDataTypes).toContain('pii');
  });

  it('should return valid metrics', () => {
    const metrics = cryptara.getMetrics();

    expect(metrics).toBeDefined();
    expect(metrics.totalClusters).toBeGreaterThan(0);
  });
});

