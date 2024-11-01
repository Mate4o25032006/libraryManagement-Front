/* eslint-disable react/prop-types */
// ProtectedRoute.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LibraryContext } from '../Context';

//Verificamos si existe el Token, y en caso de que no, volvemos al Login
export const ProtectedRoute = ({ children }) => {
    const { tokenSession } = useContext(LibraryContext);

    if (!tokenSession) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

