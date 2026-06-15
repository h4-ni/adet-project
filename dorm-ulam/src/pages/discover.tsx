import { useState, useEffect } from 'react';
import './discover.css';
import WhiteCard from '../components/whiteCard';
import API_URL from '../config';

interface Props {
  onSettings: () => void;
  token: string;
  user: any;
  onStartCooking: (recipe: any) => void;  // ← new prop
}

export default function Discover({ onSettings, token, user, onStartCooking }: Props) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<any>(null);  // ← selected recipe for modal

  useEffect(() => {
  fetch(`${API_URL}/api/recipes/trending`, {
    headers: { 'ngrok-skip-browser-warning': 'true' }
  })
    .then(res => res.json())
    .then(data => {
      setRecipes(Array.isArray(data) ? data : []);  // ← make sure it's an array
      setLoading(false);
    })
    .catch(() => {
      setRecipes([]);
      setLoading(false);
    });
}, []);

  async function toggleSave(recipeId: number) {
    const isSaved = saved.includes(recipeId);
    const method = isSaved ? 'DELETE' : 'POST';

    await fetch(`${API_URL}/api/saved/${recipeId}`, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    });

    if (isSaved) {
      setSaved(saved.filter(id => id !== recipeId));
    } else {
      setSaved([...saved, recipeId]);
    }
  }

  // parse total time from steps
  function getTotalMins(recipe: any) {
    const steps = typeof recipe?.instructions === 'string'
      ? JSON.parse(recipe.instructions)
      : recipe?.instructions ?? [];
    const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
    return Math.ceil(totalSeconds / 60);
  }

  return (
    <div className="discover-screen">

      <header className="home-header">
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'J'}
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
              <div
                key={recipe.id}
                className="discover-card"
                onClick={() => setSelected(recipe)}  // ← open modal
              >
                <img
                  src={`/${recipe.image}`}
                  alt={recipe.name}
                  className="discover-card-img"
                />
                <div className="discover-card-info">
                  <p className="discover-card-name">{recipe.name}</p>
                  <div className="discover-card-meta">
                    <p className="discover-card-time">
                      <span className="material-symbols-outlined">schedule</span>
                      {getTotalMins(recipe)} mins
                    </p>
                    <p className="discover-card-likes">
                      <span className="material-symbols-outlined">favorite</span>
                      {recipe.likes}
                    </p>
                  </div>
                </div>
                <button
                  className={`discover-like ${saved.includes(recipe.id) ? 'liked' : ''}`}
                  onClick={e => {
                    e.stopPropagation();
                    toggleSave(recipe.id);
                  }}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </WhiteCard>

      {/* Recipe Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>

            <img
              src={`/${selected.image}`}
              alt={selected.name}
              className="modal-img"
            />

            <button className="modal-close" onClick={() => setSelected(null)}>
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="modal-content">
              <h2 className="modal-title">{selected.name}</h2>

              <div className="modal-meta">
                <span className="modal-meta-item">
                  <span className="material-symbols-outlined">schedule</span>
                  {getTotalMins(selected)} mins
                </span>
                <span className="modal-meta-item">
                  <span className="material-symbols-outlined">favorite</span>
                  {selected.likes} likes
                </span>
              </div>

              <h3 className="modal-section-title">Ingredients</h3>
              <div className="modal-ingredients">
                {selected.ingredients?.map((ing: string) => (
                  <span key={ing} className="modal-ingredient-tag">{ing}</span>
                ))}
              </div>

              <button
                className="modal-cook-btn"
                onClick={() => {
                  setSelected(null);
                  onStartCooking(selected);
                }}
              >
                <span className="material-symbols-outlined">restaurant</span>
                Start Cooking!
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}