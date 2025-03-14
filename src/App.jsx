import { useState } from "react";
import MainLayout from "/src/component/seccion/mainLayout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./component/pages/error404/NotFound";
import Hero from "./component/hero/Hero";
import About from "./component/pages/aboutMe/about";
import Experience from "./component/pages/experience/Experience";
import Technologies from "./component/pages/technologies/technologies";
import Portfolios from "./component/pages/allPortfolios/Portfolios";
import Portfolio from "./component/pages/allPortfolios/Portfolio";
import Contact from "./component/pages/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Hero/>
          <About/>
          <Experience/>
          <Technologies/>
          <Portfolios/>
          <Contact/>
        </MainLayout>
      ),
    },{
      path: "/portfolio/:id",
      element: (
        <MainLayout>
          <Portfolio/>
        </MainLayout>
      ),
    },
    {
      path: "/*",
      element: (
          <NotFound/>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
