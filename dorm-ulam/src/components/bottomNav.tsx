// components/BottomNav.tsx
import './bottomNav.css';

type Tab = 'home' | 'cook' | 'discover' | 'saved';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function BottomNav({ active, onChange }: Props) {
  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'home', label: 'HOME', icon: 'home' },
    { id: 'cook', label: 'COOK', icon: 'restaurant' },
    { id: 'discover', label: 'DISCOVER', icon: 'explore' },
    { id: 'saved', label: 'SAVED', icon: 'favorite' },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`nav-item ${active === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          <span className="material-symbols-outlined">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}