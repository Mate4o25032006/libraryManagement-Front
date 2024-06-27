import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Books from "./Pages/Books"
import CatAdventure from "./Pages/CategAdventure"
import CatPhilosophy from "./Pages/CategPhilosophy"
import CatChildish from "./Pages/CategChildish"
import AvailabilityBooks from "./Pages/Availability"
import NoAvailabilityBooks from "./Pages/NoAvailability"
import {FormRegister} from "./Components/Forms/FormRegister"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<Home />}/>
        <Route path="/libros" element={<Books />}/>
        <Route path="/Categories/aventura" element={<CatAdventure />}/>
        <Route path="/Categories/filosofia" element={<CatPhilosophy />}/>
        <Route path="/Categories/infantil" element={<CatChildish />}/>
        <Route path="/libros/Disponibilidad/disponibles" element={<AvailabilityBooks />}/>
        <Route path="/libros/Disponibilidad/no-disponibles" element={<NoAvailabilityBooks />}/>
        <Route path="/registro" element={<FormRegister />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
