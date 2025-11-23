import styles from './MoviePage.module.css';
import cn from 'classnames';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { type ICard, type IMovie } from '../../constant';
import Title from '../../components/Title/Title';
import SelectButton from '../../components/SelectButton/SelectButton';
import { useDispatch, useSelector } from 'react-redux';
import { currentSelectedProfile } from '../../store/profiles.slice';
import { selectedCardsActions, selectedCardsForCurrentUser } from '../../store/selected.slice';
import type { AppDispatch } from '../../store/store';
import { decodeDuration } from '../../utils';

function MoviePage() {
  // const id = useParams().id;
  const data = useLoaderData() as { data: IMovie };
  const dispatch = useDispatch<AppDispatch>();
  const currentUserName = useSelector(currentSelectedProfile)?.name;
  const selectedCards = useSelector(selectedCardsForCurrentUser);
  // const show = async () => { 
  //   const movie = await data.data;
  //   console.log('movie: ', movie);
  // };
  // show();
  // debugger

  const add = (card: ICard) => {
    dispatch(selectedCardsActions.add({ ...card, userName: currentUserName }));
  };

  const cardFromMovie = (m: IMovie): ICard => ({
    id: m.imdbId,
    name: m.short.name,
    img: m.short.image,
    rating: m.short.aggregateRating?.ratingValue,
    year: m.short.datePublished ? Number(m.short.datePublished.split('-')[0]) : undefined,

    userName: currentUserName,
    selected: !!selectedCards.find(card => card.id === m.imdbId)
  });


  return (
    <>
      <Suspense fallback={<Title as="h2">Loading...</Title>}>
        <Await resolve={data.data}>
          {({ data: Movie }: { data: IMovie }) => {
            const card = cardFromMovie(Movie);
            return (
              <div className={cn(styles.moviePage)}>

                <div className={styles.rowBlock}>
                  <div className={styles.rowSmallTitle}>Поиск фильмов</div>

                  <Title as="h2" >{Movie.short.name}</Title>
                </div>

                <div className={styles.infoBlock}>
                  <div className={styles.card}>
                    <div className={styles.cardImageContainer}>
                      <img className={styles.cardImage} src={`${Movie.short.image}`} alt={`постер ${Movie.short.name}`}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/card-img/404.jpg';
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles.textBlock}>
                    <p className={styles.description}>{Movie.short.description}</p>

                    <div className={styles.ratingBlock}>
                      <div className={styles.ratingStart}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.57075 1.705L9.74409 4.05167C9.90409 4.37833 10.3308 4.69167 10.6908 4.75167L12.8174 5.105C14.1774 5.33167 14.4974 6.31833 13.5174 7.29167L11.8641 8.945C11.5841 9.225 11.4308 9.765 11.5174 10.1517L11.9908 12.1983C12.3641 13.8183 11.5041 14.445 10.0708 13.5983L8.07742 12.4183C7.71742 12.205 7.12409 12.205 6.75742 12.4183L4.76409 13.5983C3.33742 14.445 2.47075 13.8117 2.84409 12.1983L3.31742 10.1517C3.40409 9.765 3.25075 9.225 2.97075 8.945L1.31742 7.29167C0.344086 6.31833 0.65742 5.33167 2.01742 5.105L4.14409 4.75167C4.49742 4.69167 4.92409 4.37833 5.08409 4.05167L6.25742 1.705C6.89742 0.431667 7.93742 0.431667 8.57075 1.705Z" stroke="#FFAD49" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>

                        {Movie.short.aggregateRating?.ratingValue}
                      </div>

                      <SelectButton card={card} add={() => add(card)}></SelectButton>
                    </div>

                    <div className={styles.infoSubBlock}>
                      <div className={styles.infoTitle}>Тип</div>
                      <div className={styles.infoText}>{Movie.short['@type']}</div>
                    </div>

                    <div className={styles.infoSubBlock}>
                      <div className={styles.infoTitle}>Дата выхода</div>
                      <div className={styles.infoText}>{Movie.short.datePublished}</div>
                    </div>

                    <div className={styles.infoSubBlock}>
                      <div className={styles.infoTitle}>Длительность</div>
                      <div className={styles.infoText}>{decodeDuration(Movie.short.duration)}</div>
                    </div>

                    <div className={styles.infoSubBlock}>
                      <div className={styles.infoTitle}>Жанр</div>
                      <div className={styles.infoText}>{Movie.short.genre.join(', ')}</div>
                    </div>
                  </div>
                </div>

{!!Movie.short.review && (<>
                <div className={styles.reviewSmallTitle}>
                  Отзывы
                </div>

                <div className={styles.rowBlock}>
                  <div className={styles.reviewTitleBlock}>
                    <div className={styles.reviewTitle}>{Movie.short.review.name}</div>
                    <div className={styles.reviewDate}>{Movie.short.review.dateCreated}</div>
                  </div>

                  <p>{Movie.short.review.reviewBody}</p>
                </div>
</>)}
              </div>
            )
          }
          }
        </Await>
      </Suspense>
    </>
  );
}
export default MoviePage;