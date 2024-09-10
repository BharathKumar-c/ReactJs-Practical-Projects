import {useEffect, useState} from 'react';

export function useFetch(url, option = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, {...option});
      if (!response.ok)
        new Error(`something went wrong ${response.statusText}`);
      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`Something went to wrong. ${error}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, error, loading};
}
