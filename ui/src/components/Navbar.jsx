import React, { useState, useContext, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/navbar.css";

const sections = ["home", "about", "experience", "skills", "certifications", "contact"];

const Navbar = ({ name }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    window.location.hash = id;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 80) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // force close on resize to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">{name}</div>

      <div className="navbar-controls">
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {sections.map(
            (section) => (
              <li
                key={section}
                className={activeSection === section ? "active" : ""}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            )
          )}
        </ul>

        <div className="navbar-right">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
