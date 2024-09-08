import {useEffect, useState} from 'react';

export default function useLocalStorage(key, defaultValue) {
  // get localstorage value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error.message);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  console.log(value);

  // set localstorage value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
