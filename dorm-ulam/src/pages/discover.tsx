import './discover.css';
import WhiteCard from '../components/whiteCard';



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

interface Props {
  onSettings: () => void;
}

export default function Discover({ onSettings }: Props) {
  return (
    <div className="discover-screen">

      <header className="home-header">
        <div className="avatar" onClick={onSettings}>J</div>  {/* ← add onClick */}
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      {/* SECTION 2: Hero food icons — floats above white card */}
      <section className="discover-hero">
        <img src="/discover.png" alt="discover-icon" className="hero-food-img" />
      </section>

      {/* White card */}
      <WhiteCard>

        <h2 className="discover-title">Trending: Busog-Lusog</h2>

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

      </WhiteCard>

    </div>
  );
}