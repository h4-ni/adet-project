import './settings.css';

interface Props {
  onBack: () => void;
}

const settingsItems = [
  { icon: 'person', label: 'Edit Profile' },
  { icon: 'notifications', label: 'Notifications' },
  { icon: 'lock', label: 'Change Password' },
  { icon: 'language', label: 'Language' },
  { icon: 'help', label: 'Help & Support' },
  { icon: 'info', label: 'About' },
];

export default function Settings({ onBack }: Props) {
  return (
    <div className="settings-screen">

      {/* Back button */}
      <button className="settings-back" onClick={onBack}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      {/* SECTION 1: Profile header */}
      <div className="settings-top">
        <img src="/pink-hair.png" alt="avatar" className="settings-avatar" />
        <h2 className="settings-name">Joshua</h2>
        <p className="settings-email">joshua@email.com</p>
      </div>

      {/* SECTION 2: Settings list */}
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

        <button className="settings-logout-btn">
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>

      </div>

    </div>
  );
}