import s from './Counter.module.css';
// import cn from 'classnames';

function Counter({val}){
  return (
    <div className={s.counter}>{val}</div>
  );
}

export default Counter;