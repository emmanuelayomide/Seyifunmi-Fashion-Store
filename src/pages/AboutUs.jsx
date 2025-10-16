import React from "react";
import { Layers, Scissors, Syringe, Shirt } from "lucide-react";

import "./About.css";
import Shopimage from "../assets/shopimage.jpg"
import Seyibrand from "../assets/ab3.png"
import Aboutus from "../assets/abputus.jpg"
import Ceo1 from "../assets/ceo1.jpg";
import Ceo2 from "../assets/ceo2.jpg";
import Ceomain from "../assets/i3.jpg";


const AboutUs =()=>{
 const steps = [
    {
      id: 1,
      icon: <Layers size={32} />,
      title: "Selecting Quality Fabric",
      desc: "Every outfit begins with carefully chosen native materials.",
    },
    {
      id: 2,
      icon: <Scissors size={32} />,
      title: "Precise Cutting",
      desc: "Our tailors cut each piece with accuracy to ensure the perfect fit.",
    },
    {
      id: 3,
      icon: <Syringe size={32} />,
      title: "Skilled Sewing",
      desc: "Each fabric is sewn with attention to detail.",
    },
    {
      id: 4,
      icon: <Shirt size={32} />,
      title: "Final Finishing",
      desc: "The final design is pressed, styled, and displayed — ready to make you stand out.",
    },
  ];

  const ourteam = [

    {
        id:1, 
        img :Ceo1,
        name:"Adeolu Oyenike"
       
    },
      {
        id:2,
         img :Ceomain,
        name:"Oladimeji Felicia Oluwaseyi",
        personal:"CEO",
        brandName:"Oladimeji Felicia Oluwaseyi"
        
       
    },
      {
        id:1,
        img :Ceo2,
        name:"olamide Gbotemi"
        
    }
  ]

    return (
      <div data-aos="fade-up">
        <div className="AboutUspaageOverall">

        <div className="shopimage" style={{
        backgroundImage: `url(${Shopimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        gap:"0px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        color: "white",
      }}>
         <div className="textInsideShop">
        <h1>About US</h1>
        <p>Crafting timeless native wear that celebrates culture, confidence, and class.</p>
     </div>
    </div>

    <div className="subIntroduction">
        <div className="twoSubsection">
            <div className="firstSection">
                <h2>We Are the Unique  Native Fashion Brand</h2>
                <p>At Sheyi-Funmi Stitches, we believe fashion is more than fabric — it’s a story of heritage, creativity, and pride.

Our journey began with a deep love for African culture and the timeless beauty of native fashion. Each outfit we create is carefully handcrafted, blending traditional artistry with a modern sense of style.

From casual wear to elegant occasion pieces, we design with passion, precision, and purpose — ensuring every stitch reflects confidence, comfort, and class.

Our mission is simple:
to make you look your best while staying true to your roots.

Sheyi-Funmi Stitches — where culture meets confidence.</p>

            </div>
            <div className="secondSection">
                <img src={Seyibrand} alt="the brand Owner image" />

            </div>
        </div>

    </div>

<div className="theshopimage">
 <div className="imagesection">
   <img src={Aboutus} alt="the shop image" />
 </div>
 <div className="workprocess">
    <h2 className="tailoring">Our Tailoring Process</h2>
    <p className="tailoring2">
        From raw fabric to a finished masterpiece, every outfit passes through
        a careful process handled by skilled hands and creative minds.
      </p>

    <div className="tailorigProcesses">
            {steps.map((step, index)=>(
                <div key={index} className="iconi" > 
               <div className="icons">
                <b>{step.icon}</b>
               </div>
               <div className="texticon">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>

               </div>
                
                </div>
             
            ))}
        </div>




 </div>
</div>

{/* the team section */}
 <div className="teamtitle">
    <h2>Meet Our Team</h2>
    <p>We are the BAck-Bone</p>
 </div>
<div className="meetOurteam">
    {ourteam.map((team, index)=>(
        <div key={index} className="teamsection">
            <img src={team.img} alt={team.name} className="images"/>
            <div className="nameSection">
                <h3>{team.name}</h3>
            </div>
            <div className="personal">
                <h3>{team.personal}</h3>
                <b>{team.brandName}</b>
            </div>
        </div>
    ))}
   
</div>
{/* end of the Team section */}
        </div>
        </div>
    )
}
export default AboutUs;