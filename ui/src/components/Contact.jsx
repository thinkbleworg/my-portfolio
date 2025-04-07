/* src/components/Contact.jsx */
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/contact.css";

const Contact = ({aboutData}) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
  <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h3>Have an idea? Let's connect</h3>
          <p>
            <FaEnvelope />
            <a  href={`mailto:${aboutData.email}`}>{aboutData.email}</a>
          </p>
          <p>
            <FaPhone />
            <a href={`tel: ${aboutData.mobileNumber}`}>{aboutData.mobileNumber}</a>
          </p>
          <div className="social-icons">
            <a href={aboutData.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={aboutData.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
