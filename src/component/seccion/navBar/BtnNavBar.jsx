import React from "react";

import PropTypes from "prop-types";

const BtnNavBar = ({ textBtn, href, img, alt }) => {
  const link = `#${href}`;
  const src = `/public/icons/navbar/icon-${img}.svg`;

  return (
    <div className="btn-nav-bar">
      <img src={src} alt={alt} />
      <a className="p-btn" href={link}>
        {textBtn}
      </a>
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
