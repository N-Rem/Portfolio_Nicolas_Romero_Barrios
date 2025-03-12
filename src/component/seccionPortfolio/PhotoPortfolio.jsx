import React from "react";
import NavBar from "/src/component/seccion/navBar/NavBar.jsx";
import PropTypes from "prop-types";
import "./portfolio.css";

const PhotoPortfolio = ({ img, title, subtitle, linkGit, linkPage, date }) => {
  return (
    <div className="flex-container-column portfolio-container">
      <NavBar isForhero={true} />
<div className="date-proyect-container"><p>{date}</p></div>
      <div className="flex-container-column title-portfolio-container">
        <h2>{title}</h2>
        <p> {subtitle}</p>
      </div>
      <div className="photo-portfolio-container flex-container-column">
        <img src={`/public/imgs/portfolio/${img}.svg`} alt={img} />
      </div>

      <div className="icons-portfolio-container flex-container-row">
        {linkGit && (
          <a href={linkGit} target="_blank" aria-label="GitHub">
            <img
              className="git-hub"
              src={"/icons/social/github-icon.svg"}
              alt="git-hub"
            />
          </a>
        )}
        {linkPage && (
          <a href={linkPage} target="_blank" aria-label="page">
            <img className="page" src="/icons/social/earth-icon.svg" alt={title} />
          </a>
        )}
      </div>
    </div>
  );
};
PhotoPortfolio.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkGit: PropTypes.string.isRequired,
  linkPage: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
};

export default PhotoPortfolio;
