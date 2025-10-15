import {React, useState} from "react"; 
import './Collections.css';
import { FaWhatsapp } from "react-icons/fa";
import Seyibrand from "../assets/content.jpg"
import P1 from "../assets/p1.jpg";
import P1b from "../assets/p1b.jpg";
import P2 from "../assets/p2.jpg";
import P2b from "../assets/p2b.jpg";
import P3 from "../assets/p3.jpg";
import P3b from "../assets/p3b.jpg";
import P4 from "../assets/p4.jpg";
import P4b from "../assets/p4b.jpg";
import P5 from "../assets/p5.jpg";
import P5b from "../assets/p5b.jpg";
import P6 from "../assets/p6.jpg";
import P6b from "../assets/p6b.jpg";
import P7 from "../assets/p7.jpg";
import P7b from "../assets/p7b.jpg";
import P8 from "../assets/p8.jpg";
import P8b from "../assets/p8b.jpg";
import P9 from "../assets/p9.jpg";
import P9b from "../assets/p9b.jpg";
import P10 from "../assets/p10.jpg";
import P10b from "../assets/p10b.jpg";
import P11 from "../assets/p11.jpg";
import P11b from "../assets/p11b.jpg";
import P12 from "../assets/p12.jpg";
import P13 from "../assets/p13.jpg";
import P14 from "../assets/p14.jpg";
import P14b from "../assets/p14b.jpg";
import P15 from "../assets/p15.jpg";
import P15b from "../assets/p15b.jpg";
import P16 from "../assets/p16.jpg";
import P17 from "../assets/p17.jpg";
import P17b from "../assets/p17b.jpg";
import P18 from "../assets/p18.jpg";
import P19 from "../assets/p19.jpg";
import P20 from "../assets/p20.jpg";
import P20b from "../assets/p20b.jpg";
import P21 from "../assets/p21.jpg";
import P21b from "../assets/p21b.jpg";
import P22 from "../assets/p22.jpg";
import P22b from "../assets/p22b.jpg";
import P23 from "../assets/p23.jpg";
import P24 from "../assets/p24.jpg";
import P25 from "../assets/p25.jpg";
import P25b from "../assets/p25b.jpg";
import P26 from "../assets/p26.jpg";
import P26b from "../assets/p26b.jpg";
import P27 from "../assets/p27.jpg";
import P27b from "../assets/p27b.jpg";
import P28 from "../assets/p28.jpg";
import P29 from "../assets/p29.jpg";
import P30 from "../assets/p30.jpg";
import P30b from "../assets/p30b.jpg";
import P31 from "../assets/p31.jpg";
import P31b from "../assets/p31b.jpg";
import P32 from "../assets/p32.jpg";
import P32b from "../assets/p32b.jpg";
import P33 from "../assets/p33.jpg";
import P33b from "../assets/p33b.jpg";
import P34 from "../assets/p34.jpg";
import P34b from "../assets/p34b.jpg";
import P35 from "../assets/p35.jpg";
import P36 from "../assets/p36.jpg";
import P37 from "../assets/p37.jpg";
import P37b from "../assets/p37b.jpg";
import P38 from "../assets/p38.jpg";
import P38b from "../assets/p38b.jpg";
import P39 from "../assets/p39.jpg";
import P40 from "../assets/p40.jpg";
import P40b from "../assets/p40b.jpg";
import P41 from "../assets/p41.jpg";
import P41b from "../assets/p41b.jpg";
import P42 from "../assets/p42.jpg";
import P43 from "../assets/p43.jpg";
import P44 from "../assets/p44.jpg";
import P44b from "../assets/p44b.jpg";
import P45 from "../assets/p45.jpg";
import P46 from "../assets/p46.jpg";
import P47 from "../assets/p47.jpg";
import P47b from "../assets/p47b.jpg";
import P48 from "../assets/p48.jpg";
import P48b from "../assets/p48b.jpg";
import P49 from "../assets/p49.jpg";
import P50 from "../assets/p50.jpg";
import P51 from "../assets/p51.jpg";
import P52 from "../assets/p52.jpg";
import P52b from "../assets/p52.jpg";
import P53 from "../assets/p53.jpg";
import P54 from "../assets/p54.jpg";
import P55 from "../assets/p55.jpg";
import P56 from "../assets/p56.jpg";
import P57 from "../assets/p57.jpg";
import P58 from "../assets/p58.jpg";
import P59 from "../assets/p59.jpg";
import P59b from "../assets/p59b.jpg";
import P60 from "../assets/p60.jpg";
import P61 from "../assets/p61.jpg";
import P62 from "../assets/p62.jpg";
import P63 from "../assets/p63.jpg";
import P63b from "../assets/p63b.jpg";
import P64 from "../assets/p64.jpg";
import P65 from "../assets/p65.jpg";
import P66 from "../assets/p66.jpg";
import P67 from "../assets/p67.jpg";
import P68 from "../assets/p68.jpg";
import P69 from "../assets/p69.jpg";
import P70 from "../assets/p70.jpg";
import P71 from "../assets/p71.jpg";
import P71b from "../assets/p71b.jpg";
import P72 from "../assets/p72.jpg";
import P72b from "../assets/p72b.jpg";
import P73 from "../assets/p73.jpg";
import P74 from "../assets/p74.jpg";
import P75 from "../assets/p75.jpg";
import P76 from "../assets/p76.jpg";
import P77 from "../assets/p77.jpg";
import P78 from "../assets/p78.jpg";
import P79 from "../assets/p79.jpg";
import P80 from "../assets/p80.jpg";
import P81 from "../assets/p81.jpg";
import P82 from "../assets/p82.jpg";
import P83 from "../assets/p83.jpg";




function Collections() {
   const [activeId, setActiveId] = useState(1); 
     const [hoveredIndex, setHoveredIndex] = useState(null);
   
const categories = [

    {id:1, name:"All Dresses"},
    {id:2, name:"Lady's native dress"},
    
    {id:3, name:"Bridal wear"},
    {id:4, name:"Lady's office dress"},
    {id:5, name:"Lady's trousers"},
    {id:7, name:"Baby's dress"}
]

const collectionProducts = [
  { id: 1, name: "Aso Ebi Maxi Gown", img: [P1, P1b], category: "Ladies gown" },
  { id: 2, name: "Adire Boubou Kaftan", img: [P2, P2b], category: "Ladies gown" },
  { id: 3, name: "Ankara Flare Gown", img: [P3, P3b], category: "Ladies gown" },
  { id: 4, name: "Lace Iro & Buba Set", img: [P4, P4b], category: "Ladies gown" },
  { id: 5, name: "Trendy Two-Piece", img: [P5, P5b], category: "Ladies gown" },
  { id: 6, name: "Office Smart Dress", img: [P6, P6b], category: "Ladies gown" },
  { id: 7, name: "Baby Girl Dress", img: [P7, P7b], category: "Ladies gown" },
  { id: 8, name: "Stylish Party Gown", img: [P8, P8b], category: "Ladies gown" },
  { id: 9, name: "Modern Ankara Set", img: [P9, P9b], category: "Ladies gown" },
  { id: 10, name: "Elegant Evening Dress", img: [P10, P10b], category: "Ladies gown" },
  { id: 11, name: "Lady’s Trousers", img: [P11, P11b], category: "Ladies gown" },

  { id: 12, name: "Royal Ankara Wrapper Set", img: [P12], category: "Lady's native dress" },
  { id: 13, name: "Lace Boubou Style", img: [P13], category: "Lady's native dress" },
  { id: 14, name: "Modern Iro & Buba", img: [P14, P14b], category: "Lady's native dress" },
  { id: 15, name: "Ankara Mermaid Dress", img: [P15, P15b], category: "Lady's native dress" },
  { id: 16, name: "Peplum Native Dress", img: [P16], category: "Lady's native dress" },
  { id: 17, name: "Embroidered Lace Gown", img: [P17, P17b], category: "Lady's native dress" },
  { id: 18, name: "Stylish Aso Oke Set", img: [P18], category: "Lady's native dress" },
  { id: 19, name: "Adire Long Dress", img: [P19], category: "Lady's native dress" },
  { id: 20, name: "Velvet Native Kaftan", img: [P20, P20b], category: "Lady's native dress" },
  { id: 21, name: "Classic Ankara Wrapper", img: [P21, P21b], category: "Lady's native dress" },
  { id: 22, name: "Stylish Owambe Gown", img: [P22, P22b], category: "Lady's native dress" },
  { id: 23, name: "Chiffon Boubou Dress", img: [P23], category: "Lady's native dress" },
  { id: 24, name: "Lace Party Wrapper Set", img: [P24], category: "Lady's native dress" },
  { id: 25, name: "Aso Oke Mermaid Gown", img: [P25, P25b], category: "Lady's native dress" },
  { id: 26, name: "Beaded Ankara Kaftan", img: [P26, P26b], category: "Lady's native dress" },
  { id: 27, name: "Stylish Iro and Top", img: [P27, P27b], category: "Lady's native dress" },
  { id: 28, name: "Lace Fitted Buba Set", img: [P28], category: "Lady's native dress" },
  { id: 29, name: "Rich Asoebi Kaftan", img: [P29], category: "Lady's native dress" },
  { id: 30, name: "Traditional Owambe Lace", img: [P30, P30b], category: "Lady's native dress" },
    { id: 31, name: "Elegant Bridal Gown", img: [P31, P31b], category: "Bridal wear" },
  { id: 32, name: "Classic White Wedding Dress", img: [P32, P32b], category: "Bridal wear" },
  { id: 33, name: "Lace Mermaid Bridal Dress", img: [P33, P33b], category: "Bridal wear" },
  { id: 34, name: "Off-Shoulder Bridal Ball Gown", img: [P34, P34b], category: "Bridal wear" },
  { id: 35, name: "Satin Bridal Flare Dress", img: [P35], category: "Bridal wear" },
  { id: 36, name: "Bridal Lace Long Sleeve Gown", img: [P36], category: "Bridal wear" },
  { id: 37, name: "Simple Bridal A-Line Dress", img: [P37, P37b], category: "Bridal wear" },
  { id: 38, name: "V-Neck Bridal Gown", img: [P38, P38b], category: "Bridal wear" },
  { id: 39, name: "Beaded Bridal Dress", img: [P39], category: "Bridal wear" },
  { id: 40, name: "Luxury Bridal Lace Dress", img: [P40, P40b], category: "Bridal wear" },
  { id: 41, name: "Tulle Princess Wedding Dress", img: [P41, P41b], category: "Bridal wear" },
  { id: 42, name: "Modern Bridal Gown", img: [P42], category: "Bridal wear" },
  { id: 43, name: "Sparkle Ball Bridal Dress", img: [P43], category: "Bridal wear" },
  { id: 44, name: "Floral Lace Bridal Dress", img: [P44, P44b], category: "Bridal wear" },
  { id: 45, name: "Elegant Mermaid Wedding Dress", img: [P45], category: "Bridal wear" },
  { id: 46, name: "Luxury Satin Bridal Dress", img: [P46], category: "Bridal wear" },
  { id: 47, name: "One-Shoulder Bridal Dress", img: [P47, P47b], category: "Bridal wear" },
  { id: 48, name: "Lace Body-Fit Bridal Gown", img: [P48, P48b], category: "Bridal wear" },
  { id: 49, name: "Bridal Train Gown", img: [P49], category: "Bridal wear" },
  { id: 50, name: "Premium Bridal Lace Dress", img: [P50], category: "Bridal wear" },
  { id: 51, name: "Elegant Work Blazer Dress", img: [P51], category: "Lady's office dress" },
  { id: 52, name: "Corporate Pencil Skirt Set", img: [P52, P52b], category: "Lady's office dress" },
  { id: 53, name: "Formal Two-Piece Suit", img: [P53], category: "Lady's office dress" },
  { id: 54, name: "Classic Office Blouse & Skirt", img: [P54], category: "Lady's office dress" },
  { id: 55, name: "Modern Office Jumpsuit", img: [P55], category: "Lady's office dress" },
  { id: 56, name: "Smart Corporate Gown", img: [P56], category: "Lady's office dress" },
  { id: 57, name: "Executive Two-Piece Suit", img: [P57], category: "Lady's office dress" },
  { id: 58, name: "Chic Office Wrap Dress", img: [P58], category: "Lady's office dress" },
  { id: 59, name: "Professional Shirt Dress", img: [P59, P59b], category: "Lady's office dress" },
  { id: 60, name: "Stylish Office Tunic", img: [P60], category: "Lady's office dress" },
  { id: 61, name: "Formal Work Coat Set", img: [P61], category: "Lady's office dress" },
  { id: 62, name: "Corporate Blazer & Pants", img: [P62], category: "Lady's office dress" },
  { id: 63, name: "Slim Fit Office Gown", img: [P63, P63b], category: "Lady's office dress" },
  { id: 64, name: "Chiffon Work Dress", img: [P64], category: "Lady's office dress" },
  { id: 65, name: "Formal Checked Suit", img: [P65], category: "Lady's office dress" },
  { id: 66, name: "Executive Blazer Dress", img: [P66], category: "Lady's office dress" },
  { id: 67, name: "Corporate Peplum Dress", img: [P67], category: "Lady's office dress" },
  { id: 68, name: "Office Midi Gown", img: [P68], category: "Lady's office dress" },
  { id: 69, name: "Professional Blouse & Trousers", img: [P69], category: "Lady's office dress" },
  { id: 70, name: "Stylish Corporate Dress", img: [P70], category: "Lady's office dress" },
  { id: 71, name: "High Waist Formal Trouser", img: [P71, P71b], category: "Lady's trousers" },
{ id: 72, name: "Elegant Office Pants", img: [P72, P72b], category: "Lady's trousers" },
{ id: 73, name: "Classic Straight-Leg Trouser", img: [P73], category: "Lady's trousers" },
{ id: 74, name: "Wide-Leg Palazzo Pants", img: [P74], category: "Lady's trousers" },
{ id: 75, name: "Slim Fit Office Trouser", img: [P75], category: "Lady's trousers" },
{ id: 76, name: "Casual Cotton Pants", img: [P76], category: "Lady's trousers" },
{ id: 77, name: "High-Rise Stretch Trouser", img: [P77], category: "Lady's trousers" },
{ id: 78, name: "Tailored Fit Pants", img: [P78], category: "Lady's trousers" },
{ id: 79, name: "Formal Flare Trousers", img: [P79], category: "Lady's trousers" },
{ id: 80, name: "Premium Straight Pants", img: [P80], category: "Lady's trousers" },
{ id: 81, name: "Adorable Ofixt Baby Dress", img: [P81], category: "Baby's dress" },
{ id: 82, name: "Little Princess Lace Gown", img: [P82], category: "Baby's dress" },
{ id: 83, name: "Cute Native Toddler Outfit", img: [P83], category: "Baby's dress" },



];

// the part tha handle ths image sent to the whatsapp
const handleWhatsAppClick = (product) => {
  const imageUrl = `${window.location.origin}/${product.img[0]}`;
  const message = `I love this dress: ${product.name}. How much will it cost?\n${imageUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "2349028021101"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};



// where is filter the Images and the Category
 const filteredProducts =
    activeId === 1
      ? collectionProducts 
      : collectionProducts.filter(
          (item) => item.category === categories.find((cat) => cat.id === activeId).name
        );
// end of the filter 
const [firstnumber, setFirstnumber]= useState(16)
const numberofProduct = filteredProducts.slice(0, firstnumber)




    return (
        <div className="collectionspage">
    <div className="oversection" style={{
         backgroundImage: `url(${Seyibrand})`,
    }}>
<div className="contet">
    <div className="collections">
          <h1>Collections</h1>
    </div>
    <div className="collectionsFilter">
 <div className="category-container">
      {categories.map((cat) => (
        <a
          key={cat.id}
          className={`category-link ${activeId === cat.id ? "active" : ""}`}
        onClick={() => { setActiveId(cat.id); setFirstnumber(16);}}
        >
          {cat.name}
        </a>
      ))}
    </div>
    </div>
      
    </div>
    </div>

    <div className="collectionsListing">
        {
          numberofProduct.map((items, index)=>(
                <div key={index} className="itempersonal"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
          <img src={hoveredIndex === index && items.img[1] ? items.img[1]: items.img[0]} alt={items.name}/>
 <FaWhatsapp className="whatsapp-icon" onClick={() => handleWhatsAppClick(items)}/>
            <p>{items.name}</p>
          </div>
            ))
        }

    </div>
  {firstnumber < filteredProducts.length && (
  <div className="loadingMore">
    <button onClick={() => setFirstnumber(prev => prev + 8)}>
      Load more
    </button>
  </div>
)}

        </div>
    )
}

export default Collections;