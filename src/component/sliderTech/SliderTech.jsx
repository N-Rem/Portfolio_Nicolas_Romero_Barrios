import React from "react";
import "./sliderTech.css";
import PropTypes from "prop-types";

const SliderTech = ({ techs }) => {
  const iconTech = [
    { name: "C Sharp", route: "csharp-icon" },
    { name: "CSS", route: "css-icon" },
    { name: "Dot Net", route: "dotNet-icon" },
    { name: "git-hub", route: "github-icon" },
    { name: "git", route: "git-icon" },
    { name: "Google Sheet", route: "googleSpreadsheet-icon" },
    { name: "HTML", route: "html-icon" },
    { name: "javaScript", route: "js-icon" },
    { name: "MySQL", route: "mySQL-icon" },
    { name: "Python", route: "python-icon" },
    { name: "React", route: "react-icon" },
    { name: "Visual-Studio", route: "visualStudio-icon" },
    { name: "VS-Code", route: "vsCode-icon" },
  ];

  return (
    <div className="slider-tech">
      <div
        className="slider-itms-container "
        style={{
          "--quantity": !techs ? iconTech.length  : techs.length,
        }}
      >
        {!techs
          ? iconTech.map((icon, i) => (
              <div
                className="flex-container-column tech-icon"
                style={{ "--position": i }}
                key={i}
              >
                <img
                  src={`../icons/tech/${icon.route}.svg`}
                  alt={icon.name}
                />
                <p>{icon.name}</p>
              </div>
            ))
          : techs.map((icon, i) => (
              <div
                className="flex-container-column tech-icon"
                style={{ "--position": i }}
                key={i}
              >
                <img
                  src={`../icons/tech/${icon.route}.svg`}
                  alt={icon.name}
                />
                <p>{icon.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

SliderTech.propTypes = {
  techs: PropTypes.array,
};

export default SliderTech;
