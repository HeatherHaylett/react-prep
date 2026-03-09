import { useEffect, useState } from 'react';

export const useDebounce = (value: string, milliseconds: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    console.log("VALUE", value, "DE", debouncedValue)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, milliseconds);

        return () => {
            clearTimeout(handler);
        }
    }, [value, milliseconds]);

    return debouncedValue;
}