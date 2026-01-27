import React from "react";
import "./Aboutus.css";

function Aboutus({ innerRef }) {
  return (
    <section ref={innerRef} className="about-section">
      <div className="about-container">

        {/* LEFT : ARROW + TARGET */}
        <div className="target-area">

          {/* Arrow line */}
          <div className="arrow-line"></div>

          {/* Arrow head */}
          <div className="arrow-head">➤</div>

          {/* Target */}
          <div className="target">
            <div className="ring ring-outer"></div>
            <div className="ring ring-inner"></div>
            <div className="bullseye"></div>
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div className="about-content">
          <h1>About Us</h1>

          <p>
                <strong>DigiNex Media</strong> is a full-service digital marketing
            agency focused on helping brands grow and succeed in the digital
            space. We work closely with businesses to build strong online
            presence through strategic planning, creative execution, and
            performance-driven marketing solutions.
          </p>
          <br />
          <p>
                From social media and influencer marketing to performance ads,
            branding, web design, SEO, and lead generation, we provide end-to-end
            digital services under one roof. By combining creativity with data
            and insights, we help brands connect, perform, and grow with
            confidence.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Aboutus;
