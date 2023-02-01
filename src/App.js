import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home"; 
import Contacto from "./views/Contacto.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>     

      
    </div>
  );
}

export default App;
