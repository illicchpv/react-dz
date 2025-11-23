import styles from './MainPage.module.css';
import { useEffect, useRef, useState } from 'react';
import BodyCard from '../../components/BodyCard/BodyCard';
import Search from '../../components/Search/Search';
import { API_URL, type ICard, type ICardResp } from '../../constant';
import BodySection from '../../sections/BodySection/BodySection';
import SearchSection from '../../sections/SearchSection/SearchSection';
import { convertToCards, markSelectedCards } from '../../utils';
import Title from '../../components/Title/Title';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { selectedCardsForCurrentUser } from '../../store/selected.slice';

function MainPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const selectedCards = useSelector(selectedCardsForCurrentUser);

  const getCards = async () => {
    // console.log('searchInputRef.current?.value: ', searchInputRef.current?.value);
    const searchWords = searchInputRef.current?.value.trim();

    await new Promise((resolve) => setTimeout(resolve, 20));

    setError(undefined);    // setError('test error!');
    setIsLoading(true);
    try {
      const { data } = await axios.get<{ description: ICardResp[] }>(`${API_URL}?q=${searchWords}`);
      const cardsRes = convertToCards(data.description);
      setCards(cardsRes || []);
      if (data.description?.length > 0) {
        localStorage.setItem('lastSearch', searchWords || '');
      }
    } catch (e) {
      const msg = e instanceof AxiosError ? e.message : 'get products Unknown error'
      console.warn(msg);
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchInputRef.current) {
      const v = localStorage.getItem('lastSearch');
      searchInputRef.current.value = v || 'Avengers';
    }
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current?.focus();
  }, []);

  const searchSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    getCards();
  };

  const count = cards.length;

  let pageContent: React.ReactNode | null = <Title as="h2">Фильмов не найдено</Title>
  if (count > 0) {
    pageContent = <>{markSelectedCards(cards, selectedCards).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}</>;
  }
  if (error) pageContent = null

  const pageContentTitle = count > 0 ? `Количество найденных фильмов: ${count}` : ''


  return (
    <>
      <SearchSection>
        <Search icon placeholder="Введите название"
          inputRef={searchInputRef} buttonRef={searchButtonRef}
          searchSubmitHandler={searchSubmitHandler}
        />
      </SearchSection>

      <BodySection title={pageContentTitle}>
        {!!error && <Title className={styles.error} as="h2">Error: {error}</Title>}
        {isLoading && <Title as="h2">Loading...</Title>}
        {!isLoading && <>{pageContent}</>}
      </BodySection>
    </>
  );
}
export default MainPage;