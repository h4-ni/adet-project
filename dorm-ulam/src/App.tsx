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
import QuickFixes from './pages/quickFixes';

type Tab = 'home' | 'cook' | 'discover' | 'saved';
type Screen = 'login' | 'register' | 'app' | 'settings' | 'matches' | 'cooking' | 'quick';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [matchedRecipes, setMatchedRecipes] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const [user, setUser] = useState<any>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem('token') ?? '';
  });

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
      headers: { 'Authorization': `Bearer ${token}` },
    });

    setUser(null);
    setToken('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('liked_recipes');
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
        token={token} 
        onBack={() => setScreen('app')}
        onLogout={handleLogout}
        onUpdateUser={(updatedUser) => {  {/* ← Let settings update the global profile */}
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }}
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
        token={token}
        onBack={() => setScreen('matches')}
        onDone={() => {
          setScreen('app');
          setActiveTab('home');
        }}
      />
    );
  }

  if (screen === 'quick') {
    return (
      <QuickFixes 
        token={token}
        onBack={() => setScreen('app')} 
        onStartCooking={(recipe) => {
          setSelectedRecipe(recipe);
          setScreen('cooking');
        }}
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
            onQuickFixes={() => setScreen('quick')}   
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
            onStartCooking={(recipe) => {
              setSelectedRecipe(recipe);
              setScreen('cooking');
            }}
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