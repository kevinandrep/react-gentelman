import { useEffect, useState } from "react";

type Data<T> = T | null;
type Errortype = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: Errortype;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Errortype>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, controller);
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const jsonData: T = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error as Errortype);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
