import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import BtnNavBar from "/src/component/seccion/navBar/BtnNavBar.jsx";
import PropTypes from "prop-types";
import { TranslationContext } from "../../../context/TranslationContext";

const NavBar = ({ isForhero }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const navigate = useNavigate();
  const { btns, textLanguage, onToggleLanguage, close } =
    useContext(TranslationContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowBurger(!showBurger);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 910) {
        setShowBurger(true);
      } else {
        setShowBurger(false);
        setMenuOpen(false); // Cierra el menú si se agranda la pantalla
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth > 910) {
        setShowBurger(true);
      } else if (window.innerWidth > 910) {
        setShowBurger(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Ejecutar una vez al cargar para detectar el tamaño inicial
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenuBurger = () => {
    setMenuOpen(false);
    setShowBurger(true);
  };

  const handlerBtnburger = (href) => {
    // Usamos el hash para encontrar el elemento y hacer scroll
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    const url = `/${href}`;
    navigate(url);

    closeMenuBurger();
  };

  // const btns = [
  //   { textBtn: "Inicio", href: "#home", img: "home", alt: "home" },
  //   { textBtn: "Sobre Mi", href: "#about", img: "about", alt: "about" },
  //   { textBtn: "Experiencia", href: "#exp", img: "exp", alt: "exp" },
  //   { textBtn: "Tecnologias", href: "#tech", img: "tech", alt: "tech" },
  //   {
  //     textBtn: "Portfolio",
  //     href: "#portfolio",
  //     img: "portfolio",
  //     alt: "portfolio",
  //   },
  //   {
  //     textBtn: "Contacto",
  //     href: "#contact",
  //     img: "contacto",
  //     alt: "Contacto",
  //   },
  // ];

  return (
    <header>
      {/* NavBar */}
      {isForhero ? (
        <>
          <div className="menu-navbar-container">
            <div className={`menu`}>
              <div className="flex-container-row btns-navbar">
                {btns.map((btn, i) => (
                  <BtnNavBar
                    textBtn={btn.textBtn}
                    href={btn.href}
                    img={btn.img}
                    alt={btn.alt}
                    key={i}
                  />
                ))}
                <div
                  className="btn-nav-bar flex-container-row"
                  onClick={onToggleLanguage}
                >
                  <img
                    src="/public/icons/navbar/icon-language.svg"
                    alt="icono de mundo"
                  />
                  <button className="language ">{textLanguage}</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Menu burger */}
          <div>
            <div
              className={`menu-burger ${
                showBurger && menuOpen === false ? "visible" : ""
              }`}
            >
              <button
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-controls="menu"
              >
                <img src="/public/icons/navbar/icon-menu.svg" alt="menu" />
              </button>
            </div>
            {menuOpen && (
              <div className="menu-burger-container">
                <div className="menu-burger-content">
                  <button
                    onClick={onToggleLanguage}
                    className="language p-btn "
                  >
                    {textLanguage}
                  </button>
                  {btns.map((btn, i) => (
                    <a
                      key={i}
                      className="p-btn"
                      onClick={() => handlerBtnburger(btn.href)}
                    >
                      {btn.textBtn}
                    </a>
                  ))}

                  <button className="p-btn" onClick={closeMenuBurger}>
                    {close}
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

NavBar.propTypes = {
  isForhero: PropTypes.bool.isRequired,
};

export default NavBar;
