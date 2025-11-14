import s from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
// import cn from 'classnames';

export interface ISearchProps {
  icon?: boolean;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  buttonRef?: React.Ref<HTMLButtonElement>;
  searchSubmitHandler?: (e: React.FormEvent) => void
}

function Search({ icon = true, placeholder = 'поиск', inputRef, buttonRef, searchSubmitHandler }: ISearchProps) {
  // console.log('icon: ', icon);

  return (
    <form className={s.search} onSubmit={searchSubmitHandler}>
      <Input icon={icon ? 'search' : undefined} ref={inputRef} type="search" placeholder={placeholder} />

      <Button ref={buttonRef}>Искать</Button>
    </form>
  );
}

export default Search;

