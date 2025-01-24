import { useDispatch, useSelector } from "react-redux"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import type { RootState } from "../../store/store"
import { changeSwiperEffect, changeSwiperLoop, decrementSwiperProductsPerSlide, incrementSwiperProductsPerSlide } from "../../features/configuration/configurationSlice"
import { TouchScreenList } from "../TouchScreenList/TouchScreenList"

export const SwiperSettingsComponent = () => {
    const { swiperSettings } = useSelector((state: RootState) => state.configurationReducer)
    const dispatch = useDispatch()


    const handleChangeSwiperEffect = () => {
        swiperSettings.effect !== 'cube' ? dispatch(changeSwiperEffect('cube')) : dispatch(changeSwiperEffect('coverflow'))
    }
    const handleInrement = () => {
        dispatch(incrementSwiperProductsPerSlide())
    }

    const handleDerement = () => {
        dispatch(decrementSwiperProductsPerSlide())
    }

    const handleChangeSwiperLoop = () => {
        dispatch(changeSwiperLoop())
    }

    return (
        <>
            <div className="setting-tab-wrapper">
                <TouchScreenList>
                    <section>
                        <h3 className="service-page-subtitle">Swiper effect</h3>
                        <div className="swich-wrapper">
                            <span className={`${swiperSettings.effect !== 'cube' ? "" : "active-off"}`}>CUBE</span>
                            <input
                                type="checkbox"
                                id="swiperEffect"
                                onChange={handleChangeSwiperEffect}
                                checked={swiperSettings.effect !== 'cube'}
                            />
                            <label htmlFor="swiperEffect">Toggle</label>
                            <span className="active-on">CARD</span>
                        </div>

                        <h3 className="service-page-subtitle">Infinity loop</h3>
                        <div className="swich-wrapper">
                            <span className={`${swiperSettings.loop ? "" : "active-off"}`}>OFF</span>
                            <input
                                type="checkbox"
                                id="swiperLoop"
                                onChange={handleChangeSwiperLoop}
                                checked={swiperSettings.loop}
                            />
                            <label htmlFor="swiperLoop">Toggle</label>
                            <span className="active-on">ON</span>
                        </div>
                        <h3 className="service-page-subtitle">Max products per slide</h3>
                        <div className="card-control-panel" style={{ width: '30vw', margin: '2vw auto', fontSize: '6vw', padding: '3vw' }}>
                            <span onClick={handleDerement}>{swiperSettings.cardsPerSlide > 1 && <AiOutlineMinus />}</span>
                            <div>{swiperSettings.cardsPerSlide}</div>
                            <span onClick={handleInrement}>{swiperSettings.cardsPerSlide < 4 && <AiOutlinePlus />}</span>
                        </div>
                    </section>
                </TouchScreenList>
            </div>
        </>
    )
}