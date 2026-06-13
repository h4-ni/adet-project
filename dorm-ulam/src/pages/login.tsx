import { useState } from 'react';
import './login.css';
import WhiteCard from '../components/whiteCard';
import API_URL from '../config';

interface Props {
  onLogin: (user: any, token: string) => void;
  onRegister: () => void;
}

export default function Login({ onLogin, onRegister }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError('Wrong email or password.');
        setLoading(false);
        return;
      }

      onLogin(data.user, data.token);  // pass user + token to App.tsx

    } catch (err) {
      setError('Cannot connect to server.');
      setLoading(false);
    }
  }

  return (
    <div className="login-screen">

      <div className="login-top">
        <img src="/pink-hair.png" alt="character" className="login-character" />
        <h1 className="login-title">NagkaonKaNaLab</h1>
        <p className="login-subtitle">'wag ka papagutom, okie?</p>
      </div>

      <WhiteCard>

        {error && (
          <p className="login-error">{error}</p>
        )}

        <div className="login-field">
          <label className="login-label">Email</label>
          <div className="login-input-row">
            <span className="material-symbols-outlined login-field-icon">mail</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="login-field">
          <label className="login-label">Password</label>
          <div className="login-input-row">
            <span className="material-symbols-outlined login-field-icon">lock</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
            />
          </div>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="login-footer">
          Don't have an account?{' '}
          <span className="login-link" onClick={onRegister}>
            Sign up
          </span>
        </p>

      </WhiteCard>

    </div>
  );
}