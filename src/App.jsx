import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from './pages/Gallary';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Collections from "./pages/Collections"
import Contactus from "./pages/Contactus.jsx"

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true, 
  });
}, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contactus/>} />
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
