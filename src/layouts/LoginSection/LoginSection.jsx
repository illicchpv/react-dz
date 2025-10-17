import s from './LoginSection.module.css';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';
// import cn from 'classnames';

function LoginSection({children}) {
  console.log('children: ', children);

  return (
    <section className={s.loginSection}>
      <div className={s.loginSection__content}>
        <Title as="h1" >Вход</Title>
        {children}
      </div>
    </section>
  );
}

export default LoginSection;