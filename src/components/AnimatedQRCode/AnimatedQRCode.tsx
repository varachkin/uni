import { QRCode } from 'react-qrcode-logo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

type AnimatedQRCodeProps = {
    url: string
}

export const AnimatedQRCode = ({ url }: AnimatedQRCodeProps) => {
    const { animatedQR } = useSelector((state: RootState) => state.configurationReducer)
    const configQR = {
        default: {
            bgColor: "#807e7e",
            fgColor: "#050505",
        },
        reverse: {
            bgColor: "#a0a0a0",
            fgColor: "#0e0e0e",
        }
    }
    useEffect(() => {
        const card: Element | null = document.querySelector('.card');
        const qrConfigInterval = setInterval(() => {
            card?.classList.toggle('is-flipped');
        }, 15000);

        // Cleanup the interval on component unmount
        return () => clearInterval(qrConfigInterval);
    }, []);

    return (
        <div className="scene scene--card">
            <div className={`card ${animatedQR ? 'animated' : ''}`}>
                <div className="card__face card__face--front">
                    <QRCode
                        value={url}
                        logoImage={''}
                        // size={420}
                        logoHeight={75}
                        logoWidth={75}
                        style={{
                            backgroundColor: configQR.default.bgColor,
                            borderRadius: "1rem",
                            height: '30vh',
                            width: '30vh',
                            aspectRatio: '1/1',
                            padding: '0.75vh',
                            boxShadow: `rgba(20, 22, 22, 0) 0px 2px 4px 0px, #d3e7f024 0px 2px 16px 0px`
                        }}
                        bgColor={configQR.default.bgColor}
                        fgColor={configQR.default.fgColor}
                        qrStyle="dots"
                        logoOpacity={0.8}
                        eyeRadius={[
                            50,  // top/left eye
                            50, // top/right eye
                            50,  // bottom/left eye
                        ]}
                        removeQrCodeBehindLogo={true}
                        logoPadding={7}
                    />
                </div>
                <div className="card__face card__face--back">
                    <QRCode
                        value={url}
                        logoImage={''}
                        // size={420}
                        logoHeight={75}
                        logoWidth={75}
                        style={{
                            backgroundColor: configQR.reverse.bgColor,
                            borderRadius: "1rem",
                            height: '30vh',
                            width: '30vh',
                            aspectRatio: '1/1',
                            padding: '0.75vh',
                            boxShadow: `rgba(0, 0, 0, 0) 0px 2px 4px 0px,rgba(0, 0, 0, 0.14) 0px 2px 16px 0px`
                        }}
                        bgColor={configQR.reverse.bgColor}
                        fgColor={configQR.reverse.fgColor}
                        qrStyle="dots"
                        logoOpacity={0.8}
                        eyeRadius={[
                            50,  // top/left eye
                            50, // top/right eye
                            50,  // bottom/left eye
                        ]}
                        removeQrCodeBehindLogo={true}
                        logoPadding={7}
                    /></div>
            </div>
        </div>

    )
}