import { React } from "react";
import Grafo from "../grafo/Grafo";
import NavBar from "/src/component/seccion/navBar/NavBar.jsx";
import LinkSocial from "/src/component/linkSocial/LinkSocial.jsx";
import "./hero.css";

const Hero = () => {
  return (
    <div className="flex-container-column hero-container ">
      <div className="nav-container">
        <NavBar isForhero={true} />
      </div>
      <div className="grafo-container">
        <Grafo />
      </div>
      <div>
        <h1>Nicolas Romero Barrios</h1>
        <h2>Developer FullStack</h2>
      </div>
      <div className="social-container">
        <LinkSocial isForhero={true}/>
      </div>
    </div>
  );
};

export default Hero;
