import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { clearCart } from "../../features/data/dataSlice";
import type { RootState } from "../../store/store";

import de from "./../../assets/img/flags/de.png";
import uk from "./../../assets/img/flags/gb.png";
import pl from "./../../assets/img/flags/pl.png";
import ua from "./../../assets/img/flags/ua.png";
import fr from "./../../assets/img/flags/fr.png";
import be from "./../../assets/img/flags/be.png";
import ita from "./../../assets/img/flags/ita.png";
import fin from "./../../assets/img/flags/fin.png";
import esp from "./../../assets/img/flags/esp.png";

import Logo from "../Logo/Logo";
import { changeIsMobileDevice, changeLanguage } from "../../features/configuration/configurationSlice";
import { languageConfig } from "../../langugeConfig";
import { Swicher } from "../Swicher/Swicher";

export default function Header() {
  const { pathname } = useLocation();
  const { language, languages, serial, devMode, isMobileDevice } = useSelector(
    (state: RootState) => state.configurationReducer
  );
  const dispatch = useDispatch();
  const logoRef = useRef<HTMLSpanElement | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const navigate = useNavigate();

  const flags: Record<string, string> = {
    de,
    en: uk,
    pl,
    ua,
    fr,
    be,
    ita,
    fin,
    esp
  };

  const handleNavigateToStart = () => {
    dispatch(clearCart());
    navigate("/");
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  const handleChangeLanguage = (event: React.MouseEvent<HTMLElement>) => {
    const lang = event.currentTarget.id;
    if (lang) {
      dispatch(changeLanguage(lang));
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();
      setClickCount((prevCount) => prevCount + 1);

      // Reset click count after 1 second
      setTimeout(() => {
        setClickCount(0);
      }, 1000);
    };

    const element = logoRef.current;
    if (element) {
      element.addEventListener("click", handleClick);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", handleClick);
      }
    };
  }, []);

  useEffect(() => {
    if (clickCount === 3) {
      handleToLogin();
    }
  }, [clickCount]);

  return (
    <header className="header">
      <div className="header-buttons-block">
        {languages.map((lang: string) => (
          <div
            className={`header-flag-wrapper ${lang === language ? "active" : ""}`}
            id={lang}
            key={lang}
            onClick={handleChangeLanguage}
          >
            <img src={flags[lang]} alt={lang} />
          </div>
        ))}
      </div>

<Swicher handleChange={()=>dispatch(changeIsMobileDevice())} checked={isMobileDevice}/>
      <span className="secret-btn" ref={logoRef}></span>

      {pathname !== "/" ? (
        <Logo
          handleNavigateToStart={handleNavigateToStart}
          variant={pathname === "/login" || pathname === "/settings" ? "black" : undefined}
        />
      ) : devMode ? (
        serial ? (
          <h3 className="service-page-subtitle">{serial}</h3>
        ) : (
          <h3 className="title">
            {languageConfig[language].START_PAGE.ERROR_SERIAL}
          </h3>
        )
      ) : null}
    </header>
  );
}
