import {useState} from "react";
import { useSelector } from "react-redux";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import type { RootState } from "../../store/store";
import { Gears } from "../../components/Gears/Gears";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import { languageConfig } from "../../langugeConfig";

export default function TechnicalBreakPage() {
    const [content] = useState({
        title: null,
        subTitle: null,
    })

    const { language } = useSelector((state : RootState) => state.configurationReducer)

    return (
        <ServicePageWrapper>
            <div className="technicalbreak-container">
                <div className="service-page-container">
                    <Gears/>
                    <div className="title">{languageConfig[language].SERVICE_PAGE.TECHNICAL_BREAK_TITLE}</div>
                    {<AnimatedTitle {...content} />}
                </div>
            </div>
        </ServicePageWrapper>
    )
}
