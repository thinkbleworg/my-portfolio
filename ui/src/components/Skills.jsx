/* src/components/Skills.jsx */
import React, { useEffect, useState } from "react";
import "../styles/skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [imageSources, setImageSources] = useState({}); // Store image sources for each skill
  const fallbackImage = "/images/fallback.png";

  useEffect(() => {
    fetch("/data/skills.json")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
        setImageSources(
          data.reduce((acc, skill) => {
            acc[skill.name] = skill.logo;
            return acc;
          }, {})
        );
      });
  }, []);

  // Function to handle image load errors
  const handleImageError = (skillName) => {
    setImageSources((prevSources) => ({
      ...prevSources,
      [skillName]: fallbackImage,
    }));
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img
              src={imageSources[skill.name] || fallbackImage}
              alt={skill.name}
              onError={() => handleImageError(skill.name)}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
