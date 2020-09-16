import { type } from 'os';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type ResponseDTO<S> = [S, Dispatch<SetStateAction<S>>];

function usePersisteState<S>(key: string, initialState: S): ResponseDTO<S> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersisteState;
