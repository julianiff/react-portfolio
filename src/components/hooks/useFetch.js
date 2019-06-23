import { useEffect, useState } from "react";


const useFetch = (url, defaultData = [], fn) => {

  const [products, setProducts] = useState(defaultData);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(fn(json));
    };
    fetchData().catch(e => setError(e));
  }, [url, fn]);

  return { products, error };
};

export default useFetch;
