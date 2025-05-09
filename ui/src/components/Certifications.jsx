import React, { useState } from "react";
import "../styles/certifications.css";

const Certifications = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {[...certifications].reverse().map((cert, idx) => (
          <div key={idx} className="cert-card" onClick={() => setSelectedCert(cert)}>
            <img src={cert.badge} alt={cert.title} />
            <p className="cert-title">{cert.title}</p>
            <p className="cert-date">{cert.date}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe src={selectedCert.pdf} title={selectedCert.title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;