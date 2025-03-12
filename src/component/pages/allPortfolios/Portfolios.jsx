import React from "react";
import GenericPortfolio from "../../genericPortfolio/GenericPortfolio";


const Portfolios = () => {
  const cardPortfolioColab = [
    {
      id:1,
      title: "Portfolio Samuel Carranza",
      img: "portfolioSC",
      subtitle:
        "Landing page desarrollada en React para exhibir el trabajo profesional de un fotógrafo y editor de videos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      Responsibilities:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      tech: [
        { name: "CSS", route: "css-icon" },
        { name: "git hub", route: "github-icon" },
        { name: "git", route: "git-icon" },
        { name: "HTML", route: "html-icon" },
        { name: "javaScript", route: "js-icon" },
        { name: "React", route: "react-icon" },
        { name: "VS Code", route: "vsCode-icon" },
      ],
    },
    {
      id:2,
      title: "Portfolio Samuel Carranza",
      img: "portfolioSC",
    },
    {
      id:3,
      title: "Portfolio Samuel Carranza",
      img: "portfolioSC",
    },
    {
      id:4,
      title: "Portfolio Samuel Carranza",
      img: "portfolioSC",
    },
  ];

  const cardPortfolioProyectos = [{}, {}];

  return (
    <div id="portfolio" className="flex-container-column">
      <h2>Portfiolio</h2>
      <GenericPortfolio subtitle={"Proyectos"} cards={cardPortfolioProyectos} />
      <GenericPortfolio subtitle={"Colaboraciones"} cards={cardPortfolioColab} />
    </div>
  );
};

export default Portfolios;
