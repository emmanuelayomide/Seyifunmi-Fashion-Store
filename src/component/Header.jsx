import React, { useState, useEffect } from "react";
import './Header.css';
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X,Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import MybrandLogo from "../assets/brandlogoPNG.png"

const Header = ()=>{
const [showmenu, setShowmenu] = useState(false)
const location = useLocation();
  useEffect(() => {
    setShowmenu(false);
  }, [location]);
    return (
        
        <div className="header">
            {/* The Brand Logo */}
            <div className="logo">
                <h2>Sheyi-Funmi stitches </h2>
            </div>
            {/* the Brand Menu List */}
      <div className={`menuItems ${showmenu ? "active" : ""}`}>
  <Link to="/" className={`weblink ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
<Link to="/about" className={`weblink ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
<Link to="/collections" className={`weblink ${location.pathname === "/collections" ? "active" : ""}`}>Collections</Link>
<Link to="/gallery" className={`weblink ${location.pathname === "/gallery" ? "active" : ""}`}>Gallery</Link>
<Link to="/contact" className={`weblink ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>

                <X size={32} onClick={()=> setShowmenu(false)} className="cancle"/>
                <img src={MybrandLogo} alt="The Brand logo image" className="brandimage" />
                  <div className="socialMedia">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="facebook" />
      </a>
     
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="linkdin" />
      </a>
    </div>
    <div className="whatsappLargeIcon">
 <a href="https://wa.me/+2349028021101" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} className="whatsapponlyicon"/>
      </a>
    </div>

            
            </div>
            {/* the brand Whatsapp Link */}
            <div className="whatsapp">
              <a href="https://wa.me/+2349028021101" target="_blank" rel="noopener noreferrer"> <button>Book Your Outfit</button></a>

            </div>
            <div className="handBugger">
         <Menu size={32} onClick={() => setShowmenu(!showmenu)} />


            </div>
       
        
              
         
          
        </div>
    )
}

export default Header;