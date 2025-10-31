import s from './LoginSection.module.css';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
// import cn from 'classnames';

function LoginSection({children, onSubmit}) {

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