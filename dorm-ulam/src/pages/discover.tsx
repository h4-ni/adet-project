import './discover.css';

// Mock data — we'll replace this with real data later
const recipes = [
  {
    id: 1,
    name: 'Sizzling Hotdog',
    time: '8 minutes',
    image: '/sizzling-hotdog.jpg',
    liked: false,
  },
  {
    id: 2,
    name: 'Hotdog Fried Rice',
    time: '6 minutes',
    image: '/hotdog-friedrice.jpg',
    liked: true,
  },
];

export default function Discover() {
  return (
  <div className="discover-screen">

    {/* TOP: peach background section */}
    <div className="discover-top">

      {/* SECTION 1: Header */}
      <header className="home-header">
        <div className="avatar">J</div>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      {/* SECTION 2: Hero food icons */}
      <div className="discover-hero">
        <img src="/discover.png" alt="discover" className="hero-food-img" />
      </div>

    </div>

    {/* BOTTOM: white section */}
    <div className="discover-bottom">

      {/* SECTION 3: Trending title */}
      <h2 className="discover-title">Trending: Busog-Lusog</h2>

      {/* SECTION 4: Recipe cards */}
      <div className="discover-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="discover-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="discover-card-img"
            />
            <div className="discover-card-info">
              <p className="discover-card-name">{recipe.name}</p>
              <p className="discover-card-time">
                <span className="material-symbols-outlined">schedule</span>
                {recipe.time}
              </p>
            </div>
            <button className={`discover-like ${recipe.liked ? 'liked' : ''}`}>
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        ))}
      </div>

    </div>

  </div>
);

}