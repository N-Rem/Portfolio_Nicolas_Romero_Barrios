import React, { useContext } from "react";
import { TranslationContext } from "/src/context/TranslationContext.jsx";
import Hero from "/src/component/hero/Hero.jsx";

import { Helmet } from "react-helmet";

const Home = () => {
  const { metadescriptionHome, keywordsHome } = useContext(TranslationContext);
    
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={metadescriptionHome}
        />
        <meta
          name="keywords"
          content={keywordsHome}
        />
        <meta name="author" content="Nicoals Romero Barrios" />
        <link rel="canonical" href="https://nicolas-romero-barrios.vercel.app" />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
