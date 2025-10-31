import s from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({className='', size='normal', children }) {
  const validSizes = ['normal', 'small', 'large'];
  size = validSizes.includes(size) ? s[size] : s['normal'];

  return (
    <p className={cn(s.paragraph, size, className)}>{children}</p>
  );
}

export default Paragraph;