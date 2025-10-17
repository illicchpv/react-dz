import s from './App.module.css';
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
import SearchSection from './layouts/SearchSection/SearchSection';
import BodySection from './layouts/BodySection/BodySection';
import {CARDS} from './constant.js';
import {markSelectedCards} from './utils.js';
import cn from 'classnames';
import {useRef, useState} from 'react';
import LoginSection from './layouts/LoginSection/LoginSection.jsx';
import Input from './components/Input/Input.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';

// const isDev = import.meta.env.DEV;
const isDev = false;


function App() {
  const logInOutHeaderRef = useRef();
  const searchInputRef = useRef();
  const searchButtonRef = useRef();
  const loginNameInputRef = useRef();

  const [currentUserName, setCurrentUserName] = useState(false);
  const [profiles, setProfiles] = useLocalStorage('profiles', []);

  const loginButtonClickHandler = (e) => {
    console.log('loginButtonClickHandler e: ', e);
    loginNameInputRef.current.value = 'Антон';
    loginNameInputRef.current?.focus();
  };

  const doLoginSubmitHandler = (e) => {
    e.preventDefault();
    console.log('doLoginSubmitHandler e: ', e);
    console.log(`login name:[${loginNameInputRef.current?.value}]`);

    const name = loginNameInputRef.current?.value;
    setCurrentUserName(name);
    const newProfile = {name, isLogined: true};
    const p = profiles.find(profile => profile.name === name);
    if (p) {
      p.isLogined = true;
      setProfiles([...profiles]);
    } else {
      setProfiles([...profiles, newProfile]);
    }
    searchInputRef.current?.focus();
  };

  const logoutButtonClickHandler = (e) => {
    console.log('logoutButtonClickHandler e: ', e);
    setCurrentUserName(false);
    const p = profiles.find(profile => profile.name === currentUserName);
    if (p) {
      p.isLogined = false;
      setProfiles([...profiles]);
      loginNameInputRef.current.value = '';
    }
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

          {currentUserName && (<NavLink to="#!">
            <span>{currentUserName}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="4" stroke="#9BA5B7" strokeWidth="1.5" />
              <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9BA5B7" strokeWidth="1.5" />
            </svg>
          </NavLink>)}
        </Navigation>

        {!currentUserName
          ? (<Button isTransparent style={{marginLeft: 'auto'}}
            onClick={loginButtonClickHandler}
            ref={logInOutHeaderRef}
          > Войти <img src="./login.svg" alt="login" /></Button>)
          : (<Button isTransparent style={{marginLeft: 'auto'}}
            onClick={logoutButtonClickHandler}
          > Выйти</Button>)
        }
      </HeaderSection>

      {isDev &&
        <div style={{display: 'flex', gap: '10px'}}>
          <button
            onClick={() => {
              logInOutHeaderRef.current?.focus();
            }}
          >test logInOut</button>
          <button
            onClick={() => {
              searchInputRef.current?.focus();
            }}
          >test searchInput</button>
          <button
            onClick={() => {
              searchButtonRef.current?.focus();
            }}
          >test searchButton</button>
        </div>
      }

      <LoginSection onSubmit={doLoginSubmitHandler}>
        <Input ref={loginNameInputRef} type="text" placeholder="Ваше имя" required />

        <Button>Войти в профиль</Button>
      </LoginSection>

      <SearchSection>
        <Search icon placeholder="Введите название" inputRef={searchInputRef} buttonRef={searchButtonRef} />
      </SearchSection>

      <BodySection>
        {markSelectedCards(CARDS).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}
      </BodySection>
    </>
  );
}

export default App;
