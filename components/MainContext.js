import {useContext} from 'react'
import LanguageContext from '../context/LanguageContext';
import LoginContext from '../context/LogContext';
import ThemeContext from "../context/ThemeContext";

export const MainContent = () => {
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);
  const {auth} = useContext(LoginContext);
  return (
    <main className={theme}>

    {auth? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p> }
        
    <p>{texts.mainContent}</p>
            </main>
  )
}
