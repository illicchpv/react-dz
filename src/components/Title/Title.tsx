import s from './Title.module.css';
// import cn from 'classnames';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ITitleProps {
  children: React.ReactNode;
  as?: HeadingTag;
}

function Title({ children, as = 'h1' }: ITitleProps) {
  const Tag = as;

  return (
    <Tag className={s.title}>{children}</Tag>
  );
}

export default Title;