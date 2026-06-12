import { useState, useEffect } from 'react';
import './discover.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onSettings: () => void;
  token: string;
  user: any;   // ← add this
}

export default function Discover({ onSettings, token, user }: Props) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState<number[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  async function toggleSave(recipeId: number) {
    const isSaved = saved.includes(recipeId);
    const method = isSaved ? 'DELETE' : 'POST';

    await fetch(`http://127.0.0.1:8000/api/saved/${recipeId}`, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (isSaved) {
      setSaved(saved.filter(id => id !== recipeId));
    } else {
      setSaved([...saved, recipeId]);
    }
  }

  return (
    <div className="discover-screen">

      <header className="home-header">
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'U'}
        </div>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      <section className="discover-hero">
        <img src="/discover.png" alt="discover-icon" className="hero-food-img" />
      </section>

      <WhiteCard>
        <h2 className="discover-title">Trending: Busog-Lusog</h2>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Loading...</p>
        ) : (
          <div className="discover-list">
            {recipes.map(recipe => (
              <div key={recipe.id} className="discover-card">
                <img
                  src={`/${recipe.image}`}
                  alt={recipe.name}
                  className="discover-card-img"
                />
                <div className="discover-card-info">
                  <p className="discover-card-name">{recipe.name}</p>
                  <p className="discover-card-time">
                    <span className="material-symbols-outlined">schedule</span>
                    {recipe.cook_time} minutes
                  </p>
                </div>
                <button
                  className={`discover-like ${saved.includes(recipe.id) ? 'liked' : ''}`}
                  onClick={() => toggleSave(recipe.id)}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </WhiteCard>

    </div>
  );
}