import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';

import Gallery from './pages/Gallary';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Collections from "./pages/Collections"
import Contactus from "./pages/Contactus.jsx"

function App() {
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
