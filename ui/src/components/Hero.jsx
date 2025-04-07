import React from "react";
import "../styles/hero.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = ({ aboutData }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src="/images/profile-pic.jpg" alt="Profile" />
        </div>
        <div className="hero-content">
          <h1>{aboutData.name}</h1>
          <p>{aboutData.shortBio}</p>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn primary">
              <FaDownload /> Resume
            </a>
            <a
              href={aboutData.github}
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              <FaGithub />
            </a>
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;