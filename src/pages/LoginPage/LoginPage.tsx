import { useContext, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LoginSection from '../../sections/LoginSection/LoginSection';
import { UserContext } from '../../context/user.context';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const loginNameInputRef = useRef<HTMLInputElement>(null);
  const { setCurrentUserName } = useContext(UserContext);
  const [profiles, setProfiles] = useLocalStorage('user-profiles', []);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginNameInputRef.current) {
      loginNameInputRef.current.focus();
      loginNameInputRef.current.value = 'Антон';
    }
  }, []);

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