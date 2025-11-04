import s from './Button.module.css';
import cn from 'classnames';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isTransparent?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({isTransparent, isActive, children, onClick, ref}: IButtonProps) {

  return (
    <button ref={ref}
      className={cn(s.button, {[s.transparent]: isTransparent, [s.active]: isActive})}
      onClick={onClick}
    >{children}</button>
  );
}

export default Button;