/* src/components/About.jsx */
import React from "react";
import "../styles/about.css";

const About = ({aboutData}) => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>{aboutData.description}</p>
    </section>
  );
};

export default About;
