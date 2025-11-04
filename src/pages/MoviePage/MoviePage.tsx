import styles from './MoviePage.module.css';
import cn from 'classnames';
import { useParams } from 'react-router-dom';

function MoviePage() {
  const id = useParams().id;

  return (
    <div className={cn(styles.moviePage)}>
      MoviePage id:{id}
    </div>
  );
}
export default MoviePage;