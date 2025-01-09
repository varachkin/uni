import terminalImg from "./../../assets/img/terminal.webp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { languageConfig } from "../../langugeConfig";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import Loader from "../../components/Loader/Loader";
import type { RootState } from "../../store/store";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import { useNavigate } from "react-router-dom";

export default function CardPaymentMethod() {

  const [isCardAccepted, setIsCardAccepted] = useState(false);
  const { language } = useSelector((state: RootState) => state.configurationReducer);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => setIsCardAccepted(true), 4000)
    // setTimeout(() => navigate('/service-success'), 9000)
  }, [])


  return (
    <ServicePageWrapper>
      <div className="service-page-wrapper">
        <div className="service-page-container">
          {!isCardAccepted ? (
            <div className="service-page-img-block">
              <img src={terminalImg} alt="terminal" />
            </div>
          ) : (
            <Loader size={15} />
          )}

          {isCardAccepted ? (
            <AnimatedTitle
              title={languageConfig[language].PAYMENT_PAGE.CARD_ACCEPTED}
              subTitle={languageConfig[language].PAYMENT_PAGE.CARD_ACCEPTED_SUBTITLE}
            />
          ) : (
            <div className="service-page-subtitle">
              {languageConfig[language].PAYMENT_PAGE.CARD_TITLE}
            </div>
          )}
        </div>
      </div>
    </ServicePageWrapper>
  );
}
