import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import { useState, useRef } from "react";

const Modal = ({ onCloseModal, title, text, onClose }) => {
  const containerRef = useRef(null);
  const [requestId, setRequestId] = useState(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;

    if (requestId) return;

    setRequestId(
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);

        // Actualiza el ángulo en el CSS
        container.style.setProperty("--rotation", `${angle}rad`);
        // Resetea el ID de la solicitud para permitir nuevos cálculos
        setRequestId(null);
      })
    );
  };

  return (
    <div className={onClose ? "modal is-open" : "modal"}>
      <div
        className="modal-container-yellow flex-container-column"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <div className="modal-conteiner flex-container-column">
          <h2>{title}</h2>
          <p>{text}</p>
          <button className="modal-cloes" onClick={onCloseModal}>
            <img
              className="icon-close"
              src="./public/icons/close-icon.svg"
              alt="icon close"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  onClose: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
