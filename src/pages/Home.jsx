import {React, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { Award, Box, Bus, Inbox, CircleCheckBig, Star, Scissors, DollarSign, Truck, Users, ShieldCheck, Dice1, Quote} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Home.css';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Slide1 from "../assets/slide1.jpg";
import Sample from "../assets/sample.jpg";
import Sample2 from "../assets/sample2.jpg";
import Sample3 from "../assets/sample3.jpg";
import Sample4 from "../assets/sample4.jpg";
import Sample5 from "../assets/sample5.jpg";
import Sample6 from "../assets/sample6.jpg";
import Sample7 from "../assets/sample7.jpg";
import Sample8 from "../assets/sample8.jpg";
import Sample9 from "../assets/sample9.jpg";
import Slide2 from "../assets/slid2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Aboutseyi from "../assets/aboutseyi.jpg"
import Spreading from "../assets/spreading1.png"
import Show from "../assets/show1.jpg"
import Show2 from "../assets/show2.jpg"


function Home() {
  const navigate =useNavigate();
  const slides = [
    {
      image: Slide1,
      title: "Unleash Your Style",
      subtitle: "Discover the latest fashion trends",
      button: "Shop Now",
      path: "/collections"
    },
    {
      image: Slide2,
      title: "Redefine Elegance",
      subtitle: "Handcrafted designs for every occasion",
      button: "Explore Collection",
      path: "/collections"
    },
    {
      image: Slide3,
      title: "Be Bold, Be You",
      subtitle: "Wear fashion that speaks confidence",
      button: "Book Appointment",
       path: "/contact"
    },
  ];


  const cloths = [
{
  id:1,
  image:Show,
  overlayText:"Lady's native dress"
  
},
{
  id:2,
  image:Sample2,
  overlayText:"Lady's office dress",

},
{
  id:3,
  image:Show2,
  overlayText:"Lady's trousers"
}
  ]

  const values = [
    {
      id:1,
      icon:<Award size={60}/>,
      value: "Amazing Value Every Day",
      offer: "Great discounts and offers on all Purchase!"
    },
       {
      id:2,
      icon:<Bus size={40+20}/>,
      value: "Deliveries At Accurate Time",
      offer: "Delivery within 3 – 5 Working days."
    },
    ,
       {
      id:3,
      icon:<Inbox size={40+20}/>,
      value: "Adjustment Gurantee",
      offer: "Proper Adjustment if Required."
    }
   
  ]

 const features = [
  {
    icon: <Scissors size={35}/>,
    title: "Handmade Quality",
    desc: "Each outfit is carefully tailored with premium materials.",
  },
  {
    icon: <Star size={35}/>,
    title: "Unique Native Styles",
    desc: "Exclusive designs that stand out at any event.",
  },
  {
    icon: <DollarSign size={35}/>,
    title: "Affordable Pricing",
    desc: "Get luxury native wear without breaking the bank.",
  },
  {
    icon: <Truck size={35}/>,
    title: "Fast Delivery",
    desc: "We deliver your styles quickly and securely.",
  },
  {
    icon: <Users size={35}/>,
    title: "Trusted by Clients",
    desc: "Loved by fashion-forward clients across the country.",
  },
  {
    icon: <ShieldCheck size={35}/>,
    title: "Reliable Service",
    desc: "We ensure your orders are handled with care and professionalism.",
  },
];

const brands = [
  {
    user:"100+",
    brand:"iro & Buba"
  },
   {
    user:"200+",
    brand:"Office Wears"
  },
   {
    user:"100+",
    brand:"Dafifa Styled Design"
  },
   {
    user:"50+",
    brand:"Ankara & Ofi"
  }
]

const reviews = [
    { 
      id:1,
      name: "Adekunbi Justinah.",
      role: "Customer",
      text: "Sheyi-Funmi Stitches made my outfit for my sister’s wedding and I got so many compliments. The quality was top-notch!",
      img: Sample,
    },
    {
      id:2,
      name: "olamide.",
      role: "Client",
      text: "I absolutely love my dress from Sheyi-Funmi Stitches! It fits perfectly, and the attention to detail is just amazing.",
      img:Sample2,
    },
    {
      id:3,
      name: "Abidemi.",
      role: "Customer",
      text: "Affordable pricing but still looks luxury. I’ll definitely order again for my next event.",
      img:Sample3,
    }
    ,
    {
      id:4,
      name: "Racheal.",
      role: "Customer",
      text: "From design to delivery, everything was smooth. Sheyi-Funmi Stitches really understands what you want and brings it to life beautifully..",
      img:Sample4,
    }
    ,
    {
      id:5,
      name: "Titilayo.",
      role: "Customer",
      text: "From the first fitting to the final delivery, everything was smooth. The attention to detail is simply amazing.",
      img:Sample5,
    }
    ,
    {
      id:6,
      name: "Toyin.",
      role: "Customer",
      text: "Sheyi-Funmi Stitches always understands my style. Every outfit I’ve made with them fits perfectly and looks elegant.",
      img:Sample6,
    }
    ,
    {
      id:7,
      name: "Olaoluwa.",
      role: "Customer",
      text: "Affordable pricing but still looks luxury. I’ll definitely order again for my next event.",
      img:Sample7,
    }
    ,
    {
      id:8,
      name: "Christianah.",
      role: "Customer",
      text: " definitely order again for my next event, Clean and Perfect",
      img:Sample8,
    }
    ,
    {
      id:9,
      name: "Ruth.",
      role: "Customer",
      text: "Sheyi-Funmi Stitches is my go-to designer now. She understands my body type and always gives me the perfect fit.",
      img:Sample9,
    }
  ];
const face1 = features.slice(0,3);
const face2 = features.slice(3,6);
const [ownwersquote, setownwersquote] = useState (reviews[0])

  return (
    <>
   <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
    <div className="hero-container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button className="hero-button" onClick={()=> navigate(slide.path)}>{slide.button}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="Subsloths">
      {cloths.map((cloth, index)=>
        <div key={index} className="personalClothing">
          <img src={cloth.image} alt={cloth.overlayText} className="pImage"/>
          <div className="overlaytext">
            <h3>{cloth.overlayText}</h3>
          </div>

        </div>
      )}

    </div>
    {/* view All */}
    <div className="viewAll">
<Link to="/gallery"> <button className="viewbtn">View All</button> </Link>
</div>
{/* View all end */}
    <div className="values">
{values.map((benefit, index)=>(
  <div className="valuesmain">
<div className="iconused">
<p>{benefit.icon}</p>
</div>
<div className="informationBenefits">
  <b>{benefit.value}</b>
  <p>{benefit.offer}</p>
</div>
  </div>
))}
    </div>
    {/* About SeyiStiches */}

    <div className="aboutseyi">
      <div className="aboutInformation">
        <h2>The Journey Behind <span className="personalDesign">SeyiFunmi</span> Stiches</h2>
        <p>Sheyi-Funmi Stitches creates elegant, faith-inspired female 
          fashion pieces sewn to perfection. Every design is carefully 
          crafted to embody confidence, grace, and individuality—helping 
          women look beautiful and feel empowered in every season of life. </p>
<b className="inspo">Why Choose Sheyi-Funmi <span className="personalDesign"> Stitches?</span></b>
<p><CircleCheckBig color="#093FB4" />Faith-Inspired Designs – Clothing that uplifts and empowers. </p>
<p><CircleCheckBig color="#093FB4"/>Perfect Fit & Finish – Each piece is tailored with precision. </p>
<p><CircleCheckBig color="#093FB4"/>Confidence & Grace – Styles that highlight beauty inside and out.</p>
<p><CircleCheckBig color="#093FB4"/>Confidence & Grace – Unique & Personal – Fashion that celebrates individuality.</p>
<p>At Sheyi-Funmi Stitches, we don’t just sew clothes—we create timeless experiences that leave every woman feeling bold, radiant, and unforgettable.</p>




      </div>
      <div className="aboutseyImage">
        <img src={Aboutseyi} alt="the about seyi stiches image" />
        <div className="ceoName">
          <h4>Oladimeji Felicia Oluwaseyi</h4>
          <p>The CEO, Seyifunmi Stiches</p>
          <p>08129059707</p>
        </div>
      </div>
    </div>

    {/* Why chhoose Our Brand */}
<div className="fullChoosingUs">
  <div className="personalWidth">
    <h2>Why Choosing Sheyi-Funmi Stitches?</h2>
  </div>
     <section className="choosingUs">
     
      <div className="face1">
        { face1.map((feature, index)=>(
          <div key={index} className="featuremain">
            <div className="icon">
              <p>{feature.icon}</p>
            </div>
            <div className="textmenu">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
    
      </div>
  <div className="imageBranding">
    <img src={Spreading} alt="One Sample image Spreading Hand" />
  </div>
  <div className="face2">
     { face2.map((feature, index)=>(
          <div key={index} className="featuremain">
            <div className="icon">
              <p>{feature.icon}</p>
            </div>
            <div className="textmenu">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
  </div>
    </section>
    </div>
  {/* end oF Why choose Our Brand */}
  <div className="brands">
   {brands.map((branding, index)=>(
  
    <div key={index} className="brandingItems">
    
      <h3>{branding.user}</h3>
      <p>{branding.brand}</p>
    
    </div>
  
   ))}

  </div>

{/* testimonial Section */}
<div className="whatClientsay">
    <h2 className="what">What Our Clients Say</h2>
        <p className="say">
          Hear from some of our happy clients who trust us with their special outfits.
        </p>
</div>
<div className="testimonial">
  {reviews.map((testimonial, index)=>(
 <div key={index} className={`customer customer-${testimonial.id}`}>
      <img src={testimonial.img} alt="the user profile picture for image" onClick={()=> setownwersquote(reviews[testimonial.id-1])} />
     <div className="UsersName">
      <h3 className="testimonailNAme">{testimonial.name}</h3>

     </div>

    </div>
  
  

  ))}

</div>
    <div className="reviewShowing"> 
      <Quote  size={40} color=" #093FB4"/> 
       <p>{ownwersquote.text}</p>
       <h3 className="diplsynames">{ownwersquote.name}</h3>
      
     
    </div>
{/* end of the Testimonial page */}

{/* last Home Page redirecting to the whatsappPage */}
<div className="lastSection">
<h1>JOIN THE SHEYI-FUNMI FAMILY </h1>

<p>Step into the world of timeless native fashion. Get early access to new designs, special discounts, and style updates.</p>
<a href="https://wa.me/+2349028021101">JOIN NOW</a>
</div>

{/* end of the last Section */}
</div>
     </>
  );
}

export default Home;
