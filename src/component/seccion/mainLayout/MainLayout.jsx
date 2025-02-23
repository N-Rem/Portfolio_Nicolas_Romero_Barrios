import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
