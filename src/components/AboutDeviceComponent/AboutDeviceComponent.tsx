import { ButtonCancel } from "../ButtonCancel/ButtonCancel"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { languageConfig } from "../../langugeConfig"
import { TouchScreenList } from "../TouchScreenList/TouchScreenList"

export const AboutDeviceComponent = () => {
    const { language, serial } = useSelector((state: RootState) => state.configurationReducer)
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className="settings-page-wrapper">
            <div className="setting-tab-wrapper">
                <TouchScreenList>
                    <h2 className='title'>About device</h2>
                    <section>
                        <h2 className="title">SERIAL NUMBER:</h2>
                        <div className="service-page-subtitle">{serial}</div>
                        <h2 className="title">IP ADDRESS:</h2>
                        {/* <div className="service-page-subtitle">{ip}</div> */}
                    </section>
                </TouchScreenList>
            </div>
            <section className="button-wrapper">
                <ButtonCancel className="cancel" onClick={handleBack}>{languageConfig[language].BUTTONS.BACK}</ButtonCancel>
            </section>
        </div>
    )
}