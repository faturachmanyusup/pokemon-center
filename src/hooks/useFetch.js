import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data);
      setError(null);
    })
    .catch(err => {
      console.log(err);
      setData(null);
      setError('pokemon not found');
    })
    .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}

export default useFetch;