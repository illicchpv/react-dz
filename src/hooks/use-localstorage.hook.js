import {useCallback, useState} from 'react';

export function useLocalStorage(key, initialValue = null) {
  const [data, setData] = useState(() => {
    try {
      const json = localStorage.getItem(key);
      return json ? JSON.parse(json) : initialValue;
    } catch (e) {
      console.log('JSON.parse error:', e.message);
      return initialValue;
    }
  });

  const saveData = useCallback((newData) => {
    localStorage.setItem(key, JSON.stringify(newData, null, 2));
    setData(newData);
  }, [key]);

  return [data, saveData];
}
