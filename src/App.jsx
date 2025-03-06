import { useState } from "react";
import MainLayout from "/src/component/seccion/mainLayout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./component/pages/error404/NotFound";
import Hero from "./component/hero/Hero";
import About from "./component/pages/aboutMe/about";
import Experience from "./component/pages/experience/Experience";
import Technologies from "./component/pages/technologies/technologies";

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
