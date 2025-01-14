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
import { IdleTimerProvider } from "react-idle-timer";
import useLogoutHook from "../../hooks/useLogoutHook";
import { Alert } from "../../components/Alert/Alert";
import useStartHook from "../../hooks/useStartHook";

export default function EmailConfirmation(): JSX.Element {
    const { language, isMobileDevice, clientTimeoutIdle } = useSelector((state: RootState) => state.configurationReducer);
    const [email, setEmail] = useState<string>('');
    const [isAlert, setIsAlert] = useState<boolean | 'accepted' | 'rejected'>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showAlert] = useState<"accepted" | "error" | null>(null);
    const onIdle = useLogoutHook();
    const start = useStartHook()

    const handleSubmit = (): void => {
        setIsLoading(true)
        setIsAlert('rejected');
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
        console.log(email)
    };

    const handleChangeEmail = (value: { [key: string]: string }): void => {
        console.log(value.email);
        setEmail(value.email);
    };

    const handleGoBack = (): void => {
        start()
    };

    function validateEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    return (
        <IdleTimerProvider timeout={clientTimeoutIdle} onIdle={onIdle}>
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
                        <Envelop text={languageConfig[language]?.EMAIL_CONFIRMATION_PAGE?.EMAIL_CONFIRMATION}/>
                    </div>
                    <InputWithKeyboard
                        placeholder={languageConfig[language].EMAIL_CONFIRMATION_PAGE.EMAIL}
                        type="text"
                        className="discont-code"
                        id="email"
                        getValue={handleChangeEmail}
                        handleSubmit={handleSubmit}
                        validate={validateEmail}
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
                {!!isAlert && <Alert type={isAlert} handleCloseModal={() => setIsAlert(false)} isLoading={isLoading} callBack={start}/>}

            </ServicePageWrapper>
        </IdleTimerProvider>
    );
}
