import { useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isFetch, setIsFetch] = useState(false)
    const [error, setError] = useState(null)
    
    const fetchData = async () => {
        try {
            setIsFetch(true)
            setError(null)
            
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setIsFetch(false);
            return result;
            
        } catch (e) {
            setIsFetch(false);
            setError(e.message);
            console.warn(e);
            return null;
        }
    }
    
    return { data, isFetch, error, fetchData };
}