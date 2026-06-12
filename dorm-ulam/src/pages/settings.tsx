import './settings.css';

interface Props {
  onBack: () => void;
  onLogout: () => void;  // ← add this
  user: any;             // ← add this too for real name/email
}

const settingsItems = [
  { icon: 'person', label: 'Edit Profile' },
  { icon: 'lock', label: 'Change Password' },
  { icon: 'language', label: 'Language' },
  { icon: 'help', label: 'Help & Support' },
  { icon: 'info', label: 'About' },
];

export default function Settings({ onBack, onLogout, user }: Props) {
  return (
    <div className="settings-screen">

      <button className="settings-back" onClick={onBack}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="settings-top">
        <div className="settings-avatar">
          {user?.name?.charAt(0).toUpperCase() ?? 'J'}
        </div>
        <h2 className="settings-name">{user?.name ?? 'Joshua'}</h2>
        <p className="settings-email">{user?.email ?? 'joshua@email.com'}</p>
      </div>

      <div className="settings-card">

        <div className="settings-list">
          {settingsItems.map(item => (
            <div key={item.label} className="settings-item">
              <div className="settings-item-left">
                <div className="settings-icon-box">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="settings-item-label">{item.label}</span>
              </div>
              <span className="material-symbols-outlined settings-chevron">
                chevron_right
              </span>
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