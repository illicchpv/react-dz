import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import { UserContextProvider } from './context/user.provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MoviePage from './pages/MoviePage/MoviePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/movie/:id',
        element: <MoviePage />
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
