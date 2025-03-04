import React from "react";
import PropTypes from "prop-types";
import './button.css'

const ButtonCv = ({ text }) => {
  const buttonHandler = () => {
    console.log("fucnionando...");
  };

  return <div className="button" onClick={buttonHandler}><span className="btn-text">{text}</span></div>;
};

ButtonCv.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonCv;
