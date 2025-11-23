import './MainLayout.css';
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderSection from '../sections/HeaderSection/HeaderSection';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import Counter from '../components/Counter/Counter';
import NavigationLink from '../components/NavigationLink/NavigationLink';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, AppRootState } from '../store/store';
import { currentSelectedProfile, profilesActions } from '../store/profiles.slice';

function MainLayout() {
  const dispatch = useDispatch<AppDispatch>();

  const currentUserName = useSelector(currentSelectedProfile)?.name;

  const selectedCount = useSelector((state: AppRootState) => state.selected.selectedCards).filter(card => card.userName === currentUserName)?.length || 0;

  const navigate = useNavigate();

  const logoutButtonClickHandler = () => {
    dispatch(profilesActions.logoutAction());
    navigate('/')
  };

  return (
    <>
      <HeaderSection>
        <Logo />

        <Navigation>
          <NavigationLink to="/">Поиск фильмов</NavigationLink>

          <NavigationLink to="/favorites">Мои фильмы <Counter val={selectedCount} /></NavigationLink>

          {currentUserName && <NavigationLink to="#!" isUseActive={false}>
            <span>{currentUserName}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="6" r="4" stroke="#9BA5B7" strokeWidth="1.5" /> <ellipse cx="12" cy="17" rx="7" ry="4" stroke="#9BA5B7" strokeWidth="1.5" /> </svg>
          </NavigationLink>}

          {!currentUserName && <NavigationLink to="/login">
            Войти <img src="/login.svg" alt="login" />
          </NavigationLink>}

          {!!currentUserName && <NavigationLink to="/" isUseActive={false} onClick={logoutButtonClickHandler}>
            Выйти
          </NavigationLink>}
        </Navigation>
      </HeaderSection>

      <Outlet />
    </>
  );
}
export default MainLayout;