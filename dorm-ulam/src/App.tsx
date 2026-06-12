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
  const [matchedRecipes, setMatchedRecipes] = useState<any[]>([]);  // ← moved inside
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>('');

  async function handleLogout() {
  // call the API to invalidate the token
  await fetch('http://127.0.0.1:8000/api/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

    // clear local state
    setUser(null);
    setToken('');
    setScreen('login');
    setActiveTab('home');
  }

  if (screen === 'login') {
    return (
      <Login onLogin={(user, token) => {
        setUser(user);
        setToken(token);
        setScreen('app');
      }} />
    );
  }

  if (screen === 'settings') {
    return (
      <Settings
        user={user}
        onBack={() => setScreen('app')}
        onLogout={handleLogout}
      />
    );
  }

  if (screen === 'matches') {
  return (
    <RecipeMatches
      recipes={matchedRecipes}
      token={token}
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
        {activeTab === 'home' && (
          <Home
            user={user}
            onSettings={() => setScreen('settings')}
            onDiscover={() => setActiveTab('discover')}
            onSaved={() => setActiveTab('saved')}
          />
        )}
        {activeTab === 'cook' && (
          <Cook onGenerate={(recipes) => {
            setMatchedRecipes(recipes);
            setScreen('matches');
          }} />
        )}
        {activeTab === 'discover' && (
          <Discover
            token={token}
            user={user}
            onSettings={() => setScreen('settings')}
          />
        )}        
        {activeTab === 'saved' && (
          <Saved
            user={user}
            token={token}
            onSettings={() => setScreen('settings')}
          />
        )}
      </div>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </>
  );
}