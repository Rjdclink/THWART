# CryptoCrawler administrator shortcut (extracted from LegalWhat)

Original trading-only JSX preserved during separation. This is an archive, not a standalone component.

```tsx
              <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-white font-medium">CryptoCrawler Dashboard</p>
                    <p className="text-xs text-gray-400">Route: /cryptocrawler-v2</p>
                  </div>
                  <Switch
                    checked={featureFlags.cryptocrawler}
                    onCheckedChange={(v) => setFeatureFlag('cryptocrawler', v)}
                    className="data-[state=checked]:bg-purple-500"
                  />
                </div>
                <Button
                  className="mt-3 w-full h-11"
                  variant="outline"
                  disabled={!featureFlags.cryptocrawler}
                  onClick={() => setLocation('/cryptocrawler-v2')}
                >
                  Open CryptoCrawler
                </Button>
              </div>
```
