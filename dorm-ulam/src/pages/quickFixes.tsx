import { useState, useEffect } from 'react';
import '../pages/discover.css';
import WhiteCard from '../components/whiteCard';
import API_URL from '../config';
import RecipeModal from '../components/recipeModal';

interface Props {
  onBack: () => void;
  token: string;
  onStartCooking: (recipe: any) => void;
}

export default function QuickFixes({ onBack, onStartCooking }: Props) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/recipes`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    })
      .then(res => res.json())
      .then(data => {
        // Automatically filter for recipes that take 15 minutes or less!
        const fastMeals = (Array.isArray(data) ? data : []).filter(r => getTotalMins(r) <= 15);
        setRecipes(fastMeals);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function getTotalMins(recipe: any) {
    const steps = typeof recipe?.instructions === 'string'
      ? JSON.parse(recipe.instructions)
      : recipe?.instructions ?? [];
    const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
    return Math.ceil(totalSeconds / 60);
  }

  return (
    <div className="discover-screen">
      <header className="home-header" style={{ padding: '20px', justifyContent: 'flex-start' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#E8681A' }}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 style={{ margin: '0 0 0 16px', fontSize: '20px' }}>Back to Home</h2>
      </header>

      <WhiteCard>
        <h2 className="discover-title">⚡ Sarap Express (Under 15 mins)</h2>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Loading fast meals...</p>
        ) : recipes.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No quick meals found!</p>
        ) : (
          <div className="discover-list">
            {recipes.map(recipe => (
              <div key={recipe.id} className="discover-card" onClick={() => setSelected(recipe)}>
                <img src={`/${recipe.image}`} alt={recipe.name} className="discover-card-img" />
                <div className="discover-card-info">
                  <p className="discover-card-name">{recipe.name}</p>
                  <div className="discover-card-meta">
                    <p className="discover-card-time">
                      <span className="material-symbols-outlined">schedule</span>
                      {getTotalMins(recipe)} mins
                    </p>
                    <p className="discover-card-likes">
                      <span className="material-symbols-outlined">favorite</span> {recipe.likes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </WhiteCard>

      {selected && (
        <RecipeModal 
          recipe={selected} 
          onClose={() => setSelected(null)} 
          onStartCooking={onStartCooking} 
        />
      )}
    </div>
  );
}