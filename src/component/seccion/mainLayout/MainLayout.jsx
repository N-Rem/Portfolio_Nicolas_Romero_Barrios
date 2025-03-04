import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import PropTypes from "prop-types";


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar isForhero={false} />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes={
  children: PropTypes.node
}

export default MainLayout;
