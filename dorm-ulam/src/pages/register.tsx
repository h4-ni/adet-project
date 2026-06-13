import { useState } from 'react';
import './register.css';
import WhiteCard from '../components/whiteCard';

interface Props {
  onRegister: (user: any, token: string) => void;
  onBack: () => void;
}

export default function Register({ onRegister, onBack }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? 'Registration failed.');
        setLoading(false);
        return;
      }

      onRegister(data.user, data.token);

    } catch (err) {
      setError('Cannot connect to server.');
      setLoading(false);
    }
  }

  return (
    <div className="register-screen">

      <div className="register-top">
        <img src="/pink-hair.png" alt="character" className="register-character" />
        <h1 className="register-title">Join NagkaonKaNaLab</h1>
        <p className="register-subtitle">Tara na, Lab!</p>
      </div>

      <WhiteCard>

        {error && (
          <p className="register-error">{error}</p>
        )}

        <div className="register-field">
          <label className="register-label">Name</label>
          <div className="register-input-row">
            <span className="material-symbols-outlined register-field-icon">person</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="register-input"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="register-field">
          <label className="register-label">Email</label>
          <div className="register-input-row">
            <span className="material-symbols-outlined register-field-icon">mail</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="register-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="register-field">
          <label className="register-label">Password</label>
          <div className="register-input-row">
            <span className="material-symbols-outlined register-field-icon">lock</span>
            <input
              type="password"
              placeholder="At least 6 characters"
              className="register-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleRegister()}
            />
          </div>
        </div>

        <button
          className="register-btn"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>

        <p className="register-footer">
          Already have an account?{' '}
          <span className="register-link" onClick={onBack}>Log in</span>
        </p>

      </WhiteCard>

    </div>
  );
}