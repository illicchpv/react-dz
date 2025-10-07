import './Navigation.css';

function Navigation({children}) {
  return (
    <nav className="navigation">
      <ul>
        {children}
      </ul>
    </nav>
  );
}

export default Navigation;