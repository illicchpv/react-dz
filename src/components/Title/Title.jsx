import './Title.css';

function Title({ children, as = 'h1' }) {
  const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = validTags.includes(as) ? as : 'h1';

  return (
    <Tag className="title">{children}</Tag>
  );
}

export default Title;