import { useState } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Cook from './pages/cook';
import Discover from './pages/discover';
import Saved from './pages/saved';
import Settings from './pages/settings';
import BottomNav from './components/bottomNav';

type Tab = 'home' | 'cook' | 'discover' | 'saved';
type Screen = 'login' | 'app' | 'settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  if (screen === 'login') {
    return <Login onLogin={() => setScreen('app')} />;
  }

  if (screen === 'settings') {
    return <Settings onBack={() => setScreen('app')} />;
  }

  return (
    <div className="app-wrapper">
      {activeTab === 'home' && <Home onSettings={() => setScreen('settings')} />}
      {activeTab === 'cook' && <Cook />}
      {activeTab === 'discover' && <Discover />}
      {activeTab === 'saved' && <Saved />}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}