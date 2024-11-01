import { useRoutes, BrowserRouter, Navigate } from "react-router-dom"; 
import { useContext } from "react";
import NavBar from "../Components/Navbar";
import Home from "../Pages/Home";
import Books from "../Pages/Books";
import { FormRegister } from "../Components/Forms/FormRegister";
import { FormLogin } from "../Components/Forms/FormLogin";
import { User } from "../Pages/Admin";
import { FormAuthors } from "../Components/Forms/FormAuthors";
import { FormCategories } from "../Components/Forms/FormCategories";
import { FormBooks } from "../Components/Forms/FormBooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginRoute } from "./LoginRoute";
import { LibraryContext } from "../Context";

function AppRoutes() {
    const { tokenSession } = useContext(LibraryContext);
    const isLoggedIn = !!tokenSession;

    let routes = useRoutes([
        { path: "/", element: <Navigate to={isLoggedIn ? "/usuario" : "/inicio"} replace /> },
        { path: "/registro", element: <FormRegister /> },
        { path: "/login", 
            element: ( 
                <LoginRoute>
                    <FormLogin /> 
                </LoginRoute>
            )
        },
        { path: "/inicio", element: <Home /> },
        {
            path: "/libros",
            element: ( 
                <ProtectedRoute>
                    <Books /> 
                </ProtectedRoute>
            )
        },
        { path: '/usuario', 
            element: (
                <ProtectedRoute>
                    <User />
                </ProtectedRoute>
            ) 
        },
        { path: '/formularios/libros', 
            element: (
                <ProtectedRoute>
                    <FormBooks />
                </ProtectedRoute>
            ) 
        },
        { path: '/formularios/autores',
            element: (
                <ProtectedRoute>
                    <FormAuthors />
                </ProtectedRoute>
            )  
        },
        { path: '/formularios/categorias', 
            element:  (
                <ProtectedRoute>
                    <FormCategories />
                </ProtectedRoute>
            )
        },
    ]);

    return routes;
}

export const AppUi = () => {
    const { tokenSession } = useContext(LibraryContext);
    const isLoggedIn = !!tokenSession;

    return (
        <BrowserRouter>
            <NavBar isLoggedIn={isLoggedIn} />
            <AppRoutes />
        </BrowserRouter>
    );
};
