import s from './SearchSection.module.css';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
// import cn from 'classnames';

function SearchSection({children}) {
  return (
    <section className={s.searchSection}>
      <div className={s.searchSection__content}>
        <Title as="h1" >Поиск</Title>
        <Paragraph className={s.margins} >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        {children}
      </div>
    </section>
  );
}

export default SearchSection;