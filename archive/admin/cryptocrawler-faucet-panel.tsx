            {/* FAUCET TAB */}
            <TabsContent value="faucet">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Main Faucet Control */}
                <Card className="bg-gray-800/50 border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-green-400" />
                        Autonomous Profit Faucet
                      </CardTitle>
                      <Badge className={faucetStatus.enabled ? 'bg-green-500/20 text-green-300 animate-pulse' : 'bg-red-500/20 text-red-300'}>
                        {faucetStatus.enabled ? '🟢 ACTIVE' : '🔴 OFF'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Master Switch */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${faucetStatus.enabled ? 'bg-green-500/20' : 'bg-gray-500/20'}`}>
                            <Power className={`w-6 h-6 ${faucetStatus.enabled ? 'text-green-400' : 'text-gray-400'}`} />
                          </div>
                          <div>
                            <p className="text-white font-medium">Faucet Power</p>
                            <p className="text-sm text-gray-400">{faucetStatus.enabled ? 'Generating profit' : 'Faucet is OFF'}</p>
                          </div>
                        </div>
                        <Switch checked={faucetStatus.enabled} onCheckedChange={handleToggleFaucet} disabled={togglingFaucet} className="data-[state=checked]:bg-green-500" />
                      </div>
                    </div>

                    {/* Status Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-sm text-gray-400">Mode</p>
                        <p className="text-lg font-medium text-white capitalize">{faucetStatus.mode}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-sm text-gray-400">Health</p>
                        <p className="text-lg font-medium text-white">{faucetStatus.healthScore}%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-sm text-gray-400">Stealth</p>
                        <p className="text-lg font-medium text-white">{faucetStatus.stealthLevel}/10</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <p className="text-sm text-gray-400">Window</p>
                        <p className="text-lg font-medium text-white">{faucetStatus.currentWindow}/{faucetStatus.totalWindows}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Daily Target</span>
                        <span className="text-white">${faucetStatus.profitThisDay.toLocaleString()} / ${faucetStatus.dailyTarget.toLocaleString()}</span>
                      </div>
                      <Progress value={faucetStatus.dailyTargetProgress} className="h-3 bg-gray-700" />
                    </div>

                    {/* Session Stats */}
                    <div className="p-4 rounded-lg bg-orange-900/20 border border-orange-500/30">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-400">${faucetStatus.profitThisHour.toFixed(2)}</p>
                          <p className="text-xs text-gray-400">This Hour</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{faucetStatus.tradesThisHour}</p>
                          <p className="text-xs text-gray-400">Trades/Hr</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-400">${faucetStatus.profitThisSession.toFixed(2)}</p>
                          <p className="text-xs text-gray-400">Session</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Optimization Settings */}
                <Card className="bg-gray-800/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      Optimization Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-blue-400" />
                        <div>
                          <p className="text-white">Auto-Optimize</p>
                          <p className="text-xs text-gray-400">Automatic adjustment</p>
                        </div>
                      </div>
                      <Switch checked={faucetStatus.autoOptimize} onCheckedChange={(checked) => handleUpdateFaucetSettings({ autoOptimize: checked })} className="data-[state=checked]:bg-blue-500" />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-yellow-400" />
                        <div>
                          <p className="text-white">Profitable Times Only</p>
                          <p className="text-xs text-gray-400">Optimal windows</p>
                        </div>
                      </div>
                      <Switch checked={faucetStatus.profitableTimesOnly} onCheckedChange={(checked) => handleUpdateFaucetSettings({ profitableTimesOnly: checked })} className="data-[state=checked]:bg-yellow-500" />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-2">
                        <EyeOff className="w-4 h-4 text-red-400" />
                        <div>
                          <p className="text-white">Anti-Detection</p>
                          <p className="text-xs text-gray-400">Stealth mode</p>
                        </div>
                      </div>
                      <Switch checked={faucetStatus.antiDetectionEnabled} onCheckedChange={(checked) => handleUpdateFaucetSettings({ antiDetectionEnabled: checked })} className="data-[state=checked]:bg-red-500" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Daily Target</Label>
                      <Select value={faucetStatus.dailyTarget.toString()} onValueChange={(v) => handleUpdateFaucetSettings({ dailyTarget: parseInt(v, 10) })}>
                        <SelectTrigger className="bg-gray-900/50 border-white/10 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10000">$10,000</SelectItem>
                          <SelectItem value="25000">$25,000</SelectItem>
                          <SelectItem value="35000">$35,000</SelectItem>
                          <SelectItem value="50000">$50,000</SelectItem>
                          <SelectItem value="100000">$100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
