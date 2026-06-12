import { useState, useEffect } from 'react';
import './saved.css';

interface Props {
  onSettings: () => void;
  user: any;
  token: string;
}

export default function Saved({ onSettings, user, token }: Props) {
  const [savedRecipes, setSavedRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/saved', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setSavedRecipes(data);
        setLoading(false);
      });
  }, []);

  async function unsaveRecipe(recipeId: number) {
    await fetch(`http://127.0.0.1:8000/api/saved/${recipeId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    setSavedRecipes(savedRecipes.filter(r => r.id !== recipeId));
  }

  return (
    <div className="saved-screen">

      {/* SECTION 1: Header */}
      <header className="home-header">
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'J'}
        </div>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      {/* SECTION 2: Title row */}
      <div className="saved-title-row">
        <h2 className="saved-title">Your Favorites</h2>
        <p className="saved-count">{savedRecipes.length} recipes</p>
      </div>

      {/* SECTION 3: Cards */}
      {loading ? (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>
          Loading...
        </p>
      ) : savedRecipes.length === 0 ? (
        <div className="saved-empty">
          <span className="material-symbols-outlined saved-empty-icon">favorite</span>
          <p className="saved-empty-text">No saved recipes yet!</p>
          <p className="saved-empty-sub">Heart a recipe to save it here.</p>
        </div>
      ) : (
        <div className="saved-list">
          {savedRecipes.map(recipe => (
            <div key={recipe.id} className="saved-card">
              <img
                src={`/${recipe.image}`}
                alt={recipe.name}
                className="saved-card-img"
              />
              <div className="saved-card-info">
                <p className="saved-card-name">{recipe.name}</p>
                <p className="saved-card-time">
                  <span className="material-symbols-outlined">schedule</span>
                  {recipe.cook_time} minutes
                </p>
              </div>
              <button
                className="saved-unlike"
                onClick={() => unsaveRecipe(recipe.id)}
              >
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}