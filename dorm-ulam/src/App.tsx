import { useState } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Cook from './pages/cook';
import Discover from './pages/discover';
import Saved from './pages/saved';
import Settings from './pages/settings';
import BottomNav from './components/bottomNav';
import RecipeMatches from './pages/recipeMatches';
import CookingSteps from './pages/cookingSteps';

type Tab = 'home' | 'cook' | 'discover' | 'saved';
type Screen = 'login' | 'app' | 'settings' | 'matches' | 'cooking';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  if (screen === 'login') {
    return <Login onLogin={() => setScreen('app')} />;
  }

  if (screen === 'settings') {
    return <Settings onBack={() => setScreen('app')} />;
  }

  if (screen === 'matches') {
    return (
      <RecipeMatches
        onBack={() => setScreen('app')}
        onSelectRecipe={() => setScreen('cooking')}
      />
    );
  }

  if (screen === 'cooking') {
    return (
      <CookingSteps onBack={() => setScreen('matches')} />
    );
  }

  return (
    <>
      <div className="app-wrapper">
        {activeTab === 'home' && <Home onSettings={() => setScreen('settings')} />}
        {activeTab === 'cook' && <Cook onGenerate={() => setScreen('matches')} />}
        {activeTab === 'discover' && <Discover onSettings={() => setScreen('settings')} />}
        {activeTab === 'saved' && <Saved onSettings={() => setScreen('settings')} />}
      </div>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </>
  );
}