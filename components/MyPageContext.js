
import { LanguageProvider } from "../context/LanguageContext";
import { LoginProvider } from "../context/LogContext";
import { ThemeProvider } from "../context/ThemeContext";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContent } from "./MainContext";



export const MyPageContext = () => {


  // console.log(texts)

  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <LoginProvider>
            <HeaderContext />
            <MainContent />
            <FooterContext />
          </LoginProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
