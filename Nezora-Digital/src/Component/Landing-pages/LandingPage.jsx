import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/tentitive-logo.jpg";
import "./LandingPage.css";
import bgVideo from "../../videos/video-bg.mp4";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Services from "../Services/Services";
import Contactus from "../Contact/Contactus";
import Aboutus from "../About/Aboutus";
import Footer from "../Footer/footer";

function LandingPage({ innerRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
 useEffect(() => {
  const sections = [
    { id: "home", ref: null },
    { id: "about", ref: aboutRef },
    { id: "services", ref: servicesRef },
    { id: "contact", ref: contactRef },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    },
    { threshold: 0.5 }
  );
    sections.forEach(({ ref, id }) => {
    if (ref?.current) {
      ref.current.dataset.section = id;
      observer.observe(ref.current);
    }
  });

  return () => observer.disconnect();
}, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
              {/* TOP INFO BAR */}
<div ref={innerRef} className="top-bar">
  <div className="top-bar-left">

    <div className="top-icon-item">
      <span className="top-icon">
        <FaPhoneAlt />
      </span>
      <span className="top-text">+91 777-500-4428</span>
    </div>

    <div className="top-icon-item">
      <span className="top-icon">
        <FaEnvelope />
      </span>
      <span className="top-text">info@diginexmedia.in</span>
    </div>

  </div>

  <div className="top-bar-right">
    <div className="social-icons-landing">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>
      <a href="https://wa.me/918329553011" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  </div>
</div>



      <header className="main">
        <div
          className="L-img"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>


        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </span>
          <span onClick={() => scrollToSection(aboutRef)}>About Us</span>
          <span onClick={() => scrollToSection(servicesRef)}>Our Services</span>
          <span>Portfolio</span>
          <span onClick={() => scrollToSection(contactRef)}>Contact</span>
{/*           
          <button className="nav-head-button"> +91 777-500-4428</button>
          <button className="nav-head-button">info@diginexmedia.in</button> */}
          <button className="primary-btn-nav" onClick={() => scrollToSection(contactRef)}>Get free demo</button>
      
        </nav>
      </header>

      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
<section className="hero">

  {/* Background Video */}
  <video
    className="hero-bg-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={bgVideo} type="video/mp4" />
  </video>

  {/* Overlay (optional but recommended) */}
  <div className="hero-overlay"></div>

  {/* Hero Content */}
  <div className="hero-content">
    <div className="hero-cta">
      <button
        className="primary-btn"
        onClick={() => scrollToSection(contactRef)}
      >
        Get in Touch
      </button>

      <a
  href="https://drive.google.com/file/d/1cufo1c62I2PMhyt5emHgbmecE9XGrZqS/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="secondary-btn">
    Download Brochure
  </button>
</a>


      {/* <button className="secondary-btn">
        Download Brochure
      </button> */}
    </div>
  </div>

</section>


      {/* ================= WHO WE ARE (VIDEO BG) ================= */}
      <section className="who-section">
        
        {/* Content */}
        <div className="who-container">
          <div className="who-content">
            {/* <h1>Who We Are</h1> */}
           <h1 className="who-title jump-text">
  {"Who We Are".split("").map((char, index) => (
    <span
      key={index}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>


            <p>
              We are not just a digital marketing agency — we are a growth-focused
              team that believes every brand deserves clarity, strategy, and
              measurable success in the digital space.
            </p>

            <p>
              At <strong>DigiNex Media</strong>, we work closely with brands to
              understand their goals, audience, and challenges. Our strategies
              are built on creativity backed by data.
            </p>

            <p>
              We focus on long-term value, not shortcuts — helping brands grow
              consistently and confidently.
            </p>
          </div>

          <div className="who-highlight">
            <h3>What Defines Us</h3>
            <ul className="animate-list">
              <li>Strategy before execution</li>
              <li>Data-backed decision making</li>
              <li>Creative yet performance-driven</li>
              <li>Transparent & collaborative approach</li>
              <li>Long-term growth mindset</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <div ref={aboutRef}>
        <Aboutus />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={contactRef}>
        <Contactus />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
