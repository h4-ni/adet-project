import './login.css';

interface Props {
  onLogin: () => void;
}

export default function Login({ onLogin }: Props) {
  return (
    <div className="login-screen">

      <div className="login-top">
        <img src="/pink-hair.png" alt="character" className="login-character" />
        <h1 className="login-title">Dorm Ulam</h1>
        <p className="login-subtitle">Luto na, G na?</p>
      </div>

      <div className="login-card">

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

        {/* clicking this goes to the app for now */}
        <button className="login-btn" onClick={onLogin}>Log In</button>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button className="login-google-btn" onClick={onLogin}>
          Continue with Google
        </button>

        <p className="login-footer">
          Don't have an account?{' '}
          <span className="login-link">Sign up</span>
        </p>

      </div>

    </div>
  );
}