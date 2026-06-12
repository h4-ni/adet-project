import { useState } from 'react';
import './cook.css';

export default function Cook() {
  const [ingredients, setIngredients] = useState<string[]>([
    'Palm Oil', 'Hotdog', 'Onion', 'Rice'
  ]);
  const [input, setInput] = useState('');

  function addIngredient() {
    if (input.trim() === '') return;       // ignore empty input
    setIngredients([...ingredients, input.trim()]);
    setInput('');                          // clear the input after adding
  }

  function removeIngredient(name: string) {
    setIngredients(ingredients.filter(i => i !== name));
  }

  return (
    <div className="cook-screen">

      {/* SECTION 1: Title */}
      <h1 className="cook-title">
        What <span className="cook-highlight">ingredients</span> do you have?
      </h1>

      {/* SECTION 2: Input */}
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

      {/* SECTION 3: Ingredient list */}
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

      {/* SECTION 4: Generate button */}
      <button className="generate-btn">Generate Recipes</button>

    </div>
  );
}