import { createContext } from 'react';

export interface IUserContext {
  currentUserName: string;
  setCurrentUserName: (name: string) => void;
}

export const UserContext = createContext<IUserContext>({
  currentUserName: '',
  setCurrentUserName: () => {} // заглушка
});