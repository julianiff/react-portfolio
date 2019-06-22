import { useEffect, useState } from "react";
import mapToProduct from "./mapToProduct";


const useFetch = (url, defaultData = []) => {

    const [products, setProducts] = useState(defaultData)
    const [error, setError] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json();
            setProducts(mapToProduct(json))
        }
        fetchData().catch(e => setError(e))
    }, [url])

    return {products, error}
}

export default useFetch;
