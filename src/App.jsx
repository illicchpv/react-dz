import './App.css';
import Button from './components/Button/Button';
import BodyCard from './components/BodyCard/BodyCard';
import Counter from './components/Counter/Counter';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import NavLink from './components/NavLink/NavLink';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import HeaderSection from './layouts/HeaderSection/HeaderSection';

function App() {

  const loginButtonClickHandler = (e) => {
    console.log('loginButtonClickHandler e: ', e);
  };

  return (
    <>
      <HeaderSection>
        <Logo />

        <Navigation>
          <NavLink to="#!">Поиск фильмов</NavLink>
          <NavLink to="#!">
            Мои фильмы
            <Counter val={2} />
          </NavLink>
        </Navigation>

        <Button className={'transparent'} style={{marginLeft: 'auto'}} onClick={loginButtonClickHandler}>
          Войти <img src="./login.svg" alt="login" />
        </Button>
      </HeaderSection>

      <hr />
      <Search icon placeholder="Введите название" />
      <Search icon={false} placeholder="Введите название фильма" />
      <hr />
      <BodyCard />
      <hr />
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
