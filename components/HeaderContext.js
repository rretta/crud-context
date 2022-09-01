import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import LoginContext from "../context/LogContext";

export const HeaderContext = () => {
  const {theme, handleTheme} = useContext(ThemeContext);
  const {handleLanguage, texts} = useContext(LanguageContext);
  const {auth, handleAuth} = useContext(LoginContext);
  
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="lenguage" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      
      <button onClick={handleAuth}>
         {auth?texts.buttonLogout:texts.buttonLogin}
         </button>
    </header>
  );
};
