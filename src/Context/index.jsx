import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LibraryContext = createContext();

export function LibraryContextProvider({ children }) {
    const [inputs, setInputs] = useState({});
    //const [loader, setLoader] = useState(true);
    const [admin, setAdmin] = useState(false)
    const [tokenSession, setTokenSession] = useState("");

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
