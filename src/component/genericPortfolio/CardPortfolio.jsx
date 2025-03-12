import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./genericPortfolio.css";

const CardPortfolio = ({ title, img, url, id }) => {
  const navegate = useNavigate();

  const clickHandler = (id) => {
    const route = '/portfolio/:' + (id.toString())
    navegate(route);
  };

  return (
    <div
      onClick={()=>{clickHandler(id)}}
      className="card-portfolio-container"
    >
      <div className="flex-container-column card">
        <img src={`/public/imgs/portfolio/${url}.svg`} alt={img} />
        <h3 className="titleProyect">
          {title}
          <span className="effect"></span>
        </h3>
      </div>
    </div>
  );
};

CardPortfolio.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default CardPortfolio;
