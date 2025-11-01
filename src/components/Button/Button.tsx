import s from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isTransparent?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({isTransparent, children, onClick, ref}: ButtonProps) {

  return (
    <button ref={ref}
      className={cn(s.button, {[s.transparent]: isTransparent})}
      onClick={onClick}
    >{children}</button>
  );
}

export default Button;