import React from "react";
import PropTypes from "prop-types";
import CardPortfolio from "./CardPortfolio";
import "./genericPortfolio.css";

const GenericPortfolio = ({ subtitle, cards }) => {
  return (
    <div className="flex-container-column portfolio-container">
      <h2>Portfiolio</h2>
      <h3 >{subtitle}</h3>
      <div className="cards-portfolios-container">
        {cards.map((card, i) => (
          <CardPortfolio
            title={card.title}
            img={card.img}
            url={card.img}
            key={i}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

GenericPortfolio.propTypes = {
  subtitle: PropTypes.string,
  cards: PropTypes.array,
};

export default GenericPortfolio;
