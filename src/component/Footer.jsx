import react from "react"
import "./Footer.css"
import BrandLogo from "../assets/brandlogoPNG.png"
import { Menu, X,Facebook, Twitter, Instagram, Linkedin, Copyright } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

const Footer = ()=>{
    return (
     <>
        <div className="footer">
    
            <div className="logo">
                <img src={BrandLogo} alt="the brandLogo" className="brandLogo"/>

            </div>
             <div className="socialmedia">
                  <a href="https://web.facebook.com/felicia.oladimeji.33" target="_blank" rel="noopener noreferrer">
        <Facebook className="facebook" size={25} />
      </a>
     
      <a href="https://www.tiktok.com/@sheyifunmi017" target="_blank" rel="noopener noreferrer">
         <FaTiktok size={25} className="tiktok" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="instagram"  size={25}/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="linkdin"  size={25} />
      </a>
            </div>
             <div className="information">
      <a href="/">Home</a>
      <a href="/contact">Contact Us</a>
      <a href="/gallery">Gallery</a>
      <a href="/collections">Collections</a>
                
            </div>
        </div>
        <hr />
        <div className="reserved">
            <p><Copyright size={18}/> </p>
            <p> seyifunmistore All Rights Reserved.</p>

        </div>
        </>
    )
}

export default Footer;