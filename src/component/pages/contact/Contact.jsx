import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="flex-container-column">
      <h2>Contactame</h2>
      <div className="container-form-section">
        <form className="form-container">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              name="name"
              type="text"
              placeholder="Ingresa tu nombre"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Ingresa tu email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              className="form-control"
              maxLength={200}
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
