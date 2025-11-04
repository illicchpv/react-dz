import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './MainLayout.module.css';
import cn from 'classnames';
import HeaderSection from '../sections/HeaderSection/HeaderSection';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import Counter from '../components/Counter/Counter';
import { useContext, useRef } from 'react';
import Button from '../components/Button/Button';
import { UserContext } from '../context/user.context';
import { useLocalStorage } from '../hooks/use-localstorage.hook';
import NavigationLink from '../components/NavigationLink/NavigationLink';

function MainLayout() {
  const loginNameInputRef = useRef<HTMLInputElement>(null);
  const { currentUserName, setCurrentUserName } = useContext(UserContext);
  const [profiles, setProfiles] = useLocalStorage('user-profiles', []);
  const navigate = useNavigate();
  const isLoginActive = useLocation().pathname.toLocaleLowerCase() === '/login';

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

  return (
    <div className={cn(styles.mainLayout)}>
      <HeaderSection>
        <Logo />

        <Navigation>
          <NavigationLink to="/">Поиск фильмов</NavigationLink>
          <NavigationLink to="/favorites">
            Мои фильмы
            <Counter val={2} />
          </NavigationLink>

          {currentUserName && (<NavigationLink to="#!">
            <span>{currentUserName}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="6" r="4" stroke="#9BA5B7" strokeWidth="1.5" /> <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9BA5B7" strokeWidth="1.5" /> </svg>
          </NavigationLink>)}
        </Navigation>


        {!currentUserName
          ? (
            <Button
              isActive={isLoginActive} isTransparent style={{ marginLeft: 'auto' }}
              onClick={() => navigate('/login')}
            > Войти <img src="./login.svg" alt="login" /></Button>
          )

          : (
            <Button isTransparent style={{ marginLeft: 'auto' }}
              onClick={logoutButtonClickHandler}
            > Выйти</Button>
          )
        }
      </HeaderSection>

      <Outlet />
    </div>
  );
}
export default MainLayout;