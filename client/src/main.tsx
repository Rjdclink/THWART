import { createRoot } from 'react-dom/client';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'wouter';
import { queryClient } from './lib/queryClient';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import CryptoCrawler from './pages/cryptocrawler-v2';
import Dashboard from './pages/cryptocrawler-dashboard';
import './index.css';

function App() {
  const user = useQuery({ queryKey: ['/api/auth/user'], queryFn: async () => { const r = await fetch('/api/auth/user', { credentials: 'include' }); if (!r.ok) throw new Error('Unable to check session'); return r.json(); } });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  if (user.isPending) return <p>Loading…</p>;
  if (!user.data?.isMasterBypass) return <main className="min-h-screen flex items-center justify-center bg-background"><form className="space-y-4 p-8" onSubmit={async event => {
    event.preventDefault(); setError('');
    try { const r = await fetch('/api/master-login', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      if (!r.ok) throw new Error('Sign-in failed'); setPassword(''); await user.refetch();
    } catch (e) { setError(e instanceof Error ? e.message : 'Sign-in failed'); }
  }}><h1 className="text-2xl">THWART</h1><label className="block">Operator password<input className="block border p-2 text-black" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} /></label><button className="border p-2" type="submit">Sign in</button>{error && <p role="alert">{error}</p>}</form></main>;
  return <TooltipProvider><Switch><Route path="/cryptocrawler-v2" component={CryptoCrawler} /><Route path="/cryptocrawler-dashboard" component={Dashboard} /><Route><Redirect to="/cryptocrawler-v2" /></Route></Switch><Toaster /></TooltipProvider>;
}
createRoot(document.getElementById('root')!).render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);
