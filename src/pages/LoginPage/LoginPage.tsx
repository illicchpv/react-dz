import { useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LoginSection from '../../sections/LoginSection/LoginSection';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { profilesActions } from '../../store/profiles.slice';

function LoginPage() {
  const loginNameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (loginNameInputRef.current) {
      loginNameInputRef.current.focus();
      loginNameInputRef.current.value = 'Антон';
    }
  }, []);

  const doLoginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const name = loginNameInputRef.current?.value;
    if (!name) return
    dispatch(profilesActions.loginAction(name));
    navigate('/');
  };

  return (
    <>
      <LoginSection onSubmit={doLoginSubmitHandler}>
        <Input ref={loginNameInputRef} type="text" name="name" placeholder="Ваше имя" required />

        <Button>Войти в профиль</Button>
      </LoginSection>
    </>
  );
}
export default LoginPage;