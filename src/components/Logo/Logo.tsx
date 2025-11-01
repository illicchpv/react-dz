import s from './Logo.module.css';
// import cn from 'classnames';

function Logo() {

  return (
    <a className={s.logo} href="#!">
      <img width={40} height={40} src="./logo.svg" alt="logo" />
    </a>
  );
}

export default Logo;