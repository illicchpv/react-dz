import { NavLink } from 'react-router-dom';
import s from './NavigationLink.module.css';
import cn from 'classnames';

export interface INavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: () => void
}

function NavigationLink({ to, children, onClick }: INavLinkProps) {

  return (
    <li className={s.navLink}>
      <NavLink className={({ isActive }) => cn({ [s.active]: isActive })} to={to} onClick={onClick}>{children}</NavLink>
    </li>
  );
}

export default NavigationLink;