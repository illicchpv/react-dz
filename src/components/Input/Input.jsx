import s from './Input.module.css';
import cn from 'classnames';

function Input({ref, className, props}) {

  return (
    <input ref={ref} {...props} className={cn(s.Input, className)} />
  );
}

export default Input;