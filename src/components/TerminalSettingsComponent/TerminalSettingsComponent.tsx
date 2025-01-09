import { ButtonCancel } from "../ButtonCancel/ButtonCancel"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import { changePreAuthorizationTerminal } from "../../features/configuration/configurationSlice"
import type { RootState } from "../../store/store"
import { languageConfig } from "../../langugeConfig"

export const TerminalSettingsComponent = () => {
    const { language, terminal_preauthorization_payment } = useSelector((state: RootState) => state.configurationReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const handleChangePreauthorization = () => {
        dispatch(changePreAuthorizationTerminal())
    }

    return (
        <div className="terminal-settings-wrapper">
            <section>
                <h3 className="service-page-subtitle">Preauthorization terminal</h3>
                <div
                    className="swich-wrapper"
                >

                    <span className={`${terminal_preauthorization_payment ? '' : 'active-off'}`}>OFF</span>
                    <input type="checkbox" id="terminal_preauthorization_payment" onChange={handleChangePreauthorization} checked={terminal_preauthorization_payment} /><label htmlFor="terminal_preauthorization_payment">Toggle</label>
                    <span className="active-on">ON</span>

                </div>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-waiting')}>Waiting</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-email')}>Email</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/payment')}>payment method</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-warning')}>warning</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-technical-break')}>Technical break</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-success')}>success</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/service-rejected')}>error</Button>
            </section>
            <section className="button-wrapper">
                <Button onClick={() => navigate('/cart')}>cart</Button>
            </section>
            <section className="button-wrapper">
                <ButtonCancel className="cancel" onClick={handleBack}>{languageConfig[language].BUTTONS.BACK}</ButtonCancel>
            </section>
        </div>
    )
}