import { useState } from 'react';
import { UserContext, type IUserContext } from './user.context';

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUserName, setCurrentUserName] = useState<string>('');

  const value: IUserContext = {
    currentUserName,
    setCurrentUserName,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};