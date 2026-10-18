            {/* SYSTEM TAB */}
            <TabsContent value="system">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-800/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2"><Power className="w-5 h-5" />System Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between"><span className="text-gray-400">Main System</span><Badge variant={systemStatus?.running ? "default" : "destructive"}>{systemStatus?.running ? "Running" : "Stopped"}</Badge></div>
                    <div className="flex justify-between"><span className="text-gray-400">Uptime</span><span className="font-mono text-white">{systemStatus?.uptime ? Math.floor(systemStatus.uptime / 60) + " min" : "N/A"}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Started</span><span className="font-mono text-sm text-white">{systemStatus?.startedAt ? formatDate(systemStatus.startedAt) : "N/A"}</span></div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2"><Database className="w-5 h-5" />CryptoCrawl</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between"><span className="text-gray-400">Enabled</span><Badge variant={systemStatus?.cryptoCrawl?.enabled ? "default" : "secondary"}>{systemStatus?.cryptoCrawl?.enabled ? "Yes" : "No"}</Badge></div>
                    <div className="flex justify-between"><span className="text-gray-400">Gas Oracle</span><Badge variant={systemStatus?.cryptoCrawl?.gasOracle ? "default" : "secondary"}>{systemStatus?.cryptoCrawl?.gasOracle ? "Active" : "Inactive"}</Badge></div>
                    <div className="flex justify-between"><span className="text-gray-400">Balance Monitor</span><Badge variant={systemStatus?.cryptoCrawl?.balanceMonitor ? "default" : "secondary"}>{systemStatus?.cryptoCrawl?.balanceMonitor ? "Active" : "Inactive"}</Badge></div>
                    <div className="flex justify-between"><span className="text-gray-400">Network</span><Badge variant={systemStatus?.cryptoCrawl?.networkHealth ? "default" : "secondary"}>{systemStatus?.cryptoCrawl?.networkHealth ? "Healthy" : "Degraded"}</Badge></div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
