import './home.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onSettings: () => void;
  onTipidMeals: () => void;  /* ← Updated prop for the new budget button */
  onQuickFixes: () => void;  /* ← Updated prop for the new fast meals button */
  user: any;
}

export default function Home({ onSettings, onTipidMeals, onQuickFixes, user }: Props) {
  return (
    <div className="home-screen">

      {/* SECTION 1: Header */}
      <header className="home-header">
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'U'} 
        </div>
        <div className="search">
          <span className="search-icon material-symbols-outlined">search</span>
          <input className="search-input" type="search" placeholder="Search" />
        </div>
      </header>

      {/* SECTION 2: Hero */}
      <section className="home-hero">
        <img src="/pink-hair.png" alt="character" className="hero-image" />
      </section>

      <WhiteCard>

        <h1 className="hero-name">Hi, Lab {user?.name?.split(' ')[0] ?? 'User'} ko</h1>
        <p className="hero-subtitle">Luto na tayo!</p>

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

          <div className="menu-item" onClick={onTipidMeals}>  {/* ← Now triggers Tipid Meals */}
            <div className="menu-icon">🐷</div> {/* Piggy bank for budget! */}
            <div className="menu-text">
              <p className="menu-title">Tipid Meals</p>
              <p className="menu-subtitle">Petsa de Peligro Picks</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>

          <div className="menu-item" onClick={onQuickFixes}>  {/* ← Now triggers Quick Fixes */}
            <div className="menu-icon">⚡</div> {/* Lightning bolt for speed! */}
            <div className="menu-text">
              <p className="menu-title">Quick Fixes</p>
              <p className="menu-subtitle">Under 15 minutes</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>

        </section>

      </WhiteCard>

    </div>
  );
}