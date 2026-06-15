import { useState, useEffect } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Cook from './pages/cook';
import Discover from './pages/discover';
import Saved from './pages/saved';
import Settings from './pages/settings';
import BottomNav from './components/bottomNav';
import RecipeMatches from './pages/recipeMatches';
import CookingSteps from './pages/cookingSteps';
import Register from './pages/register';
import API_URL from './config';

type Tab = 'home' | 'cook' | 'discover' | 'saved';
type Screen = 'login' | 'register' | 'app' | 'settings' | 'matches' | 'cooking';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [matchedRecipes, setMatchedRecipes] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  // ← load from localStorage on first render
  const [user, setUser] = useState<any>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem('token') ?? '';
  });

  // ← if token exists skip login
  useEffect(() => {
    if (token) setScreen('app');
  }, []);

  function handleLogin(user: any, token: string) {
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setScreen('app');
  }

  async function handleLogout() {
    await fetch(`${API_URL}/api/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true',
      },
    });

    setUser(null);
    setToken('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setScreen('login');
    setActiveTab('home');
  }

  if (screen === 'login') {
    return (
      <Login
        onLogin={handleLogin}
        onRegister={() => setScreen('register')}
      />
    );
  }

  if (screen === 'register') {
    return (
      <Register
        onRegister={handleLogin}
        onBack={() => setScreen('login')}
      />
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
        onSelectRecipe={(recipe) => {
          setSelectedRecipe(recipe);
          setScreen('cooking');
        }}
      />
    );
  }

  if (screen === 'cooking') {
    return (
      <CookingSteps
        recipe={selectedRecipe}
        onBack={() => setScreen('matches')}
      />
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