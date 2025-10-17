import s from './Button.module.css';
import cn from 'classnames';

function Button({isTransparent, children, onClick, ref}) {

  return (
    <button ref={ref}
      className={cn(s.button, {[s.transparent]: isTransparent})}
      onClick={onClick}
    >{children}</button>
  );
}

export default Button;