import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Contactus.css";
import Swal from "sweetalert2";


const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fbqzfh", 
        "template_uigk7ti", 
        form.current,
        "adtPE_EPbYOO0xrlb" 
      )
     .then(
  (result) => {
    console.log(result.text);
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been sent successfully. We'll get back to you soon!",
      confirmButtonColor: "#093FB4", 
    });
    form.current.reset();
  },
  (error) => {
    console.log(error.text);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to send your message. Please try again later.",
      confirmButtonColor: "#093FB4",
    });
  }
);
  };

  return (
    <div data-aos="slide-up" data-aos-delay="200" data-aos-duration="1200">
    <section className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          Stop by our stores to learn the stories behind our products, get a personal
          styling session, or shop the latest in person.
        </p>
      </div>

      <div className="overall">
        <div className="contact-container">
          <div className="contact-left">
            <h3>Contact</h3>
            <p>We’d love to hear from you.</p>
            <div className="contact-info">
              <p>
                <MapPin size={16} /> Kuye, Ogbomoso,Oyo state.
              </p>
              <p>
                <Phone size={16} /> +2349028021101 , +2347076217682

              </p>
              <p>
                <Mail size={16} /> oladimejifelicia2020@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-right">
            <h3>Contact Me</h3>
            <p>
              Fields marked with an <span className="required">*</span> are required
            </p>

            
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name *" required />
              <input type="email" name="email" placeholder="Email *" required />
              <textarea name="message" placeholder="Message *" rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contactus;
