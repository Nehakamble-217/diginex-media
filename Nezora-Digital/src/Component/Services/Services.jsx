import React from "react";
import "./services.css";

function Services({ innerRef }) {
 const services = [
  {
    title: "Social Media & Influencer Marketing",
    desc: "Build brand presence and engagement through strategic content and influencers.",
    back: "Grow your audience, boost engagement, and build trust through impactful social and influencer campaigns.",
  },
  {
    title: "Performance Marketing",
    desc: "Data-driven paid campaigns focused on leads, conversions, and ROI.",
    back: "Maximize conversions and ROI with data-led performance advertising strategies.",
  },
  {
    title: "Ad Management",
    desc: "End-to-end management of Facebook, Instagram, and Google Ads.",
    back: "We plan, manage, and optimize ads to deliver measurable business results.",
  },
  {
    title: "Branding",
    desc: "Create a strong and memorable brand identity that stands out.",
    back: "Build a consistent brand identity that connects, converts, and lasts.",
  },
  {
    title: "Graphic Design",
    desc: "Creative designs for social media, ads, and brand communication.",
    back: "Visually compelling designs that strengthen your brand presence everywhere.",
  },
  {
    title: "Web Design (UI/UX)",
    desc: "User-focused, responsive designs that convert visitors.",
    back: "Design experiences that are intuitive, responsive, and conversion-focused.",
  },
  {
    title: "SEO",
    desc: "Optimize your website to rank higher and drive organic traffic.",
    back: "Improve visibility and attract quality traffic with smart SEO strategies.",
  },
  {
    title: "Lead Generation",
    desc: "Generate high-quality leads through strategic funnels and campaigns.",
    back: "Drive consistent, high-quality leads that help your business grow faster.",
  },
  {
    title: "Campaign Management",
    desc: "Plan and execute impactful digital campaigns end-to-end.",
    back: "Execute powerful campaigns that create reach, engagement, and results.",
  },
];

  return (
    <section ref={innerRef} className="services-section">
      <h1 className="services-title">Our Digital Marketing Solutions</h1>
      <p className="services-subtitle">We deliver reliable, result-focused services tailored to your digital growth.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-inner">
              {/* Front Side */}
              <div className="service-card-front">
                <h2>{service.title}</h2>

                <br />
                 <p>{service.desc}</p>
              </div>

              {/* Back Side */}
              <div className="service-card-back">
                <h2>{service.title}</h2>
                <br />
                <p>{service.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
