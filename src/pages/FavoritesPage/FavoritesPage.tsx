import styles from './FavoritesPage.module.css';
import cn from 'classnames';
import BodyCard from '../../components/BodyCard/BodyCard';
import Title from '../../components/Title/Title';
import BodySection from '../../sections/BodySection/BodySection';
import { markCards } from '../../utils';
import { useSelector } from 'react-redux';
import { selectedCardsForCurrentUser } from '../../store/selected.slice';

function FavoritesPage() {
  const selectedCards = useSelector(selectedCardsForCurrentUser);

  return (
    <>
      <div className={cn(styles.titleBlock)}>
        <Title as="h1" >Избранное</Title>
      </div>

      <BodySection className={cn(styles.bodySpec)}>
        {markCards(selectedCards).map(card => <BodyCard key={card.id} card={card}></BodyCard>)}
      </BodySection>
    </>
  );
}
export default FavoritesPage;