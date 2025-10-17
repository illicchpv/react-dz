import s from './HeaderSection.module.css';
// import cn from 'classnames';

function HeaderSection({ children }) {
  return (
    <header className={s.headerSection}>{children}</header>
  );
}

export default HeaderSection;