import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getLoginedUserFromLocalStorage } from '../../utils';

const REDIRECT_PATH = '/login';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const user = getLoginedUserFromLocalStorage();
  if (!user) {
    if (location.pathname !== REDIRECT_PATH) {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
}
