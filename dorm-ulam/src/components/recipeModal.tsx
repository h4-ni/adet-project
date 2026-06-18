import './recipeModal.css';

interface Props {
  recipe: any;
  onClose: () => void;
  onStartCooking: (recipe: any) => void;
}

export default function RecipeModal({ recipe, onClose, onStartCooking }: Props) {
  if (!recipe) return null;

  function getTotalMins(recipeData: any) {
    const steps = typeof recipeData?.instructions === 'string'
      ? JSON.parse(recipeData.instructions)
      : recipeData?.instructions ?? [];
    const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
    return Math.ceil(totalSeconds / 60);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <img
          src={`/${recipe.image}`}
          alt={recipe.name}
          className="modal-img"
        />
        <button className="modal-close" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="modal-content">
          <h2 className="modal-title">{recipe.name}</h2>
          <div className="modal-meta">
            <span className="modal-meta-item">
              <span className="material-symbols-outlined">schedule</span>
              {getTotalMins(recipe)} mins
            </span>
            <span className="modal-meta-item">
              <span className="material-symbols-outlined">favorite</span>
              {recipe.likes} likes
            </span>
          </div>
          <h3 className="modal-section-title">Ingredients</h3>
          <div className="modal-ingredients">
            {recipe.ingredients?.map((ing: string) => (
              <span key={ing} className="modal-ingredient-tag">{ing}</span>
            ))}
          </div>
          <button
            className="modal-cook-btn"
            onClick={() => {
              onClose();
              onStartCooking(recipe);
            }}
          >
            Cook na tayo, Lablab ko!
          </button>
        </div>
      </div>
    </div>
  );
}