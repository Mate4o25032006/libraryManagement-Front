import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Home from "./Pages/Home"
import Books from "./Pages/Books"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/books" element={<Books />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
