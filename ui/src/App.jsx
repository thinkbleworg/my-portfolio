import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [aboutData, setAboutData] = useState({});
  const [certificationsData, setCertificationsData] = useState([]);

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data));
  }, []);

  useEffect(() => {
    console.log("certification call");
    fetch("/data/certifications.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("certifications", data);
        setCertificationsData(data)
      
      });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <Navbar name={aboutData.name} />
      <Hero aboutData={aboutData} />
      <About aboutData={aboutData} />
      <Experience />
      <Skills />
      {certificationsData && <Certifications certifications={certificationsData} />}
      <Contact aboutData={aboutData} />
      <Footer name={aboutData.name} />
    </div>
  );
}

export default App;
