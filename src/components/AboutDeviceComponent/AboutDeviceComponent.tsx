import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { TouchScreenList } from "../TouchScreenList/TouchScreenList"

export const AboutDeviceComponent = () => {
    const { serial } = useSelector((state: RootState) => state.configurationReducer)

    return (
        <>
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
            
        </>
    )
}