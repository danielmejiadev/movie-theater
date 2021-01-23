import { useState, useEffect, useCallback } from 'react';

export enum States {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FETCHED = 'FETCHED',
  ERROR = 'ERROR'
}

export function useFetch<T>(
  callback: () => Promise<T>,
  initialValue: T
): [T, States, unknown] {
  const [state, setState] = useState<States>(States.IDLE);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const memoizedCallback = useCallback(() => callback(), []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(States.LOADING);
        const response = await memoizedCallback();
        setData(response);
        setState(States.FETCHED);
      } catch (errorCatched) {
        setState(States.ERROR);
        setError(errorCatched);
      }
    };
    fetchData();
  }, [memoizedCallback]);

  return [data, state, error];
}