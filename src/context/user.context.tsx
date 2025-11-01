import {createContext, useState} from 'react';

export interface IUserContext {
  currentUserName: string;
  setCurrentUserName?: (name: string) => void;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({
  currentUserName: ''
});

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [currentUserName, setCurrentUserName] = useState<string>('');

  return (
    <UserContext.Provider value={{currentUserName, setCurrentUserName}}>
      {children}
    </UserContext.Provider>
  );
};