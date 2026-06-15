import { useState } from 'react';
import './cook.css';
import API_URL from '../config';

interface Props {
  onGenerate: (recipes: any[]) => void;
}

export default function Cook({ onGenerate }: Props) {
  const [ingredients, setIngredients] = useState<string[]>([
    'Palm Oil', 'Hotdog', 'Onion', 'Rice'
  ]);
  const [input, setInput] = useState('');

  function addIngredient() {
    if (input.trim() === '') return;
    setIngredients([...ingredients, input.trim()]);
    setInput('');
  }

  function removeIngredient(name: string) {
    setIngredients(ingredients.filter(i => i !== name));
  }

  async function generateRecipes() {
    const response = await fetch(`${API_URL}/api/recipes/match`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 
      'ngrok-skip-browser-warning': 'true'},
      body: JSON.stringify({ ingredients }),
    });
    const data = await response.json();
    onGenerate(data);
  }

  return (
    <div className="cook-screen">

      {/* SECTION 1: Header */}
        <h1 className="cook-title">
        What <span className="cook-highlight">ingredients</span> do you have?
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
      <button className="generate-btn" onClick={generateRecipes}>
        Generate Recipes
      </button>

    </div>
  );
}