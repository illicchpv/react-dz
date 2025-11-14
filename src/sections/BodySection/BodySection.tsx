import React from 'react';
import s from './BodySection.module.css';
import cn from 'classnames';

export interface IBodySection {
  className?: string
  children: React.ReactNode;
  title?: string
}

function BodySection({children, className, title}: IBodySection) {
  return (
    <main className={cn(s.bodySection, className)} title={title}>
      <section className={s.bodySection__content}>
        {children}
      </section>
    </main>
  );
}

export default BodySection;