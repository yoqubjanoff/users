import { useState, useEffect } from 'react';

function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
      setLoading(true);
      setError(null);
    };
  }, [url]);

  return { data, loading, error, reset: () => setData(null) };
}

export default useFetch;