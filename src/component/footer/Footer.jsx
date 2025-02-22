import React from "react";

import "../footer/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="foteer-container">
        <div className="footer-logo">
          <a href="#hero" className="logo-icon-container">
            <img
              className="logo-icon"
              src="/Logo-completo.svg"
              alt="Logo Nicolas Romero barrios"
            />
          </a>
          <span className="footer-phrase">
            Aprendiendo constantemente para brindar soluciones
          </span>
        </div>
        <div className="footer-social">
          <span>Encontrame acá</span>
          <div className="container-redes">
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                className="icon-linkedin"
                src="/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://para embiar un email.com"
              target="_blank"
              aria-label="e-mail"
            >
              <img
                className="icon-email"
                src="/icons/e-mail-icon.svg"
                alt="e-mzil"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-content">
          @2025 Desarrollado por Nicolas Alejandro Romero Barrios.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
