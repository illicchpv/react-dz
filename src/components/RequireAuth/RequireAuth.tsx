import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentSelectedProfile } from '../../store/profiles.slice';

const REDIRECT_PATH = '/login';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const currentProfile = useSelector(currentSelectedProfile);
  if (!currentProfile && location.pathname !== REDIRECT_PATH) {
    return <Navigate to="/login" replace />
  }
  return children;
}
