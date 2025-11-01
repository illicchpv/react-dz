import s from './Paragraph.module.css';
import cn from 'classnames';

export interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  size?: 'normal' | 'small' | 'large';
  children?: React.ReactNode;
}

function Paragraph({className='', size='normal', children }: IParagraphProps) {

  return (
    <p className={cn(s.paragraph, size, className)}>{children}</p>
  );
}

export default Paragraph;