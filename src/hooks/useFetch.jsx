import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                setError(null)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, isLoading, error }
}