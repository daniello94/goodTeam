import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
/* routers */
import LanguageSelector from "./routers/LanguageSelector";
import LanguageContext from "./LanguageContext";
import Home from "./routers/Home";
import Menu from "./routers/Menu";
/* components and styles */
import Container from "./components/Container";

export default function App() {
  const initialLanguage = localStorage.getItem('language') || "pl";
  const [language, setLanguage] = useState(initialLanguage);
  const { i18n } = useTranslation();
  const [isLeagueSelector, setIsLeagueSelector] = useState(false);
  const [userData, /* setUser */] = useState(
    JSON.parse(localStorage.getItem('user'))
  )
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
    setIsLeagueSelector(false);
    localStorage.setItem('isLeagueSelector', false);
    localStorage.setItem('language', language);
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  axios.defaults.headers.common["x-auth-token"] = userData ? userData.jwt : "";
  useEffect(() => {
    const storedIsLeagueSelector = localStorage.getItem('isLeagueSelector');
    if (storedIsLeagueSelector === null) {
      setIsLeagueSelector(true);
    } else {
      setIsLeagueSelector(JSON.parse(storedIsLeagueSelector));
    }
  }, [])

  return (
    <Container>
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        {isLeagueSelector === true && (
          <LanguageSelector onSelectLanguage={changeLanguage}/>
        )}
        <Menu
          user={userData}
          setIsLeagueSelector={setIsLeagueSelector}
          isLeagueSelector={isLeagueSelector}
          onSelectLanguage={changeLanguage} />
        <div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LanguageContext.Provider>
    </Container>
  );
}
