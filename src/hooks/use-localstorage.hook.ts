// import { useCallback, useState } from 'react';
import { useCallback, useState } from 'react';
import type { IUserProfile } from '../constant';

export function useLocalStorage(key: string, initialValue: IUserProfile[] = []) {
  const [data, setData] = useState<IUserProfile[]>(() => {
    try {
      const json = localStorage.getItem(key);
      return json ? JSON.parse(json) : initialValue;
    } catch (e) {
      if (e instanceof Error) {
        console.log('JSON.parse error:', e.message);
      } else {
        console.log('JSON.parse error:', e);
      }
      return initialValue;
    }
  });

  const setProfiles = useCallback((newData: IUserProfile[]) => {
    localStorage.setItem(key, JSON.stringify(newData, null, 2));
    setData(newData);
  }, [key]);

  return [data, setProfiles] as const;
}
