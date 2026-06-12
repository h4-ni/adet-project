import './login.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onLogin: () => void;
}

export default function Login({ onLogin }: Props) {
  return (
    <div className="login-screen">

      {/* Only character in the top peach section */}
      <div className="login-top">
        <img src="/pink-hair.png" alt="character" className="login-character" />
      </div>

      <WhiteCard>

        {/* Title moved inside the white card */}
        <h1 className="login-title">Dorm Ulam</h1>
        <p className="login-subtitle">Luto na, G na?</p>

        <div className="login-field">
          <label className="login-label">Email</label>
          <div className="login-input-row">
            <span className="material-symbols-outlined login-field-icon">mail</span>
            <input type="email" placeholder="Enter your email" className="login-input" />
          </div>
        </div>

        <div className="login-field">
          <label className="login-label">Password</label>
          <div className="login-input-row">
            <span className="material-symbols-outlined login-field-icon">lock</span>
            <input type="password" placeholder="Enter your password" className="login-input" />
          </div>
        </div>

        <button className="login-btn" onClick={onLogin}>Log In</button>

        <p className="login-footer">
          Don't have an account?{' '}
          <span className="login-link">Sign up</span>
        </p>

      </WhiteCard>

    </div>
  );
}