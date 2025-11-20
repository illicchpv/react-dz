import { useState } from 'react';
import { UserContext, type IUserContext } from './user.context';
import { getLoginedUserFromLocalStorage } from '../utils';

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUserName, setCurrentUserName] = useState<string>(() => {
    return getLoginedUserFromLocalStorage()
  });

  const setUserName = (name: string) => {
    setCurrentUserName(name)
  };


  const value: IUserContext = {
    currentUserName,
    setCurrentUserName: setUserName,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};