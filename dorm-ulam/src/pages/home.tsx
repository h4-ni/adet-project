import './home.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onSettings: () => void;
}

export default function Home({ onSettings }: Props) {
  return (
    <div className="home-screen">

      {/* SECTION 1: Header */}
      <header className="home-header">
        <div className="avatar" onClick={onSettings}>J</div>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      {/* SECTION 2: Hero — character floats above the white card */}
      <section className="home-hero">
        <img src="/pink-hair.png" alt="character" className="hero-image" />
      </section>

      {/* White card starts here — pulls up behind the character */}
      <WhiteCard>

        <h1 className="hero-name">Hi, Joshua!</h1>
        <p className="hero-subtitle">Luto na, G na?</p>

        {/* SECTION 3: Ulam of the Day */}
        <section className="ulam-section">
          <h2 className="section-title">Ulam of the Day</h2>
          <div className="featured-card">
            <div className="featured-info">
              <p className="featured-name">Sizzling Hotdog</p>
              <p className="featured-time">⏱ 8 minutes</p>
              <p className="featured-likes">10 Likes</p>
            </div>
            <img src="/sizzling-hotdog.jpg" alt="Sizzling Hotdog" className="featured-img" />
          </div>
        </section>

        {/* SECTION 4: Menu */}
        <section className="home-menu">

          <div className="menu-item">
            <div className="menu-icon">⭐</div>
            <div className="menu-text">
              <p className="menu-title">Trending Ulam</p>
              <p className="menu-subtitle">Most cooked this week</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>

          <div className="menu-item">
            <div className="menu-icon">🧺</div>
            <div className="menu-text">
              <p className="menu-title">Your Favorites</p>
              <p className="menu-subtitle">Saved recipes for later</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>

        </section>

      </WhiteCard>

    </div>
  );
}