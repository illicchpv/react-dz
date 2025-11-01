import s from './HeaderSection.module.css';
// import cn from 'classnames';

export interface IHeaderSection {
  children?: React.ReactNode
}

function HeaderSection({children}: IHeaderSection) {
  return (
    <header className={s.headerSection}>
      {children}
    </header>
  );
}

export default HeaderSection;