import styles from './MoviePage.module.css';
import cn from 'classnames';
import { Suspense } from 'react';
import { Await, useLoaderData, useParams } from 'react-router-dom';
import { type IMovie } from '../../constant';
import Title from '../../components/Title/Title';

function MoviePage() {
  const id = useParams().id;
  const data = useLoaderData() as { data: IMovie };

  return (
    <>
      <Suspense fallback={<Title as="h2">Loading...</Title>}>
        <Await resolve={data.data}>
          {({ data: Movie }: { data: IMovie }) => (
            <div className={cn(styles.moviePage)}>
              <p>MoviePage id: {id}</p>
              <hr />
              <p>Movie imdbId: {Movie.imdbId}</p>
              <p>Movie titleText: {Movie.main.titleText.text}</p>
              <p>Movie datePublished: {Movie.short.datePublished}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
export default MoviePage;