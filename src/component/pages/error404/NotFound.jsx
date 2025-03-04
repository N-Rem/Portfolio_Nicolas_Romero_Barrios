import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <div>
        <div className="msj-container">
          <h1>404 ERROR</h1>
          <p>The Oage you’re looking for dosen’t exist or has been moved.</p>
          <p>Oops! Looks likes you’ve got lost...</p>
        </div>
        <div className="button-container"></div>
      </div>
      {/* <img src={errorImg} alt="Error 404" className="bg-image" /> */}
    </div>
  );
};

export default NotFound;
