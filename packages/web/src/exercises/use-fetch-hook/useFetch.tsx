import { useEffect, useRef, useState } from 'react';

interface LoadingState<T> {
    data: T | null,
    loading: boolean,
    error: Error | null
}

export const useFetch = <T,>(url: string): LoadingState<T> => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        async function getData() {
            const controller = new AbortController()
            controllerRef.current = controller;
       
            try {
                setError(null);
                setLoading(true);
                const response = await fetch(url, { signal: controller?.signal });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                setData(result);
                setLoading(false);
            } catch (error: any) {
                if (error.name === 'AbortError') return;
                console.error(error.message);
                setError(error);
                setLoading(false);
            }
        }
        getData();

        return () => {
            controllerRef.current?.abort();
        }

    }, [url])

    return { data, loading, error }
}
