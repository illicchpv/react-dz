import s from './Title.module.css';
import cn from 'classnames';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ITitleProps {
  className?: string;
  children: React.ReactNode;
  as?: HeadingTag;
}

function Title({ className, children, as = 'h1' }: ITitleProps) {
  const Tag = as;

  return (
    <Tag className={cn(s.title, className)}>{children}</Tag>
  );
}

export default Title;