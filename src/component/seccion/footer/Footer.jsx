import React from "react";

import "./footer.css";
import LinkSocial from "../../linkSocial/LinkSocial";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const btns = [
    { textBtn: "Inicio", href: "/#home" },
    { textBtn: "Tecnologias", href: "/#tech" },
    {
      textBtn: "Portfolio",
      href: "/#portfolio",
    },
    {
      textBtn: "Contacto",
      href: "/#contact",
    },
  ];

  const navegate = useNavigate();

  const handlerBtnNav = (url) => {
    navegate(url);
  };

  return (
    <footer>
      <div className="footer-container flex-container-row">
        <div className="content-name">
          <a className="p-btn" onClick={() => handlerBtnNav("/#home")}>
            <h1>Nicolas Romero barrios</h1>
          </a>
          <h2>Developer FullStack</h2>
          <p>Aprendiendo constantemente para brindar soluciones</p>
        </div>

        <div className="content-social-copy">
          <LinkSocial />
          <div className="copyright">
            <p>@2025 Desarrollado por Nicolas Alejandro Romero Barrios.</p>
          </div>
        </div>

        <div className="content-nav">
          {btns.map((btn, i) => (
            <a
              key={i}
              className="p-btn"
              onClick={() => handlerBtnNav(btn.href)}
            >
              {btn.textBtn}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
