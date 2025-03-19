import React from "react";
import PropTypes from "prop-types";
import './button.css'

const ButtonCv = ({ text, onButtonHandler }) => {
  const buttonHandler = () => onButtonHandler();

  return <div className="button" onClick={buttonHandler}><span className="btn-text">{text}</span></div>;
};

ButtonCv.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonHandler:PropTypes.func
};

export default ButtonCv;
