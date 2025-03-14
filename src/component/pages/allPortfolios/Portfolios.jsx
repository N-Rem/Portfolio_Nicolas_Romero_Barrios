import React from "react";
import GenericPortfolio from "../../genericPortfolio/GenericPortfolio";
import './portfolios.css'

const Portfolios = () => {
  const cardPortfolio = [
    {
      id: "1",
      Portfolio: "Proyect",
      title: "Portfolio Samuel Carranza 1",
      img: "portfolioSC",
      urlProyect: "/proyect",
      subtitle:"Landing page desarrollada en React para exhibir el trabajo profesional de un fotógrafo y editor de videos.",
      description: "Landing page visualmente atractiva desarrollada en React que destaca el trabajo profesional de Samuel como fotógrafo y editor de videos. El sitio presenta una galería dinámica de fotografías y videos, complementada con secciones sobre su trayectoria profesional y experiencia laboral. La página incluye una sección 'Sobre mí' que permite conocer más sobre su historia y pasión por la fotografía, además de un formulario de contacto para potenciales clientes. El diseño minimalista y elegante permite que el contenido visual sea el protagonista, creando una experiencia inmersiva para los visitantes.",
      responsibilities: "Como desarrollador, fui responsable de la implementación de componentes y seguir el diseño realizado en figma. Me enfoqué en crear una experiencia de usuario fluida y atractiva, desarrollando elementos personalizados como la galería de imágenes tipo polaroid, la sección de experiencia y el coso t la cosa. Aseguré que el diseño fuera completamente responsivo para garantizar una experiencia óptima en todos los dispositivos.",
      tech: [
        { name: "CSS", route: "css-icon" },
        { name: "git hub", route: "github-icon" },
        { name: "git", route: "git-icon" },
        { name: "HTML", route: "html-icon" },
        { name: "javaScript", route: "js-icon" },
        { name: "React", route: "react-icon" },
        { name: "Visual Studio", route: "visualStudio-icon" },
       ],
       linkPage: 'https://samuel-carranza.vercel.app/',
       linkGit: 'https://github.com/Codelens-work/-Portfolio-Samuel-Carranza',
       date: 'Fecha: Diciembre 2025',
    },
    {
      id: "2",
      Portfolio: "Colab",
      title: "Portfolio Proyecto 2",
      img: "portfolioSC2",
      urlProyect: "/proyect",
      subtitle: "Descripción del segundo proyecto...",
      description: "Lorem ipsum dolor sit amet...",
      responsibilities: "Lorem ipsum dolor sit amet...",
      tech: [
        { name: "CSS", route: "css-icon" },
        { name: "GitHub", route: "github-icon" },
      ],
      linkPage: '',
      linkGit: ''
    },
    {
      id: "3",
      Portfolio: "Colab",
      title: "Portfolio Proyecto 2",
      img: "portfolioSC2",
      urlProyect: "/proyect",
      subtitle: "Descripción del segundo proyecto...",
      description: "Lorem ipsum dolor sit amet...",
      responsibilities: "Lorem ipsum dolor sit amet...",
      tech: [
        { name: "CSS", route: "css-icon" },
        { name: "GitHub", route: "github-icon" },
      ],
      linkPage: '',
      linkGit: ''
    },
    {
      id: "4",
      Portfolio: "Colab",
      title: "Portfolio Proyecto 2",
      img: "portfolioSC2",
      urlProyect: "/proyect",
      subtitle: "Descripción del segundo proyecto...",
      description: "Lorem ipsum dolor sit amet...",
      responsibilities: "Lorem ipsum dolor sit amet...",
      tech: [
        { name: "CSS", route: "css-icon" },
        { name: "GitHub", route: "github-icon" },
      ],
      linkPage: '',
      linkGit: ''
    },
  ];


  return (
    <div id="portfolio" className="flex-container-column">
      <h2 className='title-portfolio'>Portfiolio</h2>
      <GenericPortfolio subtitle={"Proyectos"} cards={cardPortfolio.filter((card)=>card.Portfolio == 'Proyect')} />
      <GenericPortfolio subtitle={"Colaboraciones"} cards={cardPortfolio.filter((card)=>card.Portfolio == 'Colab')} />
    </div>
  );
};

export default Portfolios;
