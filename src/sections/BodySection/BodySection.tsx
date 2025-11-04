import React from 'react';
import s from './BodySection.module.css';
import cn from 'classnames';

export interface IBodySection {
  className?: string
  children: React.ReactNode;
}

function BodySection({children, className}: IBodySection) {
  return (
    <main className={cn(s.bodySection, className)}>
      <section className={s.bodySection__content}>
        {children}
      </section>
    </main>
  );
}

export default BodySection;