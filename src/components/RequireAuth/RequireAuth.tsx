import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const REDIRECT_PATH = '/login';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  console.log('location: ', location.pathname);
  const jwtLike = localStorage.getItem('jwtLike')
  if (!jwtLike) {
    if(location.pathname !== REDIRECT_PATH) {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
}
