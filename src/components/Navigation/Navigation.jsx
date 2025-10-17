import s from './Navigation.module.css';
// import cn from 'classnames';

function Navigation({children}) {
  return (
    <nav className={s.navigation}>
      <ul>
        {children}
      </ul>
    </nav>
  );
}

export default Navigation;