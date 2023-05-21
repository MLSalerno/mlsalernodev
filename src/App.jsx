import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Contacto from './componentes/Contacto';
import Perfil from './componentes/Perfil';
import Proyectos from './componentes/Proyectos';
import Home from './componentes/Home';
import Navbar from "./componentes/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contacto" element={<Contacto />} exact />
        <Route path="/perfil" element={<Perfil />} exact />
        <Route path="/proyectos" element={<Proyectos />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App
