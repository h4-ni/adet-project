import { useState } from 'react';
import './login.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onLogin: (user: any, token: string) => void;
}

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        <h1 className="login-title">NagkaonKaNaLabLab?</h1>
        <p className="login-subtitle">Luto tayo, G?</p>
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
          <span className="login-link">Sign up</span>
        </p>

      </WhiteCard>

    </div>
  );
}