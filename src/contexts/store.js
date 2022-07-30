import { useEffect, useState } from "react";

export const useStore = (key, value) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const value = localStorage.getItem(key);
        if (value) setState(JSON.parse(value || '"[]"'));
    }, []);

    const updateState = (value) => {
        setState(value);
        if (value !== undefined && typeof value !== "function")
            localStorage.setItem(key, JSON.stringify(value));
        else if (value) {
            localStorage.setItem(key, JSON.stringify(value(state)));
        }
    };

    return [state, updateState];
};
