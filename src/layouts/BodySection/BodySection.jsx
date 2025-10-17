import s from './BodySection.module.css';
// import cn from 'classnames';

function BodySection({children}) {
  return (
    <main className={s.bodySection}>
      <section className={s.bodySection__content}>
        {children}
      </section>
    </main>
  );
}

export default BodySection;