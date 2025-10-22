import {createContext, useState} from 'react';

export const UserContext = createContext({
  currentUserName2: ''
});

export const UserContextProvider = ({children}) => {
  const [currentUserName2, setCurrentUserName2] = useState('');

  return (
    <UserContext.Provider value={{currentUserName2, setCurrentUserName2}}>
      {children}
    </UserContext.Provider>
  );
};