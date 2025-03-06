import React from "react";
import "./cardExp.css";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

const CardExp = ({ title1, title2, title3, description }) => {
  const containerRef = useRef(null);
  const [requestId, setRequestId] = useState(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;

    // Si ya se está actualizando el ángulo, no hacer nada
    if (requestId) return;

    setRequestId(
      requestAnimationFrame(() => {
        // Obtiene el tamaño y la posición del contenedor
        const rect = container.getBoundingClientRect();
        // Posición horizontal
        const x = e.clientX - rect.left;
        //vertical
        const y = e.clientY - rect.top;

        // Calcula el ángulo en radianes
        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);

        // Actualiza el ángulo en el CSS
        container.style.setProperty("--rotation", `${angle}rad`);
        // Resetea el ID de la solicitud para permitir nuevos cálculos
        setRequestId(null);
      })
    );
  };

  return (
    <div className="first-container flex-container-column">
      <div
        className="card-container flex-container-column"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <h1 className="title1">
          {title1} <span className="effect"></span>
        </h1>
        <h2 className="title2">{title2}</h2>
        <h3 className="title3">{title3}</h3>

        <p className="description">{description}</p>
      </div>
    </div>
  );
};

CardExp.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardExp;
