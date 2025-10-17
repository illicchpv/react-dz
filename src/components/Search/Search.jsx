import s from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
// import cn from 'classnames';

function Search({icon = true, placeholder = 'поиск', inputRef, buttonRef}) {

  const searchClickHandler = (e) => {
    console.log('searchClickHandler e: ', e);
  };
  const searchSubmitHandler = (e) => {
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

