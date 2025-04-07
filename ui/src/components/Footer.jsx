import React from "react";
import "../styles/footer.css";

const Footer = ({name}) => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
