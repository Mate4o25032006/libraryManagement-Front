import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LibraryContext = createContext();

export function LibraryContextProvider({ children }) {
    const [inputs, setInputs] = useState({});
    const [admin, setAdmin] = useState(false)
    const [tokenSession, setTokenSessionState] = useState(localStorage.getItem('authToken'));

    const setTokenSession = (token) => {
        setTokenSessionState(token);
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    };

    return (
        <LibraryContext.Provider
            value={{
                inputs,
                setInputs,
                admin,
                setAdmin,
                tokenSession,
                setTokenSession,
            }}
        >
            {children}
        </LibraryContext.Provider>
    )
}
