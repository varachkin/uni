import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import { AnimatedQRCode } from "../../components/AnimatedQRCode/AnimatedQRCode";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import Loader from "../../components/Loader/Loader";
import LOGO from './../../assets/img/logo.png'
import FINGER from './../../assets/img/finger.png'
import { getSerial } from "../../API";
import { setSerialOfMachine } from "../../features/configuration/configurationSlice";
// import useSnack from "../../hooks/useSnack";

interface StartPageProps {
    children?: ReactNode;
}

export const StartPage = ({ children }: StartPageProps): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const showAlert = useSnack();

    const { language, serial, mobileAppMode, technical_break } = useSelector(
        (state: RootState) => state.configurationReducer
    );

    const handleGoToTechBreak = () => {
        navigate('/service-technical-break');
    };

    const handleNavigateToHome = (event: React.MouseEvent | React.TouchEvent) => {
        event.stopPropagation();
        navigate("/home");
    };

    const query = JSON.stringify({ serial: serial });
    const url = `https://testwebpage?${query}`;

    useEffect(() => {
        if (technical_break) {
            handleGoToTechBreak();
        }

    }, [technical_break]);

    useEffect(() => {
        if (!serial) {
            getSerial()
                .then(response => {
                    if (response.status === 200) {
                        dispatch(setSerialOfMachine(response.data.serial))
                    } else {
                        handleGoToTechBreak()
                    }
                })
                .catch(handleGoToTechBreak);
        }

    }, [serial])

    return !serial ? (
        <Loader size={15} />
    ) : (
        <div className="start-page-wrapper">
            <div
                className="start-page-container"
                onClick={handleNavigateToHome}
                onTouchMove={handleNavigateToHome}
            >
                {children}
                <div
                    className="start-page-logo"
                    style={{ backgroundImage: `url(${LOGO})` }}
                ></div>
                {mobileAppMode ? (
                    <>
                        <AnimatedQRCode url={url} />

                        <AnimatedTitle
                            title={languageConfig[language]?.PAYMENT_PAGE?.GO_TO_QR_APP_TITLE || "LANGUAGE WASN'T DEFINED"}
                            subTitle={languageConfig[language]?.START_PAGE?.OR_TAP_TO_START || "LANGUAGE WASN'T DEFINED"}
                        />
                    </>
                ) : (
                    <>
                        <div className="start-page-icon">
                            <div className="waves">
                                <div
                                    className="finger-icon"
                                    style={{ backgroundImage: `url(${FINGER})` }}
                                ></div>
                            </div>
                        </div>
                        <AnimatedTitle
                            title={languageConfig[language]?.START_PAGE?.TAP_TO_START || "LANGUAGE WASN'T DEFINED"}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
