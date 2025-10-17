import s from './NavLink.module.css';
// import cn from 'classnames';

function NavLink({ to, children }) {
  return (
    <li className={s.navLink}><a href={to}>{children}</a></li>
  );
}

export default NavLink;