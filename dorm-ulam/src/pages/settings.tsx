import { useState } from 'react';
import './settings.css';
import API_URL from '../config';

interface Props {
  onBack: () => void;
  onLogout: () => void;
  user: any;
  token: string;
  onUpdateUser: (user: any) => void;
}

const settingsItems = [
  { id: 'profile', icon: 'person', label: 'Edit Profile' },
  { id: 'password', icon: 'lock', label: 'Change Password' },
  { id: 'language', icon: 'language', label: 'Language' },
  { id: 'help', icon: 'help', label: 'Help & Support' },
  { id: 'about', icon: 'info', label: 'About' },
];

export default function Settings({ onBack, onLogout, user, token, onUpdateUser }: Props) {
  const [activeView, setActiveView] = useState<string | null>(null);
  
  // Profile State
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  
  // Password State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  // UI State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  async function handleProfileUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Assuming a standard Laravel API endpoint for profile updates
      const response = await fetch(`${API_URL}/api/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({ name, email })
      });

      if (response.ok) {
        const data = await response.json();
        onUpdateUser(data.user || { ...user, name, email });
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to update profile.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }

  async function handlePasswordUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Assuming a standard Laravel API endpoint for password changes
      const response = await fetch(`${API_URL}/api/user/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({ 
          current_password: currentPassword, 
          new_password: newPassword 
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Password changed successfully!' });
        setCurrentPassword('');
        setNewPassword('');
      } else {
        setMessage({ type: 'error', text: 'Incorrect current password.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }

  if (activeView) {
    const currentItem = settingsItems.find(item => item.id === activeView);

    return (
      <div className="settings-screen">
        <header className="settings-sub-header">
          <button onClick={() => { setActiveView(null); setMessage({type:'', text:''}); }} className="settings-back-btn">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="settings-sub-title">{currentItem?.label}</h2>
        </header>

        <div className="settings-card form-card">
          {message.text && (
            <div className={`settings-alert ${message.type}`}>
              {message.text}
            </div>
          )}

          {activeView === 'profile' && (
            <form onSubmit={handleProfileUpdate}>
              <p className="settings-desc">Update your personal details here.</p>
              <label className="settings-label">Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} className="settings-input" required />
              
              <label className="settings-label">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="settings-input" required />
              
              <button type="submit" className="settings-save-btn" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          )}

          {activeView === 'password' && (
            <form onSubmit={handlePasswordUpdate}>
              <p className="settings-desc">Keep your account secure.</p>
              <label className="settings-label">Current Password</label>
              <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="settings-input" required />
              
              <label className="settings-label">New Password</label>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="settings-input" required />
              
              <button type="submit" className="settings-save-btn" disabled={loading}>
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          )}

          {['language', 'help', 'about'].includes(activeView) && (
            <div className="settings-placeholder">
              <span className="material-symbols-outlined placeholder-icon">{currentItem?.icon}</span>
              <h3>{currentItem?.label}</h3>
              <p>This feature will be available in version 2.0!</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="settings-screen">
      <button className="settings-back" onClick={onBack}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="settings-top">
        <div className="settings-avatar">
          {user?.name?.charAt(0).toUpperCase() ?? 'J'}
        </div>
        <h2 className="settings-name">{user?.name ?? 'Lab User'}</h2>
        <p className="settings-email">{user?.email ?? 'dorm@ulam.com'}</p>
      </div>

      <div className="settings-card">
        <div className="settings-list">
          {settingsItems.map(item => (
            <div key={item.id} className="settings-item" onClick={() => setActiveView(item.id)}>
              <div className="settings-item-left">
                <div className="settings-icon-box">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="settings-item-label">{item.label}</span>
              </div>
              <span className="material-symbols-outlined settings-chevron">chevron_right</span>
            </div>
          ))}
        </div>

        <button className="settings-logout-btn" onClick={onLogout}>
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>
      </div>
    </div>
  );
}