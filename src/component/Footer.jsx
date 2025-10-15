import react from "react"
import "./Footer.css"
import BrandLogo from "../assets/brandlogoPNG.png"
import { Menu, X,Facebook, Twitter, Instagram, Linkedin, Copyright } from 'lucide-react';
const Footer = ()=>{
    return (
     <>
        <div className="footer">
    
            <div className="logo">
                <img src={BrandLogo} alt="the brandLogo" className="brandLogo"/>

            </div>
             <div className="socialmedia">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="facebook" size={25} />
      </a>
     
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="facebook" size={25} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="instagram"  size={25}/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="linkdin"  size={25} />
      </a>
            </div>
             <div className="information">
      <a href="#">FAQs</a>
      <a href="#">Contact Us</a>
      <a href="#">Location</a>
      <a href="#">Terms & Condition</a>
                
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