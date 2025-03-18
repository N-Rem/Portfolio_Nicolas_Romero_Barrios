import MainLayout from "./component/seccion/mainLayout/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/error404/NotFound.jsx";
import Hero from "./component/hero/Hero.jsx";
import About from "./pages/aboutMe/About.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Technologies from "./pages/technologies/Technologies.jsx";
import Portfolios from "./pages/allPortfolios/Portfolios.jsx";
import Portfolio from "./pages/allPortfolios/Portfolio.jsx";
import Contact from "./pages/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Hero />
          <About />
          <Experience />
          <Technologies />
          <Portfolios />
          <Contact />
        </MainLayout>
      ),
    },
    {
      path: "/portfolio/:id",
      element: (
        <MainLayout>
          <Portfolio />
        </MainLayout>
      ),
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
