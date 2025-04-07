/* src/components/Experience.jsx */
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../styles/experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/data/experience.json")
      .then((response) => response.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Work Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >            
            <span className={`timeline-dot ${job.current ? "active" : ""}`}></span>
            <div className="timeline-content-wrapper">
              <div className="experience-card">
                <h3 className="position">{job.position}</h3>
                <h4>
                  {job.company}, {job.companyLocation}, {job.companyCountry}
                </h4>
                <p className="date">
                  <FaRegCalendarAlt className="calendar-icon" />
                  <i>{job.date.from} - {job.date.to}</i>
                </p>
                <ul>
                  {job.workSummary.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="tech-skills">
                  <div className="tech-skills">
                    <strong>Tech Skills: {job.techSkills.join(", ")}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
