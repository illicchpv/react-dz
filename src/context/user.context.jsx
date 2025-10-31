import {createContext, useState} from 'react';

export const UserContext = createContext({
  currentUserName: ''
});

export const UserContextProvider = ({children}) => {
  const [currentUserName, setCurrentUserName] = useState('');

  return (
    <UserContext.Provider value={{currentUserName, setCurrentUserName}}>
      {children}
    </UserContext.Provider>
  );
};