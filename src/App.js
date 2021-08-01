import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import translations from "./translations/index";
import sites from "./translations/sites";
import { Typing } from "typing-effect-reactjs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let location = useLocation();
  const [site, setSite] = useState("/");
  const [language, setLanguage] = useState(
    window.location.pathname.replace("/", "").toUpperCase()
  );

  useEffect(() => {
    setLanguage(window.location.pathname.replace("/", "").toUpperCase());
  }, [location]);

  return (
    <>
      <Header
        site={sites[language].find((item) => item.url === site)}
        language={language}
      />
      <div className="wrapper">
        <Sidebar language={language} setSite={setSite}>
          {site === "/" ? (
            <Typing
              cursorColor="#FFFFFF"
              typeSpeed={120}
              deleteSpeed={130}
              text={[
                translations[language].header.text +
                  translations[language].header.frontend,
                translations[language].header.text +
                  translations[language].header.backend,
                translations[language].header.text +
                  translations[language].header.fullstack,
              ]}
              smartBackspace
            />
          ) : (
            ""
          )}
        </Sidebar>
      </div>
      <Footer />
    </>
  );
}

export default App;
