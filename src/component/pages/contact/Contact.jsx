import React, { useRef, useState } from "react";

import "./contact.css";
import Modal from "../../modal/Modal";

const Contact = () => {
  // const { t, i18n } = useTranslation();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [msjModal, setMsjModal] = useState({
    title: "",
    text: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: [],
  });

  /*VERIFICA LOS ERRORES EN LOS INPUTS */
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,33}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };

      if (name === "name") {
        newErrors.name = [];
        if (!nameRegex.test(value))
          newErrors.name.push(
            "El nombre debe tener mas de 3 letras y no debe contenter numeros."
          );
      }

      if (name === "email") {
        newErrors.email = [];
        if (value.length < 6 || value.length > 250)
          newErrors.email.push("El email debe tener entre 6 y 25 digitos");
        if (!emailRegex.test(value))
          newErrors.email.push("El formato no es valido");
      }

      if (name === "message") {
        newErrors.message = [];
        if (value.trim().length < 10)
          newErrors.message.push("El texto deve tener mas de 10 digitos.");
        if (value.trim().length > 200)
          newErrors.message.push("El solo se aceptan 200 digitos");
      }

      return newErrors;
    });
  };

  /* ENVIA EL FORMULARIO */
  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return; // Evita mas sumits
    setIsSubmitting(true); // Bloquea el boton para el sumit

    let newErrors = { name: [], email: [], message: [] };
    let formIsValid = true;

    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      newErrors.name.push(
        "El campo debe tener entre 3 y 30 caracteres y contener sólo letras."
      );
      nameRef.current.focus();
      formIsValid = false;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      if (formData.email.length < 6 || formData.email.length > 250) {
        newErrors.email.push("El email debe tener entre 6 y 25 caracteres");
      }
      if (!emailRegex.test(formData.email)) {
        newErrors.email.push("Debe ingresar un email válido");
      }
      if (formIsValid) emailRef.current.focus();
      formIsValid = false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message.push(
        "El mensaje debe tener como minimo 10 caracteres."
      );
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }
    if (formData.message.length > 200) {
      newErrors.message.push("Tamaño máximo superado.");
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      await sendEmail(event);
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false); // Desbloquea el botón
    }
  };

  /*SECCION DEL MODAL */
  const modalSuccessTitle = "¡Envio exitoso!";
  const modalSuccessText = "Pronto me pondre en contacto contigo";
  const modalErrorTitle = "¡Error en el envío!";
  const modalErrorText =
    "Se produjo un error al enviar el mensaje. Intenta nuevamente mas tarde";

  const closeModal = () => setShowModal(false);

  /*SECCION DE LLAMADA A LA API */
  const sendEmail = async () => {
    // aca llamar a la api
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("business", formData.business);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_gotcha", ""); // Honeypot anti-spam
    try {
      const response = await fetch("https://getform.io/f/anlqlvva", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setMsjModal({ title: modalSuccessTitle, text: modalSuccessText });
        setShowModal(!showModal);
      } else {
        setMsjModal({ title: modalErrorTitle, text: modalErrorText });
        setShowModal(!showModal);
      }
    } catch (error) {
      console.log(error);
      setMsjModal({ title: modalErrorTitle, text: modalErrorText });
      setShowModal(!showModal);
    }
  };

  return (
    <div
      id="contact"
      className="flex-container-column "
      onSubmit={handlerSubmit} 
    >
      <h2 className="title-contact">Contactame</h2>
      <div className="container-form-section flex-container-column">
        <form className="form-container" >
          <div className="form-group flex-container-column">
            <label className="label-text">Nombre Completo</label>
            <input
              ref={nameRef}
              name="name"
              type="text"
              placeholder=" Ingresa tu nombre"
              className={`form-control ${
                errors.name.length > 0 ? "error" : ""
              }`}
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          {errors.name.length > 0 && (
            <div className="alert-container flex-container-column">
              {errors.name.map((err, index) => (
                <p className="alert" key={index}>
                  {err}
                </p>
              ))}
            </div>
          )}

          <div className="form-group flex-container-column">
            <label className="label-text">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder=" Ingresa tu email"
              className={`form-control ${
                errors.email.length > 0 ? "error" : ""
              }`}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          {errors.email.length > 0 && (
            <div className="alert-container flex-container-column">
              {errors.email.map((err, index) => (
                <p className="alert" key={index}>
                  {err}
                </p>
              ))}
            </div>
          )}

          <div className="form-group flex-container-column">
            <label className="label-text">Mensaje</label>
            <textarea
              ref={messageRef}
              name="message"
              placeholder=" Escribe tu mensaje"
              className={`form-control form-textarea ${
                errors.message.length > 0 ? "error" : ""
              }`}
              maxLength={200}
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          {errors.message.length > 0 && (
            <div className="alert-container flex-container-column">
              {errors.message.map((err, index) => (
                <p className="alert" key={index}>
                  {err}
                </p>
              ))}
            </div>
          )}

          <div className="button-contact-container flex-container-row">
            <button type="submit" className="contact-button" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? "Enviando..." : "Enviar"}</span>
            </button>
          </div>
        </form>
        {showModal && (
          <Modal
            onClose={showModal}
            onCloseModal={closeModal}
            title={modalSuccessTitle}
            text={modalSuccessText}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
