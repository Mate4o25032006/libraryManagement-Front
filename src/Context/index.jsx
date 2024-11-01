/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import * as jwtDecode from 'jwt-decode';


export const LibraryContext = createContext();

export function LibraryContextProvider({ children }) {
    const [inputs, setInputs] = useState({});
    const [user, setUser] = useState(false);
    const [tokenSession, setTokenSessionState] = useState(localStorage.getItem('authToken'));


    // Verificar expiración del token
    const isTokenExpired = (token) => {
        try {
            const decoded = jwtDecode.default(token); // Llama al método `.default`
            return decoded.exp * 1000 < Date.now(); // Co mparar tiempo de expiración en ms
        } catch (e) {
            return true;
        }
    };

    const setTokenSession = (token) => {
        console.log("Token recibido en setTokenSession:", token); // Verifica el token recibido
        setTokenSessionState(token);
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    };  


    useEffect(() => {
        const token = localStorage.getItem('authToken');
        
        if (!token || isTokenExpired(token)) {
            setTokenSession(null); 
        }
    }, []);

    return (
        <LibraryContext.Provider
            value={{
                inputs,
                setInputs,
                user,
                setUser,
                tokenSession,
                setTokenSession,
            }}
        >
            {children}
        </LibraryContext.Provider>
    );
}
