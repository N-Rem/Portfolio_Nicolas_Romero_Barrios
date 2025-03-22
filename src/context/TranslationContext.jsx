import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import PropTypes from "prop-types";
import Experience from "../pages/experience/Experience";

export const TranslationContext = createContext({});
const languageLocalStorage = localStorage.getItem("language");

export const TranslationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const { t } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, []);

  const onToggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // bottones del navbar
  let btnNav = t("section.init", { returnObjects: true });
  // lo combierte en iterable
  let btns = Object.values(btnNav);
  const textLanguage = i18n.language ? i18n.language.toUpperCase() : "ES";
  let close = t("section.close");

  // about
  let sectionAbout = t("section.about", { returnObjects: true });

  // Experiencia
  let sectionExpTitle = t("section.experience.title");
  let sectionExp = t("section.experience.exp");

  //tech
  let sectionTech = t("section.tech");

  // /portfolios
  let sectionPortfolios = t("portfolios", { returnObjects: true });
  let sectionPortfoliosPortfolio = t("portfolios.portfolio");

  //Contactame
  let sectionContact = t("section.contact");

  //404 
  let section404 = t("404");

  //footer
let sectionFooterSlogan = t("section.footer.slogan");
let sectionFooterCopyright  = t("section.footer.copyright");
let sectionFooterBtn = t("section.footer.btn");

//meta Data para home
let metadescriptionHome = t("metadescription.home");
let keywordsHome = t("keywords.home", { returnObjects: true }).join(", ");

  return (
    <TranslationContext.Provider
      value={{
        textLanguage,
        onToggleLanguage,
        btns,
        close,
        sectionAbout,

        sectionExpTitle,
        sectionExp,

        sectionTech,

        sectionPortfolios,
        sectionPortfoliosPortfolio,

        sectionContact,

        section404,

        sectionFooterSlogan,
        sectionFooterCopyright,
        sectionFooterBtn,

        metadescriptionHome,
        keywordsHome
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

TranslationContextProvider.propTypes = {
  children: PropTypes.node,
};
