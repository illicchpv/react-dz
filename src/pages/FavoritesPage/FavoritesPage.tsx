import styles from './FavoritesPage.module.css';
import cn from 'classnames';
import BodyCard from '../../components/BodyCard/BodyCard';
import Title from '../../components/Title/Title';
import { CARDS } from '../../constant';
import BodySection from '../../sections/BodySection/BodySection';
import { getSelectedCards, markSelectedCards } from '../../utils';

function FavoritesPage() {
  const selectedCards = getSelectedCards(CARDS);

  return (
    <>
      <div className={cn(styles.titleBlock)}>
        <Title as="h1" >Избранное</Title>
      </div>

      <BodySection className={cn(styles.bodySpec)}>
        {markSelectedCards(selectedCards).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}
      </BodySection>
    </>
  );
}
export default FavoritesPage;