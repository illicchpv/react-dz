import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
import './SearchSection.css';
function SearchSection({children}) {
  return (
    <section className="search-section">
      <div className="search-section__content">
        <Title as="h1" >Поиск</Title>
        <Paragraph className='margins' >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        {children}
      </div>
    </section>
  );
}

export default SearchSection;