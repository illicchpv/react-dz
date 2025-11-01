import s from './Input.module.css';
import cn from 'classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  className?: string
  icon?: 'search';
}

function Input({ ref, className, icon, ...props }: InputProps) {
  let iconSvg = null;
  switch (icon) {
    case 'search': {
      iconSvg = (<svg className={s.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L20 20" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>);
      break;
    }
  }

  return (
    <div className={s.input__block}>
      {iconSvg}

      <input ref={ref} {...props} className={cn(s.Input, className)} />
    </div>
  );
}

export default Input;