import './Paragraph.css';

function Paragraph({className='', size='normal', children }) {
  const validSizes = ['normal', 'small', 'large'];
  size = validSizes.includes(size) ? size : 'normal';

  return (
    <p className={`paragraph ${size} ${className}`}>{children}</p>
  );
}

export default Paragraph;