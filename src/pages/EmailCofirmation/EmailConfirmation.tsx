import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import type { RootState } from "../../store/store";
import { InputWithKeyboard } from "../../components/InputWithKeyboard/InputWithKeyboard";
import { Envelop } from "../../components/Envelop/Envelop";
import { Button } from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { languageConfig } from "../../langugeConfig";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";

export default function EmailConfirmation(): JSX.Element {
    const { language, isMobileDevice } = useSelector((state: RootState) => state.configurationReducer);
    const [email, setEmail] = useState<string>('');
    const [isLoading] = useState<boolean>(false);
    const [showAlert] = useState<"accepted" | "error" | null>(null);
    const navigate = useNavigate();

    const handleSubmit = (): void => {
        // Placeholder for submission logic
    };

    const handleChangeEmail = (value: { [key: string]: string }): void => {
        console.log(value.email);
        setEmail(value.email);
    };

    const handleGoBack = (): void => {
        navigate('/');
    };

    function validateEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    return (
        <ServicePageWrapper>
            {showAlert && (
                <div className="fullscreen-overlay">
                    {showAlert === "accepted" ? (
                        <>
                            <div className="o-circle c-container__circle o-circle__sign--success">
                                <div className="o-circle__sign"></div>
                            </div>
                            <AnimatedTitle
                                title={languageConfig[language].EMAIL_CONFIRMATION_PAGE.SENDING_SUCCESS_TITLE}
                                subTitle={languageConfig[language].EMAIL_CONFIRMATION_PAGE.SENDING_SUCCESS_SUBTITLE}
                            />
                        </>
                    ) : (
                        <>
                            <div className="o-circle c-container__circle o-circle__sign--failure">
                                <div className="o-circle__sign"></div>
                            </div>
                            <AnimatedTitle
                                title={languageConfig[language].EMAIL_CONFIRMATION_PAGE.SENDING_ERROR_TITLE}
                                subTitle={languageConfig[language].EMAIL_CONFIRMATION_PAGE.SENDING_ERROR_SUBTITLE}
                            />
                        </>
                    )}
                </div>
            )}
            <div className="service-page-container">
                <div>
                    <Envelop />
                </div>
                <InputWithKeyboard
                    placeholder={languageConfig[language].EMAIL_CONFIRMATION_PAGE.EMAIL}
                    type="text"
                    className="discont-code"
                    id="email"
                    getValue={handleChangeEmail}
                    handleSubmit={handleSubmit}
                    bottom={10}
                    isShow={!isMobileDevice}
                />
                <AnimatedTitle
                    title={languageConfig[language].EMAIL_CONFIRMATION_PAGE.TITLE}
                    subTitle={languageConfig[language].EMAIL_CONFIRMATION_PAGE.SUBTITLE}
                />
                <div className="buttons-footer">
                    <Button onClick={handleGoBack}>
                        <TbCircleArrowLeftFilled />
                        {languageConfig[language].BUTTONS.FINISH}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!validateEmail(email) || isLoading}
                    >
                        {isLoading ? <Loader /> : <>{languageConfig[language].EMAIL_CONFIRMATION_PAGE.SEND} <BsFillEnvelopeCheckFill /></>}
                    </Button>
                </div>
            </div>
        </ServicePageWrapper>
    );
}
