import { useEffect, useRef } from 'react';
import BodyCard from '../../components/BodyCard/BodyCard';
import Search from '../../components/Search/Search';
import { CARDS } from '../../constant';
import BodySection from '../../sections/BodySection/BodySection';
import SearchSection from '../../sections/SearchSection/SearchSection';
import { markSelectedCards } from '../../utils';
// import styles from './MainPage.module.css';
// import type { MainPageProps } from './MainPage.props';
// import cn from 'classnames';

function MainPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current?.focus();
  }, []);

  return (
    <>
      <SearchSection>
        <Search icon placeholder="Введите название" inputRef={searchInputRef} buttonRef={searchButtonRef} />
      </SearchSection>

      <BodySection>
        {markSelectedCards(CARDS).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}
      </BodySection>
    </>
  );
}
export default MainPage;