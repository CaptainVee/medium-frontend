import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error("could not fetch data");
          }
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => setError(error.message));
      setLoading(false);
      setError(null);
    }, 1000);
  }, []);

  return { data, loading, error };
}

export default useFetch;
