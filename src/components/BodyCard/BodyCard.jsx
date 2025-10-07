import './BodyCard.css';

function BodyCard({ children='BodyCard' }) {
  return (
    <div className="body-card">{children}</div>
  );
}

export default BodyCard;