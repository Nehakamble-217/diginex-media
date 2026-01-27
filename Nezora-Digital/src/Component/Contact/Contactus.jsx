import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus.css";

function Contactus({ innerRef }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  const serviceid = "service_ai7pnim";
  const publickey = "vaZhXnw1bs7hLGcPr";
  const admin_teplateid = "template_n0vevqi";
  const autoreplytemplateid = "template_oye6q3p";

  // 1️⃣ ADMIN MAIL
  emailjs
    .sendForm(
      serviceid,
      admin_teplateid,   //ADMIN TEMPLATE ID
      e.target,
      publickey
    )
    .then(() => {
      // 2️⃣ AUTO-REPLY MAIL
      return emailjs.sendForm(
        serviceid,
        autoreplytemplateid, // AUTO-REPLY TEMPLATE ID
        e.target,
        publickey
      );
    })
    .then(() => {
      setLoading(false);
      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        window.location.href =
          "https://wa.me/917775004428?text=Hello%20DigiNex%20Media,%20I%20have%20an%20enquiry.";
      }, 2000);
    })
    .catch(() => {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    });
};

  return (
    <section ref={innerRef} className="contact-section">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Let’s grow your brand digitally. Get in touch with us.</p>
          <p><strong>Phone:</strong> +91 777 500 4428</p>
          <p><strong>Email:</strong> diginexmedia@gmail.com</p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && <p className="error-msg">{error}</p>}

            {success && (
              <p className="success-msg">
                ✅ Message sent successfully! Redirecting to WhatsApp…
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contactus;
