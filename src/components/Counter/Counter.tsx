import s from './Counter.module.css';
// import cn from 'classnames';

export interface ICounter extends React.HTMLAttributes<HTMLDivElement> {
  val: number
}
function Counter({ val }: ICounter) {
  return (
    <div className={s.counter}>{val}</div>
  );
}

export default Counter;