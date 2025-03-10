import React from "react";
import "./sliderTech.css";

const SliderTech = () => {
  const iconTech = [
    { name: "C Sharp", route: "csharp-icon" },
    { name: "CSS", route: "css-icon" },
    { name: "Dot Net", route: "dotNet-icon" },
    { name: "git hub", route: "github-icon" },
    { name: "git", route: "git-icon" },
    { name: "Google Sheet", route: "googleSpreadsheet-icon" },
    { name: "HTML", route: "html-icon" },
    { name: "javaScript", route: "js-icon" },
    { name: "MySQL", route: "mySQL-icon" },
    { name: "Python", route: "python-icon" },
    { name: "React", route: "react-icon" },
    { name: "Visual Studio", route: "visualStudio-icon" },
    { name: "VS Code", route: "vsCode-icon" },
  ];
  return (
    <div className="slider-tech">
      <div className="slider-itms-container ">
        {iconTech
          .concat(iconTech)
          .map((icon, i /* Duplicamos el array para crear el loop */) => (
            <div
              className="flex-container-column tech-icon"
              style={{ "--position": i }}
              key={i}
            >
              <img
                src={`public/icons/tech/${icon.route}.svg`}
                alt={icon.name}
              />
              <p>{icon.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SliderTech;
