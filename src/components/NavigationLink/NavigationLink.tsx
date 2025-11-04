import { NavLink } from 'react-router-dom';
import s from './NavigationLink.module.css';
// import cn from 'classnames';

export interface INavLinkProps {
  to: string
  children: React.ReactNode
}

function NavigationLink({ to, children }: INavLinkProps) {
    return (
      <li className={s.navLink}><NavLink to={to}>{children}</NavLink></li>
    );
  }

export default NavigationLink;