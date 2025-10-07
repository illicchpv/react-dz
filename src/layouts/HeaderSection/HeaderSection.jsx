import './HeaderSection.css';
function HeaderSection({ children }) {
  return (
    <header className="header-section">{children}</header>
  );
}

export default HeaderSection;