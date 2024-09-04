import { useRoutes, BrowserRouter } from "react-router-dom";
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Home from "../Pages/Home"
import Books from "../Pages/Books"
import CatAdventure from "../Pages/CategAdventure"
import CatPhilosophy from "../Pages/CategPhilosophy"
import CatChildish from "../Pages/CategChildish"
import AvailabilityBooks from "../Pages/Availability"
import NoAvailabilityBooks from "../Pages/NoAvailability"
import { FormRegister } from "../Components/Forms/FormRegister"
import { FormLogin } from "../Components/Forms/FormLogin";
import { User } from "../Pages/Admin";
import { FormAuthors } from "../Components/Forms/FormAuthors";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function AppRoutes() {
    let routes = useRoutes([
        { path:"/inicio", element: <Home /> },
        { path:"/libros", element: <Books /> },
        { path:"/Categories/aventura", element: <CatAdventure /> },
        { path:"/Categories/filosofia", element: <CatPhilosophy /> },
        { path:"/Categories/infantil", element: <CatChildish /> },
        { path:"/libros/Disponibilidad/disponibles", element: <AvailabilityBooks /> },
        { path:"/libros/Disponibilidad/no-disponibles", element: <NoAvailabilityBooks /> },
        { path:"/registro", element: <FormRegister /> },
        { path:"/login", element: <FormLogin /> },
        { path: '/usuario', element: <User /> },
        { path: '/formularios/autores', element: <FormAuthors /> },
    ]);
    return routes
}
/* La función `AppUi` es un componente de React que define la estructura y el diseño de la aplicación.
Devuelve código JSX que representa la interfaz de usuario de la aplicación. */

export const AppUi = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <AppRoutes />
            </BrowserRouter>
        </>
    )
}