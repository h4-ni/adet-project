import { useState } from 'react';
import './recipeMatches.css';
import API_URL from '../config';

interface Props {
  recipes: any[];
  token: string;
  onBack: () => void;
  onSelectRecipe: () => void;
}

export default function RecipeMatches({ recipes, token, onBack, onSelectRecipe }: Props) {
  const [saved, setSaved] = useState<number[]>([]);

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

  return (
    <div className="matches-screen">

      {/* SECTION 1: Header */}
      <div className="matches-header">
        <button className="matches-back" onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="matches-title">Recipe Matches</h1>
          <p className="matches-subtitle">
            Swak na swak, <span className="matches-highlight">lods!</span>
          </p>
        </div>
      </div>

      {/* SECTION 2: Recipe list */}
      {recipes.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
          <p>No matching recipes found!</p>
          <p>Try adding more ingredients.</p>
        </div>
      ) : (
        <div className="matches-list">
          {recipes.map(recipe => (
            <div key={recipe.id} className="matches-card" onClick={onSelectRecipe}>
              <img
                src={`/${recipe.image}`}
                alt={recipe.name}
                className="matches-card-img"
              />
              <div className="matches-card-bottom">
                <div className="matches-card-info">
                  <div className="matches-name-row">
                    <p className="matches-card-name">{recipe.name}</p>
                    {recipe.missing_ingredients?.length > 0 && (
                      <span className="missing-badge">Missing Ingredient!</span>
                    )}
                  </div>
                  <p className="matches-card-time">
                    <span className="material-symbols-outlined">schedule</span>
                    {recipe.cook_time} minutes
                  </p>
                </div>
                <button
                  className={`matches-like ${saved.includes(recipe.id) ? 'liked' : ''}`}
                  onClick={e => {
                    e.stopPropagation();
                    toggleSave(recipe.id);
                  }}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}