import { useState } from "react";
import { TbCircleArrowLeftFilled, TbCircleArrowRightFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import { Button } from "../../components/Button/Button";
import { InputWithKeyboard } from "../../components/InputWithKeyboard/InputWithKeyboard";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";

interface InputValue {
    _login?: string;
    _password?: string;
}

export const LoginPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<InputValue>({});
    const [isError, setIsError] = useState<boolean>(false);
    const { language, isMobileDevice } = useSelector((state: RootState) => state.configurationReducer);
    const navigate = useNavigate();

    const getValue = (input: Partial<InputValue>): void => {
        setIsError(false);
        setInputValue((prev) => ({ ...prev, ...input }));
    };

    const handleGoBack = (): void => {
        navigate("/");
    };

    const handleGoToSettings = (): void => {
        if (inputValue._login === "servicevr" && inputValue._password === "SthVR15") {
            navigate("/settings");
        } else {
            setIsError(true);
        }
    };

    return (
        <>
            <ServicePageWrapper>
                <div className="settings-page-background">
                    <div className="login-page-wrapper">
                        <div>
                            <h2 className="service-page-subtitle">{languageConfig[language].LOGIN_PAGE.SERVICE_MENU_TITLE}</h2>
                            <div className="login-form-wrapper">
                                <InputWithKeyboard
                                    id="_login"
                                    type="text"
                                    defaultValue="servicevr"
                                    getValue={getValue}
                                    placeholder="login"
                                    handleSubmit={handleGoToSettings}
                                    bottom={10}
                                    isShow={!isMobileDevice}
                                />
                                <InputWithKeyboard
                                    type="password"
                                    id="_password"
                                    defaultValue="SthVR15"
                                    getValue={getValue}
                                    placeholder="password"
                                    handleSubmit={handleGoToSettings}
                                    bottom={10}
                                    isShow={!isMobileDevice}
                                />
                            </div>
                            {isError && <h3 className="error-subtitle">Nieprawidłowy login lub hasło</h3>}
                        </div>
                        <div className="login-form-btn-block">
                            <Button onClick={handleGoBack}>
                                <TbCircleArrowLeftFilled /> {languageConfig[language].BUTTONS.BACK}
                            </Button>
                            <Button onClick={handleGoToSettings}>
                                {languageConfig[language].LOGIN_PAGE.LOGIN}
                                <TbCircleArrowRightFilled />
                            </Button>
                        </div>
                    </div>
                </div>
            </ServicePageWrapper>
        </>
    );
};
