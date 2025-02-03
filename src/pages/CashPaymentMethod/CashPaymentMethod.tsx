// import cashImg from "./../../assets/img/cash.webp";
import { FaMinusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState } from "../../store/store";
import { languageConfig } from "../../langugeConfig";
import Loader from "../../components/Loader/Loader";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Coin } from "../../components/Coin/Coin";

export default function CashPaymentMethod() {
  const [credit, setCredit] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCashAccepted, setIsCashAccepted] = useState(false);
  const navigate = useNavigate()
  const { cart } = useSelector((state: RootState) => state.dataReducer);
  const { language, currency } = useSelector((state: RootState) => state.configurationReducer);
  const ammount = +cart.reduce((acc, el) => acc + el.count * el.product.price, 0).toFixed(2);


  const handleCancel = () => {
    console.log("cancel handler");
  };


  useEffect(() => {
    setTimeout(() => {
      setCredit(400)
    }, 1000)
    setTimeout(() => {
      setIsCashAccepted(true)
      setIsLoading(true)
    }, 4000)
    setTimeout(() => {
      navigate('/service-rejected')
    }, 9000)

  }, [])
  return (
    <ServicePageWrapper>
      <div className="service-page-wrapper">
        <div className="service-page-container">
          <div className="service-page-img-block">
            {!isCashAccepted ? (
              // <img src={cashImg} alt="terminal" />
              <Coin />
            ) : (
              <Loader size={15} />
            )}
          </div>
          {isCashAccepted ? (
            <AnimatedTitle
              title={languageConfig[language].PAYMENT_PAGE.CASH_ACCEPTED}
              subTitle={languageConfig[language].PAYMENT_PAGE.CASH_ACCEPTED_SUBTITLE}
            />
          ) : (
            <>
              <div className="title">
                {languageConfig[language].PAYMENT_PAGE.CASH_TITLE}
              </div>
              <div className="service-page-subtitle-wrapper">
                <div className="service-page-subtitle">
                  {languageConfig[language].PAYMENT_PAGE.CASH_SUBTITLE}{" "}
                  <span className="">
                    {currency} {ammount && ammount.toFixed(2)}
                  </span>
                </div>
                <div className="service-page-subtitle">
                  {languageConfig[language].PAYMENT_PAGE.CASH_CREDIT}{" "}
                  <span className="">
                    {currency}{" "}
                    {credit === null ? <Loader /> : (credit / 100)?.toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
          <div className="button-wrapper">
            <Button
              isLoading={isLoading}
              disabled={isCashAccepted || isLoading}
              onClick={handleCancel}
              variant="secondary"
            >
              {isLoading ? (
                <Loader size={2.75} variant="default" />
              ) : (
                <>
                  <FaMinusCircle />
                  {languageConfig[language].BUTTONS.CANCEL}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </ServicePageWrapper>
  );
}
