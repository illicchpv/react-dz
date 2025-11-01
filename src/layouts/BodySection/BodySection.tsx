import React from 'react';
import s from './BodySection.module.css';
// import cn from 'classnames';

export interface IBodySection {
  children: React.ReactNode;
}

function BodySection({children}: IBodySection) {
  return (
    <main className={s.bodySection}>
      <section className={s.bodySection__content}>
        {children}
      </section>
    </main>
  );
}

export default BodySection;