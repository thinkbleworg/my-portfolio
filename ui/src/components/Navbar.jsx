import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/navbar.css";

const Navbar = ({name}) => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.location.hash = id;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">{name}</div>
      <ul className="navbar-links">
        {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
          <li key={section} onClick={() => scrollToSection(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;