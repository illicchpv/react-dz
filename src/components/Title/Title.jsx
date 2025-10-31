import s from './Title.module.css';
// import cn from 'classnames';

function Title({ children, as = 'h1' }) {
  const validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = validTags.includes(as) ? as : 'h1';

  return (
    <Tag className={s.title}>{children}</Tag>
  );
}

export default Title;