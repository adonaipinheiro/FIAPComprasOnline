/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

type APIType<T> = {
  data: T;
};

type useAPIProps<T> = () => Promise<APIType<T>>;

export function useAPI<T>(api: useAPIProps<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchApi = () => {
    setLoading(true);
    api()
      .then(resp => {
        setData(resp.data);
      })
      .catch(_ => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
