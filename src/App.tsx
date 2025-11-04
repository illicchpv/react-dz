import './App.css';
import { useContext, useRef } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import NavLink from './components/NavigationLink/NavigationLink';
import { CARDS } from './constant';
import BodyCard from './components/BodyCard/BodyCard';
import Search from './components/Search/Search';
import HeaderSection from './sections/HeaderSection/HeaderSection';
import Counter from './components/Counter/Counter';
import { UserContext } from './context/user.context';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import LoginSection from './sections/LoginSection/LoginSection';
import SearchSection from './sections/SearchSection/SearchSection';
import BodySection from './sections/BodySection/BodySection';
import { markSelectedCards } from './utils';

function App() {
  const logInOutHeaderRef = useRef<HTMLButtonElement>(null);
  const loginNameInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const { currentUserName, setCurrentUserName } = useContext(UserContext);
  const [profiles, setProfiles] = useLocalStorage('user-profiles', []);

  const headerLoginButtonClickHandler = () => {
    if (loginNameInputRef.current) loginNameInputRef.current.value = 'Антон';
    loginNameInputRef.current?.focus();
  };


  const logoutButtonClickHandler = () => {
    setCurrentUserName?.('');
    const p = profiles.find(profile => profile.name === currentUserName);
    if (p) {
      p.isLogined = false;
      setProfiles([...profiles]);
      if (loginNameInputRef.current) {
        loginNameInputRef.current.value = '';
      }
    }
  };

  const doLoginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const name = loginNameInputRef.current?.value;
    if (!name || !setCurrentUserName) return
    setCurrentUserName(name);

    const p = profiles.find(profile => profile.name === name);
    if (p) {
      profiles.forEach(profile => profile.isLogined = false);
      p.isLogined = true;
      setProfiles([...profiles]);
    } else {
      const newProfile = { name, isLogined: true };
      setProfiles([...profiles, newProfile]);
    }
    if (loginNameInputRef.current) loginNameInputRef.current.value = '';
    if (searchInputRef.current) searchInputRef.current.focus();
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

        {currentUserName && (<NavLink to="#!">
          <span>{currentUserName}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" stroke="#9BA5B7" strokeWidth="1.5" />
            <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9BA5B7" strokeWidth="1.5" />
          </svg>
        </NavLink>)}

        {!currentUserName
          ? (
            <Button isTransparent style={{ marginLeft: 'auto' }}
              onClick={headerLoginButtonClickHandler}
              ref={logInOutHeaderRef}
            > Войти <img src="./login.svg" alt="login" /></Button>
          )
          : (
            <Button isTransparent style={{ marginLeft: 'auto' }}
              onClick={logoutButtonClickHandler}
            > Выйти</Button>
          )
        }
      </HeaderSection>

      {!currentUserName &&
        <LoginSection onSubmit={doLoginSubmitHandler}>
          <Input ref={loginNameInputRef} type="text" name="name" placeholder="Ваше имя" required />

          <Button>Войти в профиль</Button>
        </LoginSection>
      }

      <SearchSection>
        <Search icon placeholder="Введите название" inputRef={searchInputRef} buttonRef={searchButtonRef} />
      </SearchSection>

      <BodySection>
        {markSelectedCards(CARDS).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}
      </BodySection>
    </>
  )
}

export default App;
