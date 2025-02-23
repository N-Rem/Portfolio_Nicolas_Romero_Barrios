import { React, useState } from "react";
import "./navBar.css";
import BtnNavBar from "/src/component/seccion/navBar/BtnNavBar.jsx";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  };

  // const handleLanguageToggle = () => {
  //   const newLang = i18n.language === "ES" ? "EN" : "ES";
  //   i18n.changeLanguage(newLang); // Cambia el idioma
  // };

  const btns = [
    { textBtn: "Inicio", href: "Home", img: "home", alt: "home" },
    { textBtn: "Sobre Mi", href: "About", img: "about", alt: "about" },
    { textBtn: "Experiencia", href: "Exp", img: "exp", alt: "exp" },
    { textBtn: "Tecnologias", href: "Tech", img: "tech", alt: "tech" },
    { textBtn: "Portfolio", href: "Portfolio", img: "portfolio", alt: "portfolio"},
    { textBtn: "Contacto", href: "Contact", img: "contacto", alt: "Contacto" },
  ];

  return (
    <header
      className={
        menuOpen ? "open, flex-container-column" : "flex-container-column"
      }
    >
      <button
        className="navbar-burger"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="menu"
      ></button>
      <div className={`menu ${menuOpen ? "visible" : ""}`}>
        <nav className="nav">
          <div className="btns-navbar">
            {btns.map((btn, i)=>(
              <BtnNavBar
              textBtn={btn.textBtn}
              href={btn.href}
              img={btn.img}
              alt={btn.alt}
              key={i}
            />
            ))}

            <div className="btn-nav-bar">
              <img src="/public/icons/navbar/icon-language.svg" alt="icono de mundo" />
              <button className="language p-btn">ES</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
