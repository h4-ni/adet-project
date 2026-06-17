import { useState } from 'react';
import './cook.css';
import API_URL from '../config';

interface Props {
  onGenerate: (recipes: any[]) => void;
}

export default function Cook({ onGenerate }: Props) {
  const [ingredients, setIngredients] = useState<string[]>(() => {
    const saved = localStorage.getItem('ingredients');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  // 1. Add a loading state to track the API call
  const [isGenerating, setIsGenerating] = useState(false);

  function addIngredient() {
    if (input.trim() === '') return;
    const updated = [...ingredients, input.trim()];
    setIngredients(updated);
    localStorage.setItem('ingredients', JSON.stringify(updated));
    setInput('');
  }

  function removeIngredient(name: string) {
    const updated = ingredients.filter(i => i !== name);
    setIngredients(updated);
    localStorage.setItem('ingredients', JSON.stringify(updated));
  }

  async function generateRecipes() {
    // 2. Prevent API calls if no ingredients are added
    if (ingredients.length === 0) return; 
    
    setIsGenerating(true); // Start loading

    try {
      const response = await fetch(`${API_URL}/api/recipes/match`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({ ingredients }),
      });
      
      const data = await response.json();
      onGenerate(data);
    } catch (error) {
      console.error("Error generating recipes:", error);
    } finally {
      setIsGenerating(false); // Stop loading regardless of success/fail
    }
  }

  return (
    <div className="cook-screen">

      {/* SECTION 1: Header */}
      <h1 className="cook-title">
        Lablab ko, what <span className="cook-highlight">ingredients</span> do you have?
      </h1>

      {/* SECTION 3: Input */}
      <div className="cook-input-row">
        <button className="add-btn" onClick={addIngredient}>+</button>
        <input
          className="cook-input"
          type="text"
          placeholder="Add Egg, Rice, Onion..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addIngredient()}
        />
      </div>

      {/* SECTION 4: Ingredient list */}
      <div className="ingredients-header">
        <p className="ingredients-label">Ingredients to Match</p>
        <button className="clear-btn" onClick={() => setIngredients([])}>
          Clear All
        </button>
      </div>

      <div className="ingredients-list">
        {ingredients.map(item => (
          <div key={item} className="ingredient-item">
            <span className="ingredient-name">{item}</span>
            <button
              className="delete-btn material-symbols-outlined"
              onClick={() => removeIngredient(item)}
            >
              delete
            </button>
          </div>
        ))}
      </div>

      {/* SECTION 5: Generate button */}
      <button 
        className="generate-btn" 
        onClick={generateRecipes}
        // 3. Disable the button if loading or if there are no ingredients
        disabled={isGenerating || ingredients.length === 0}
      >
        {isGenerating ? 'Cooking up ideas...' : 'Generate Recipes'}
      </button>

    </div>
  );
}