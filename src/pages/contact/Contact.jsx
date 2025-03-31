import React, { useRef, useState, useContext } from "react";

import "./contact.css";
import Modal from "/src/component/modal/Modal.jsx";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const Contact = () => {
  const { sectionContact } = useContext(TranslationContext);

  // const { t, i18n } = useTranslation();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
          newErrors.name.push(sectionContact.inputs.fullname.validationError);
      }

      if (name === "email") {
        newErrors.email = [];
        if (value.length < 6 || value.length > 250)
          newErrors.email.push(sectionContact.inputs.email.validationError);
        if (!emailRegex.test(value))
          newErrors.email.push(sectionContact.inputs.email.invalidMailError);
      }

      if (name === "message") {
        newErrors.message = [];
        if (value.trim().length < 10)
          newErrors.message.push(sectionContact.inputs.content.validationError);
        if (value.trim().length > 200)
          newErrors.message.push(sectionContact.inputs.content.sizeError);
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
      newErrors.name.push(sectionContact.inputs.fullname.validationError);
      nameRef.current.focus();
      formIsValid = false;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      if (formData.email.length < 6 || formData.email.length > 250) {
        newErrors.email.push(sectionContact.inputs.email.validationError);
      }
      if (!emailRegex.test(formData.email)) {
        newErrors.email.push(sectionContact.inputs.email.invalidMailError);
      }
      if (formIsValid) emailRef.current.focus();
      formIsValid = false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message.push(sectionContact.inputs.content.validationError);
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }
    if (formData.message.length > 200) {
      newErrors.message.push(sectionContact.inputs.content.sizeError);
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

    }
    setIsSubmitting(false); // Desbloquea el botón
  };

  /*SECCION DEL MODAL */
  const modalSuccessTitle = sectionContact.modal.modalSuccessful.title;
  const modalSuccessText = sectionContact.modal.modalSuccessful.text;
  const modalErrorTitle = sectionContact.modal.modalError.title;
  const modalErrorText = sectionContact.modal.modalError.text;

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
      <h2 className="title-contact">{sectionContact.title}</h2>
      <div className="container-form-section flex-container-column">
        <form className="form-container ">
          <div className="form-group flex-container-column">
            <label className="label-text">
              {sectionContact.inputs.fullname.label}
            </label>
            <input
              ref={nameRef}
              name="name"
              type="text"
              placeholder={sectionContact.inputs.fullname.placeholder}
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
            <label className="label-text">{sectionContact.inputs.email.label}</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder={sectionContact.inputs.email.placeholder}
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
            <label className="label-text">{sectionContact.inputs.content.label}</label>
            <textarea
              ref={messageRef}
              name="message"
              placeholder={sectionContact.inputs.content.placeholder}
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
            <button
              type="submit"
              className="contact-button"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? sectionContact.inputs.submiting: sectionContact.inputs.submit}
              </span>
            </button>
          </div>
        </form>
        {showModal && (
          <Modal
            onClose={showModal}
            onCloseModal={closeModal}
            title={msjModal.title}
            text={msjModal.text}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
