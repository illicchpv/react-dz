import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';
// import cn from 'classnames';

function Logo() {

  return (
    <NavLink className={s.logo} to="/">
      <img width={40} height={40} src="./logo.svg" alt="logo" />
    </NavLink>
  );
}

export default Logo;