import s from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
// import cn from 'classnames';

export interface ISearchProps {
  icon?: boolean;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  buttonRef?: React.Ref<HTMLButtonElement>;
}

function Search({icon = true, placeholder = 'поиск', inputRef, buttonRef}: ISearchProps) {
  console.log('icon: ', icon);

  const searchClickHandler = () => {
    console.log('searchClickHandler');
  };
  const searchSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('searchSubmitHandler e: ', e);
  };

  return (
    <form className={s.search} onSubmit={searchSubmitHandler}>
      <Input icon="search" ref={inputRef} type="search" placeholder={placeholder} />

      <Button ref={buttonRef} onClick={searchClickHandler} >Искать</Button>
    </form>
  );
}

export default Search;

