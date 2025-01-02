import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import type { RootState } from "../../store/store";
import { languageConfig } from "../../langugeConfig";
import { Clock } from "../../components/Clock/Clock";
import { ButtonTimer } from "../../components/ButtonTimer/ButtonTimer";
import useStartHook from "../../hooks/useStartHook";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";

export default function TimeoutPage() {
    const { language } = useSelector((state: RootState) => state.configurationReducer)
    const navigate = useNavigate()
    const start = useStartHook()

    const handleGoToBack = () => {
        navigate(-1)
    }

    return (
        <ServicePageWrapper>
            <div className="service-page-container">
                <Clock />
                <div className="service-page-text-wrapper">
                    <AnimatedTitle
                        title={languageConfig[language].TIMEOUT_PAGE.TIMEOUT_PAGE_TITLE}
                        subTitle={`${languageConfig[language].TIMEOUT_PAGE.TIMEOUT_PAGE_SUBTITLE}${languageConfig[language].BUTTONS.STAY}`}
                    />
                    <div className="title">{null}</div>
                    <div
                        className="service-page-subtitle"
                    >
                        {null}
                    </div>
                </div>
                <ButtonTimer
                    callback={start}
                    onClick={handleGoToBack}
                    timer={9}>
                    {languageConfig[language].BUTTONS.STAY}
                </ButtonTimer>
            </div>
        </ServicePageWrapper>
    )
}