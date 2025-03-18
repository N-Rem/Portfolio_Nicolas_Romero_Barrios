import React, { useContext } from "react";
import GenericPortfolio from "/src/component/genericPortfolio/GenericPortfolio.jsx";
import "./portfolios.css";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const Portfolios = () => {
  const { sectionPortfolios, sectionPortfoliosPortfolio } = useContext(TranslationContext);
 
  return (
    <div id="portfolio" className="flex-container-column">
      <h2 className="title-portfolio">{sectionPortfolios.title}</h2>
      <GenericPortfolio
        subtitle={sectionPortfolios.subtitle1}
        cards={sectionPortfoliosPortfolio.filter((card) => card.Portfolio == "Proyect")}
      />
      <GenericPortfolio
        subtitle={sectionPortfolios.subtitle2}
        cards={sectionPortfoliosPortfolio.filter((card) => card.Portfolio == "Colab")}
      />
    </div>
  );
};

export default Portfolios;
