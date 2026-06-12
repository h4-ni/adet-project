import './saved.css';

const savedRecipes = [
  {
    id: 1,
    name: 'Sizzling Hotdog',
    time: '8 minutes',
    image: '/sizzling-hotdog.jpg',
  },
  {
    id: 2,
    name: 'Hotdog Fried Rice',
    time: '6 minutes',
    image: '/hotdog-friedrice.jpg',
  },
];

interface Props {
  onSettings: () => void;
}

export default function Saved({ onSettings }: Props) {
  return (
    <div className="saved-screen">

      <header className="home-header">
        <div className="avatar" onClick={onSettings}>J</div>  {/* ← add onClick */}
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
      {savedRecipes.length === 0 ? (
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
                src={recipe.image}
                alt={recipe.name}
                className="saved-card-img"
              />
              <div className="saved-card-info">
                <p className="saved-card-name">{recipe.name}</p>
                <p className="saved-card-time">
                  <span className="material-symbols-outlined">schedule</span>
                  {recipe.time}
                </p>
              </div>
              <button className="saved-unlike">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}