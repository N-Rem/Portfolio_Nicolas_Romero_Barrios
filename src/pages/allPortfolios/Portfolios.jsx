import React, { useContext } from "react";
import GenericPortfolio from "/src/component/genericPortfolio/GenericPortfolio.jsx";
import "./portfolios.css";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const Portfolios = () => {
  const { sectionPortfolios, sectionPortfoliosPortfolio } =
    useContext(TranslationContext);

  const proyects = sectionPortfoliosPortfolio.filter(
    (card) => card.Portfolio == "Proyect"
  );
  const colabs = sectionPortfoliosPortfolio.filter(
    (card) => card.Portfolio == "Colab"
  );

  return (
    <div id="portfolio" className="flex-container-column">
      <h2 className="title-portfolio">{sectionPortfolios.title}</h2>
      {proyects.length > 0 && (
        <GenericPortfolio
          subtitle={sectionPortfolios.subtitle1}
          cards={proyects}
        />
      )}
      {colabs.length > 0 && (
        <GenericPortfolio
          subtitle={sectionPortfolios.subtitle2}
          cards={colabs}
        />
      )}
    </div>
  );
};

export default Portfolios;
