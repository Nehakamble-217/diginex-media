import React from "react";
import "./footer.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer({ goHome, goAbout, goServices, goContact }) {
  return (
    <footer className="main-footer">
      
      <div className="footer-top">

        {/* Brand Info */}
        <div className="footer-col">
          <h3>DigiNex Media</h3>
          <p>We grow brands through digital strategy & creativity.</p>

          <div className="social-icons">
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

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li onClick={goHome}>Home</li>
            <li onClick={goAbout}>About Us</li>
            <li onClick={goServices}>Services</li>
            <li onClick={goContact}>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>Social Media & Influencer Marketing</li>
            <li>Performance Marketing</li>
            <li>Ad Management</li>
            <li>Branding</li>
            <li>Graphic Design</li>
            <li>Web Design (UI/UX)</li>
            <li>SEO</li>
            <li>Lead Generation</li>
            <li>Campaigns</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Contact Us</h5>
          <div className="contact-item">
            <FaEnvelope />
            <span>info@diginexmedia.in</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 777-500-4428</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DigiNex Media. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
