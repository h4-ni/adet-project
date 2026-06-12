import './whiteCard.css';

interface Props {
  children: React.ReactNode;  // accepts anything inside it
}

export default function WhiteCard({ children }: Props) {
  return (
    <div className="white-card">
      {children}
    </div>
  );
}