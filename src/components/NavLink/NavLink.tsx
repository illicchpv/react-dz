import s from './NavLink.module.css';
// import cn from 'classnames';

export interface INavLinkProps {
  to: string
  children: React.ReactNode
}

function NavLink({ to, children }: INavLinkProps) {
    return (
      <li className={s.navLink}><a href={to}>{children}</a></li>
    );
  }

export default NavLink;