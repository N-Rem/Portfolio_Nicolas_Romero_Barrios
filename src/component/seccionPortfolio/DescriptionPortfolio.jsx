import React from "react";
import SliderTech from "../sliderTech/SliderTech";
import PropTypes from "prop-types";
import "./portfolio.css";

const DescriptionPortfolio = ({ description, responsibilities, techs }) => {
  console.log(techs[0].route);
  return (
    <div className="flex-container-column portfolio-container">
      <div className="content-portfolio-container flex-container-column">
        <h3>Description</h3>
        <p>{description}</p>

        <h3>Responsibilities</h3>
        <p>{responsibilities}</p>
        <h3>Tecnologia Utilizadas</h3>
        <SliderTech forTechnologies={false} techs={techs} />
      </div>
    </div>
  );
};

DescriptionPortfolio.propTypes = {
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
};

export default DescriptionPortfolio;
