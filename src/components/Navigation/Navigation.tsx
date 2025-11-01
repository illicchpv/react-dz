import s from './Navigation.module.css';
// import cn from 'classnames';

export interface INavigationProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

function Navigation({children}: INavigationProps) {
  return (
    <nav className={s.navigation}>
      <ul>
        {children}
      </ul>
    </nav>
  );
}

export default Navigation;