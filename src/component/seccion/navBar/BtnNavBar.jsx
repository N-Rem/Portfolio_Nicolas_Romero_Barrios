import React from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const BtnNavBar = ({ textBtn, href, img, alt }) => {
  const src = `/public/icons/navbar/icon-${img}.svg`;
  const navigate = useNavigate();

  const buttonHandler = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    
  const url = `/${href}`;
    navigate(url)
  };

  return (
    <div
      className="btn-nav-bar flex-container-row"
      onClick={() => buttonHandler(href)}
    >
      <img src={src} alt={alt} />
      <a>{textBtn}</a>
    </div>
  );
};

BtnNavBar.propTypes = {
  textBtn: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BtnNavBar;
