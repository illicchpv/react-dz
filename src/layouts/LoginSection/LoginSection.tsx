import s from './LoginSection.module.css';
import Title from '../../components/Title/Title';
// import cn from 'classnames';

export interface ILoginSectionProps {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function LoginSection({children, onSubmit}: ILoginSectionProps) {

  return (
    <section className={s.loginSection}>
      <form className={s.loginSection__content} onSubmit={onSubmit}>
        <Title as="h1" >Вход</Title>
        {children}
      </form>
    </section>
  );
}

export default LoginSection;