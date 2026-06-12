import './recipeMatches.css';

interface Recipe {
  id: number;
  name: string;
  time: string;
  image: string;
  liked: boolean;
  missingIngredient: boolean;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Sizzling Hotdog',
    time: '8 minutes',
    image: '/sizzling-hotdog.jpg',
    liked: false,
    missingIngredient: false,
  },
  {
    id: 2,
    name: 'Hotdog Fried Rice',
    time: '6 minutes',
    image: '/hotdog-friedrice.jpg',
    liked: true,
    missingIngredient: false,
  },
  {
    id: 3,
    name: 'Hotsilog',
    time: '10 minutes',
    image: '/hotsilog.jpg',
    liked: false,
    missingIngredient: true,
  },
];

interface Props {
  onBack: () => void;
  onSelectRecipe: () => void;
}

export default function RecipeMatches({ onBack, onSelectRecipe }: Props) {
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
      <div className="matches-list">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="matches-card"
            onClick={onSelectRecipe}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="matches-card-img"
            />
            <div className="matches-card-bottom">
              <div className="matches-card-info">
                <div className="matches-name-row">
                  <p className="matches-card-name">{recipe.name}</p>
                  {recipe.missingIngredient && (
                    <span className="missing-badge">Missing Ingredient!</span>
                  )}
                </div>
                <p className="matches-card-time">
                  <span className="material-symbols-outlined">schedule</span>
                  {recipe.time}
                </p>
              </div>
              <button className={`matches-like ${recipe.liked ? 'liked' : ''}`}>
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}