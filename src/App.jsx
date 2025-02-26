import { useState } from "react";
import MainLayout from "/src/component/seccion/mainLayout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./component/pages/error404/Error404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <h1>Holas</h1>
          <h1>Bolas</h1>
          <h1>Bolas</h1>
        </MainLayout>
      ),
    },
    {
      path: "/*",
      element: (
          <Error404/>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
