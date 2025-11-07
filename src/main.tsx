import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './context/user.provider';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
// import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MoviePage from './pages/MoviePage/MoviePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoadingPage from './pages/LoadingPage/LoadingPage.tsx';
import axios from 'axios';
import { API_URL } from './constant.ts';

const MainPageLazy = lazy(() => import('./pages/MainPage/MainPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<LoadingPage />}>
          <MainPageLazy />
        </Suspense>
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/movie/:id',
        element: <MoviePage />,
        errorElement: <>Ошибка получения MoviePage</>,
        loader: async ({ params }) => {
          console.log('params.id: ', params.id);
          return defer({
            data: axios.get(`${API_URL}?tt=${params.id}`).then(data => {
              return data
            })
          });
        }

        /*
    const { data } = await axios.get<{ description: ICardResp[] }>(`${API_URL}?q=${searchWords}`);
    const cardsRes = convertToCards(data.description);

        return defer({
          data: axios.get(`${PREFIX}/products/${params.id}`).then(data => {
            return data
          })
        });

        */
      },
      {
        path: '/favorites',
        element: <FavoritesPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
