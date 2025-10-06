import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

function App() {

  return (
    <>
      <div>
        <Button >Искать</Button>
      </div>
      <div>
        <Paragraph size="large" >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        <Paragraph >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
        <Paragraph size="small" >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      </div>
      <div>
        <Title as="h1" >h1 Поиск</Title>
        <Title as="h2" >h2 Поиск</Title>
      </div>
    </>
  );
}

export default App;
