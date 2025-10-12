import s from './Button.module.css';
import cn from 'classnames';

function Button({isTransparent, children, onClick}) {

  return (
    <button className={cn(s.button, {[s.transparent]: isTransparent})} onClick={onClick}>{children}</button>
  );
}

export default Button;