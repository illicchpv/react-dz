import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './context/user.provider';
import { createBrowserRouter, defer, RouterProvider, useRouteError } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
// import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MoviePage from './pages/MoviePage/MoviePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoadingPage from './pages/LoadingPage/LoadingPage.tsx';
import axios from 'axios';
import { API_URL } from './constant.ts';
import { RequireAuth } from './components/RequireAuth/RequireAuth.tsx';

function RouterError({ title = 'Что-то пошло не так' }: { title?: string }) {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: '2em', color: 'tomato', textAlign: 'center' }}>
      <h1>{title}</h1>
      <h3>{(error as Error)?.message}</h3>
    </div>
  );
}

const MainPageLazy = lazy(() => import('./pages/MainPage/MainPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><MainLayout /></RequireAuth>,
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
        errorElement: <RouterError title='У "MoviePage" что-то пошло не так' />,
        loader: async ({ params }) => {
          if (!params.id) throw new Error('ID не найден');
          console.log('params.id: ', params.id);
          return defer({
            data: axios.get(`${API_URL}?tt=${params.id}`)
              .then(data => {
                return data
              })
              .catch(error => {
                throw new Error(`Не удалось загрузить: ${error.message}`);
              })
          });
        }
      },
      {
        path: '/favorites',
        element: <FavoritesPage />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserContextProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
