import { useState } from "react";

export function useLocalStorage(key, value) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (err) {
      console.log(err);
      return value;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStorage =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(valueToStorage));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}

/* 

    const [ value, setValue ] = useLocalStorage();

*/
