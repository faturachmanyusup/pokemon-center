import { useState, useEffect } from 'react';

function useDetail(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.log(err);
      setError(err);
    })
    .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}

export default useDetail;