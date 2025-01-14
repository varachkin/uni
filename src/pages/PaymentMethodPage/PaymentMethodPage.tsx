import { IdleTimerProvider } from "react-idle-timer";
import useLogoutHook from "../../hooks/useLogoutHook";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import cashImg from './../../assets/img/cash-method.webp';
import cardImg from './../../assets/img/card-method.webp';
// import blikImg from './../../assets/img/blik-method.webp';
import QRImg from './../../assets/img/QR-method.webp';
import { useEffect, useRef, useState } from "react";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import { Button } from "../../components/Button/Button";
import { TouchScreenList } from "../../components/TouchScreenList/TouchScreenList";

export default function PaymentMethodPage(): JSX.Element {
    const onIdle = useLogoutHook(); // Custom hook, already typed elsewhere
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null); // Input element ref
    const [secretInput, setSecretInput] = useState<string>('');

    // Selector to get state from Redux
    const { language, QRCodeMode, employeeMode, clientTimeoutIdle, hasCart, isMobileDevice } = useSelector((state: RootState) => state.configurationReducer);

    const handleGoToPayWithCash = (): void => {
        navigate('/service-cash-payment', { replace: true });
    };

    const handleGoToPayWithCard = (): void => {
        navigate('/service-card-payment', { replace: true });
    };

    const handleGoToPayWithQR = (): void => {
        navigate('/service-qr-payment', { replace: true });
    };

    const handleGoBack = (): void => {
        if(!hasCart){
            navigate(-1);
        }else{
            navigate('/cart');
        }
        
    };

    const handleChangeSecretInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSecretInput(event.target.value);
    };

    const handleFocusInput = (): void => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        handleFocusInput();
    }, []); // Runs once when the component mounts

    useEffect(() => {
        if (inputRef && secretInput && secretInput.length === 10) {
            navigate("/service-employee-card-payment", {
                state: {
                    employeeId: secretInput,
                },
            });
        }
    }, [secretInput, navigate]);

    return (
        <IdleTimerProvider timeout={clientTimeoutIdle} onIdle={onIdle}>
            <>
                {employeeMode && (
                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                        {!isMobileDevice && <input
                            onChange={handleChangeSecretInput}
                            value={secretInput}
                            style={{
                                fontSize: '3rem',
                                position: 'fixed',
                                top: '-1000%'
                            }}
                            ref={inputRef}
                        />}
                    </div>
                )}
                <div className="payment-method-container" onClick={handleFocusInput}>

                    <div className="title">{languageConfig[language].PAYMENT_PAGE.PAYMENT_PAGE_TITLE}</div>
                    <TouchScreenList center={true}>
                        <div className="payment-method-wrapper-list">

                            <div className="payment-method-wrapper" onClick={handleGoToPayWithCard}>
                                <div className="payment-method-block">
                                    <img src={cardImg} alt="card" />
                                </div>
                                <div className="service-page-subtitle">{languageConfig[language].PAYMENT_PAGE.CARD}</div>
                            </div>

                            {QRCodeMode && (
                                <div className="payment-method-wrapper" onClick={handleGoToPayWithQR}>
                                    <div className="payment-method-block">
                                        <img src={QRImg} alt="QR" />
                                    </div>
                                    <div className="service-page-subtitle">{languageConfig[language].PAYMENT_PAGE.QR}</div>
                                </div>
                            )}

                            <div className="payment-method-wrapper" onClick={handleGoToPayWithCash}>
                                <div className="payment-method-block">
                                    <img src={cashImg} alt="cash" />
                                </div>
                                <div className="service-page-subtitle">{languageConfig[language].PAYMENT_PAGE.CASH}</div>
                            </div>
                        </div>
                    </TouchScreenList>
                    <div className="service-page-subtitle">
                        <Button
                            className="btn"
                            onClick={handleGoBack}
                        >
                            <TbCircleArrowLeftFilled /> {languageConfig[language].BUTTONS.BACK}
                        </Button>
                    </div>
                </div>
            </>
        </IdleTimerProvider>
    );
}
