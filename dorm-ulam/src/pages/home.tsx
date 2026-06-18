import { useState, useEffect } from 'react';
import './home.css';
import WhiteCard from '../components/whiteCard';
import API_URL from '../config';
import RecipeModal from '../components/recipeModal'; // ← 1. Import the modal!

interface Props {
  onSettings: () => void;
  onQuickFixes: () => void;
  onStartCooking: (recipe: any) => void; // ← 2. Add this new prop!
  user: any;
}

export default function Home({ onSettings, onQuickFixes, onStartCooking, user }: Props) {
  const [ulamOfDay, setUlamOfDay] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null); // ← 3. Add state for the modal

  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('ulam_date');
    const savedUlam = localStorage.getItem('ulam_of_the_day');

    if (savedDate === today && savedUlam) {
      setUlamOfDay(JSON.parse(savedUlam));
    } else {
      fetch(`${API_URL}/api/recipes/trending`, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomRecipe = data[randomIndex];
            setUlamOfDay(randomRecipe);
            localStorage.setItem('ulam_of_the_day', JSON.stringify(randomRecipe));
            localStorage.setItem('ulam_date', today);
          }
        })
        .catch(err => console.error("Failed to load Ulam of the Day:", err));
    }
  }, []);

  function getTotalMins(recipe: any) {
    if (!recipe) return 0;
    const steps = typeof recipe.instructions === 'string'
      ? JSON.parse(recipe.instructions)
      : recipe.instructions ?? [];
    const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
    return Math.ceil(totalSeconds / 60);
  }

  return (
    <div className="home-screen">
      <header className="home-header">
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'U'} 
        </div>
      </header>

      <section className="home-hero">
        <img src="/pink-hair.png" alt="character" className="hero-image" />
      </section>

      <WhiteCard>
        <h1 className="hero-name">Hi, Lab {user?.name?.split(' ')[0] ?? 'User'}!</h1>
        <p className="hero-subtitle">Luto na tayo!</p>

        <section className="ulam-section">
          <h2 className="section-title">Ulam of the Day</h2>
          {/* 4. Add onClick and cursor pointer so it feels like a button */}
          <div 
            className="featured-card" 
            onClick={() => ulamOfDay && setSelected(ulamOfDay)}
            style={{ cursor: 'pointer' }}
          >
            <div className="featured-info">
              <p className="featured-name">{ulamOfDay ? ulamOfDay.name : 'Loading...'}</p>
              <p className="featured-time">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                {ulamOfDay ? getTotalMins(ulamOfDay) : '--'} mins
              </p>
              <p className="featured-likes">{ulamOfDay ? ulamOfDay.likes : 0} Likes</p>
            </div>
            {ulamOfDay ? (
              <img src={`/${ulamOfDay.image}`} alt={ulamOfDay.name} className="featured-img" />
            ) : (
              <div className="featured-img" style={{ backgroundColor: '#ccc' }}></div>
            )}
          </div>
        </section>

        <section className="home-menu">
          <div className="menu-item" onClick={onQuickFixes}>
            <div className="menu-icon">⚡</div> 
            <div className="menu-text">
              <p className="menu-title">Speedy Sarap</p>
              <p className="menu-subtitle">Ready in 15 mins or less!</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>
        </section>
      </WhiteCard>

      {/* 5. The exact same Modal logic you have on Discover */}
      {selected && (
        <RecipeModal 
          recipe={selected} 
          onClose={() => setSelected(null)} 
          onStartCooking={(r) => {
            // Tell the app we started from the Home tab!
            localStorage.setItem('cooking_origin', 'home');
            setSelected(null);
            onStartCooking(r);
          }} 
        />
      )}

    </div>
  );
}