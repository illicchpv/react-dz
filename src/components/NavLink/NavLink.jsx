import './NavLink.css';

function NavLink({ to, children }) {
  return (
    <li className='nav-link'><a href={to}>{children}</a></li>
  );
}

export default NavLink;