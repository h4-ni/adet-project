import './home.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onSettings: () => void;
  onQuickFixes: () => void;
  user: any;
}

export default function Home({ onSettings, onQuickFixes, user }: Props) {
  return (
    <div className="home-screen">

      <header className="home-header">
        {/* Avatar pushed to the top right! */}
        <div className="avatar" onClick={onSettings}>
          {user?.name?.charAt(0).toUpperCase() ?? 'U'} 
        </div>
      </header>

      <section className="home-hero">
        <img src="/pink-hair.png" alt="character" className="hero-image" />
      </section>

      <WhiteCard>
        <h1 className="hero-name">Hi, Lab {user?.name?.split(' ')[0] ?? 'User'}!</h1>
        <p className="hero-subtitle">Luto na tayo!</p>

        <section className="ulam-section">
          <h2 className="section-title">Ulam of the Day</h2>
          <div className="featured-card">
            <div className="featured-info">
              <p className="featured-name">Sizzling Hotdog</p>
              <p className="featured-time">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                8 minutes
              </p>
              <p className="featured-likes">10 Likes</p>
            </div>
            <img src="/sizzling-hotdog.jpg" alt="Sizzling Hotdog" className="featured-img" />
          </div>
        </section>

        <section className="home-menu">
          <div className="menu-item" onClick={onQuickFixes}>
            <div className="menu-icon">⚡</div> 
            <div className="menu-text">
              <p className="menu-title">Abot Kamay Ang Sarap</p>
              <p className="menu-subtitle">Ready in 15 mins or less!</p>
            </div>
            <span className="menu-arrow material-symbols-outlined">arrow_forward</span>
          </div>
        </section>

      </WhiteCard>

    </div>
  );
}