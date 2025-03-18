import React, { useContext } from "react";

import "./footer.css";
import LinkSocial from "../../linkSocial/LinkSocial";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from "../../../context/TranslationContext";

const Footer = () => {
  const { sectionFooterSlogan, sectionFooterCopyrigt, sectionFooterBtn } =
    useContext(TranslationContext);



  const navegate = useNavigate();

  const handlerBtnNav = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    const url = `/${href}`;
    navegate(url);
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
            <p>{sectionFooterCopyrigt}</p>
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
