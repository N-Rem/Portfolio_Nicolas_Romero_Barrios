import React, { useContext } from "react";

import "./footer.css";
import LinkSocial from "../../linkSocial/LinkSocial";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from "../../../context/TranslationContext";

const Footer = () => {
  const { sectionFooterSlogan, sectionFooterCopyright, sectionFooterBtn } =
    useContext(TranslationContext);

  const navigate = useNavigate();

  const handlerBtnNav = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
      setTimeout(() => {
        const newTarget = document.querySelector(href);
        if (newTarget) {
          newTarget.scrollIntoView({ behavior: "smooth" });
        }
      }, 50); // Espera 500ms para que la nueva página cargue antes de hacer scroll
    }

    const url = `/${href}`;
    navigate(url);
  };

  return (
    <footer>
      <div className="footer-container flex-container-row">
        <div className="content-name ">
          <a className="p-btn" onClick={() => handlerBtnNav("#home")}>
            <h1>Nicolas Romero barrios</h1>
          </a>
          <h2>Developer FullStack</h2>
          <p>{sectionFooterSlogan}</p>
        </div>

        <div className="content-social-copy">
          <LinkSocial />
          <div className="copyright">
            <p>{sectionFooterCopyright}</p>
          </div>
        </div>

        <div className="content-nav">
          {sectionFooterBtn.map((btn, i) => (
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
