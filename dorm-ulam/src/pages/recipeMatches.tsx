import { useState, useEffect, useRef } from 'react';
import './recipeMatches.css';
import API_URL from '../config';
import RecipeModal from '../components/recipeModal';

interface Props {
  recipes: any[];
  token: string;
  onBack: () => void;
  onSelectRecipe: (recipe: any) => void;
}

export default function RecipeMatches({ recipes, token, onBack, onSelectRecipe }: Props) {
  // 1. Keep a local copy of the recipes so we can instantly update the likes count!
  const [localRecipes, setLocalRecipes] = useState<any[]>(recipes);
  
  // 2. Sync likes with the Discover page using localStorage
  const [liked, setLiked] = useState<number[]>(() => {
    const saved = localStorage.getItem('liked_recipes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selected, setSelected] = useState<any>(null);
  const processingRef = useRef<number[]>([]);

  // Update local recipes if the parent component sends new ones
  useEffect(() => {
    setLocalRecipes(recipes);
  }, [recipes]);

  // 3. The exact same Like + Save logic from the Discover page
  async function toggleLike(recipe: any) {
    if (processingRef.current.includes(recipe.id)) return;
    processingRef.current = [...processingRef.current, recipe.id];

    const isLiked = liked.includes(recipe.id);
    const endpoint = isLiked ? 'unlike' : 'like';
    const saveMethod = isLiked ? 'DELETE' : 'POST';

    try {
      // Hit the like endpoint to update the global count
      const response = await fetch(`${API_URL}/api/recipes/${recipe.id}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
      });

      const data = await response.json();

      // Hit the saved endpoint so it shows up in your Saved tab
      await fetch(`${API_URL}/api/saved/${recipe.id}`, {
        method: saveMethod,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
      });

      // Instantly update the number on the screen!
      const updated = localRecipes.map(r =>
        r.id === recipe.id ? { ...r, likes: data.likes } : r
      );
      setLocalRecipes(updated);

      // Save the orange heart state
      const newLiked = isLiked
        ? liked.filter(id => id !== recipe.id)
        : [...liked, recipe.id];

      setLiked(newLiked);
      localStorage.setItem('liked_recipes', JSON.stringify(newLiked));

    } finally {
      processingRef.current = processingRef.current.filter(id => id !== recipe.id);
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
            Ano cravings natin today, <span className="matches-highlight">Lab?</span>
          </p>
        </div>
      </div>

      {/* SECTION 2: Recipe list */}
      {localRecipes.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
          <p>No matching recipes found!</p>
          <p>Try adding more ingredients.</p>
        </div>
      ) : (
        <div className="matches-list">
          {localRecipes.map(recipe => {
            const steps = typeof recipe?.instructions === 'string'
              ? JSON.parse(recipe.instructions)
              : recipe?.instructions ?? [];
            const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
            const totalMins = Math.ceil(totalSeconds / 60);

            return (
              <div key={recipe.id} className="matches-card" onClick={() => setSelected(recipe)}>
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
                    
                    <div className="matches-card-meta">
                      <p className="matches-card-time">
                        <span className="material-symbols-outlined">schedule</span>
                        {totalMins} mins
                      </p>
                      <p className="matches-card-likes">
                        <span className="material-symbols-outlined">favorite</span>
                        {recipe.likes || 0}
                      </p>
                    </div>

                  </div>
                  <button
                    className={`matches-like ${liked.includes(recipe.id) ? 'liked' : ''}`}
                    onClick={e => {
                      e.stopPropagation();
                      toggleLike(recipe);
                    }}
                    disabled={processingRef.current.includes(recipe.id)}
                  >
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Integration */}
      {selected && (
        <RecipeModal
          recipe={selected}
          onClose={() => setSelected(null)}
          onStartCooking={() => {
            setSelected(null);
            onSelectRecipe(selected);
          }}
        />
      )}
    </div>
  );
}