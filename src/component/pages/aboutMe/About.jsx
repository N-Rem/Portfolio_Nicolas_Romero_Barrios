import React from "react";
import "./about.css";
import ButtonCv from "../../buttons/ButtonCv";

const About = () => {
  // const { t, i18n } = useTranslation();

  // const cvNRB  = t("about.cvFile");
  const cvNicolasRomeroBarrios = 'Nicolás-Romero-Barrios-cv-en';
  const cvRout = '/public/cvs/Nicolás-Romero-Barrios-cv-en.pdf';
  
  return (
    <div className="flex-container-column">
      <h2 id="about">Acerca de mi</h2>
      <div className="about-container flex-container-row">
        <div className="photo-container">
          <img alt="my-photo" src="/public/imgs/photo-redona.svg" />
        </div>
        <div className="content-container flex-container-column">
          <p>
            Soy un desarrollador Full-Stack que disfruta de la tecnología, la
            programación y la resolución de problemas. Me destaco por mi
            habilidad de aprender de manera autodidacta, y por mi adaptabilidad
            y trabajo en equipo. Me gusta enfrentar desafíos que me permitan
            mejorar mis habilidades y adquirir nuevos conocimientos.
          </p>
          <p>
            En 2024 me gradué como Técnico Universitario en Programación en la
            Universidad Tecnológica Nacional. Cuento con experiencia en
            desarrollo backend así como en frontend.
          </p>
          <p className="pharagraf-machin">
            Busco una oportunidad para aplicar mis conocimientos en proyectos
            reales, seguir creciendo profesionalmente y contribuir a un equipo
            de desarrollo con compromiso y responsavilidad.<span>&#160;</span>
          </p>
        </div>
      </div>
      <div className="buttonCv-container flex-container-column">
        <p>
          Puedes descargar mi Curriculum Vitae a continuación para más
          información.
        </p>
        <a 
        href={cvRout}
        download={cvNicolasRomeroBarrios}>
          <ButtonCv text="Descargar CV" />
        </a>
      </div>
    </div>
  );
};

export default About;
