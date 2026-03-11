import { useEffect, useRef, useState } from 'react';

type LoadingState<T> = {
    data: T | null,
    loading: boolean,
    error: Error | null,
    refetch: () => void
}

export const useFetch = <T,>(url: string): LoadingState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [trigger, setTrigger] = useState(0);
    const controllerRef = useRef<AbortController | null>(null);
    const refetch = () => setTrigger((prev) => (prev + 1));

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

    }, [url, trigger])

    return { data, loading, error, refetch }
}
