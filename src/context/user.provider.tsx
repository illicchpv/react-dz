import { useState } from 'react';
import { UserContext, type IUserContext } from './user.context';
import type { IUserProfile } from '../constant';

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUserName, setCurrentUserName] = useState<string>(() => {
    const profiles: string | null = localStorage.getItem('user-profiles');
    if (!profiles) return '';
    try {
      const profilesArr: IUserProfile[] = JSON.parse(profiles);
      const profile = profilesArr.find(profile => profile.isLogined);
      return profile?.name || '';
    } catch {
      return ''
    }
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