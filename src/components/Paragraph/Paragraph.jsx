import './Paragraph.css';

function Paragraph({ children, size='normal' }) {
  const validSizes = ['normal', 'small', 'large'];
  size = validSizes.includes(size) ? size : 'normal';

  return (
    <p className={`paragraph ${size}`}>{children}</p>
  );
}

export default Paragraph;