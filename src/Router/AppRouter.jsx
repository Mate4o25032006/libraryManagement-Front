import { useRoutes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Home from "../Pages/Home"
import Books from "../Pages/Books"
import CatAdventure from "../Pages/CategAdventure"
import CatPhilosophy from "../Pages/CategPhilosophy"
import CatChildish from "../Pages/CategChildish"
import { FormRegister } from "../Components/Forms/FormRegister"
import { FormLogin } from "../Components/Forms/FormLogin";
import { User } from "../Pages/Admin";
import { FormAuthors } from "../Components/Forms/FormAuthors";
import { FormCategories } from "../Components/Forms/FormCategories";
import { FormBooks } from "../Components/Forms/FormBooks";
import { LoginRoute } from "./LoginRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { ProtectedRoute } from "./ProtectedRoute";
import { LibraryContext } from "../Context";

function AppRoutes() {
    let routes = useRoutes([
        { path:"/registro", element: <FormRegister /> },
        { path:"/login", element: <FormLogin /> },
        { path:"/inicio", element: <Home /> },
        { path:"/libros", element: <Books /> },
        // { path:"/Categories/aventura", element: <CatAdventure /> },
        // { path:"/Categories/filosofia", element: <CatPhilosophy /> },
        // { path:"/Categories/infantil", element: <CatChildish /> },
        // { path:"/libros/Disponibilidad/disponibles", element: <AvailabilityBooks /> },
        // { path:"/libros/Disponibilidad/no-disponibles", element: <NoAvailabilityBooks /> },
        { path: '/', 
            element: (
                <LoginRoute>
                    <FormLogin />
                </LoginRoute>
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
    return routes
}
/* La función `AppUi` es un componente de React que define la estructura y el diseño de la aplicación.
Devuelve código JSX que representa la interfaz de usuario de la aplicación. */

export const AppUi = () => {
    const { tokenSession } = useContext(LibraryContext);
    const isLoggedIn = !!tokenSession;

    return (
        <>
            <BrowserRouter>
                <NavBar isLoggedIn={isLoggedIn} />
                <AppRoutes />
            </BrowserRouter>
        </>
    )
}