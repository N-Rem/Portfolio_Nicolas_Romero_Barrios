import { React, useState } from 'react';
import '../navBar/navBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      if (!menuOpen) {
          document.body.classList.add('open');
      } else {
          document.body.classList.remove('open');
      }
  };
  


  return (
    <header className={menuOpen ? 'open' : ''}>     
        <button
          className="navbar-burger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu">
        </button>
      <div className={`menu ${menuOpen ? 'visible' : ''}`}>
        <a href="#hero" className="navbar-logo">
          <img src="/Logo-completo.svg" alt="Logo Nicolas Romero Barrios" />
        </a>
        <nav>
            <a href="#hero">Home</a>
            <a href="#portfolio">Portfolio?</a>
            <a href="#experience">Educacion</a>
            <a href="#about">Acerca de mi</a>
            <a href="#contact">Contacto</a>
            {/* <div className="navbar-language" onClick={handleLanguageToggle}>
              <picture className='icon-language-container'>
                <img className='icon-language'  src="/icons/icon-language.svg" alt="icono de mundo" />
              </picture>
              <button className="language">{i18n.language.toUpperCase()}</button>
            </div> */}
        </nav>
      </div>
    </header>
  )
}

export default NavBar
