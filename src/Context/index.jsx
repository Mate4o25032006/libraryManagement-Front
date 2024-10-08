import { createContext, useState, useEffect } from 'react';

export const LibraryContext = createContext();

export function LibraryContextProvider({ children }) {
    const [inputs, setInputs] = useState({});
    const [admin, setAdmin] = useState(false);
    const [tokenSession, setTokenSessionState] = useState(localStorage.getItem('authToken'));

    const setTokenSession = (token) => {
        setTokenSessionState(token);
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    };

    // Escuchar cuando el token cambia y eliminarlo si está vacío o ha expirado
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setTokenSession(null); // Asegurarse de que el estado también se limpie
        }
    }, [tokenSession]);

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
    );
}
