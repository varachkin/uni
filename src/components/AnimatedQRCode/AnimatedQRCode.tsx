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
            bgColor: "#0e0e0e",
            fgColor: "#a0a0a0",
            shadow_1: '#d3e7f000',
            shadow_2: '#d3e7f082',
        },
        reverse: {
            bgColor: "#a0a0a0",
            fgColor: "#0e0e0e",
            shadow_1: '#1d202255',
            shadow_2: '#1d202282',
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
                        size={400}
                        logoHeight={75}
                        logoWidth={75}
                        style={{
                            backgroundColor: configQR.default.bgColor,
                            borderRadius: "1rem",
                            aspectRatio: '1/1',
                            padding: '0.5vh',
                            boxShadow: `${configQR.default.shadow_1} 0px 2px 4px 0px, ${configQR.default.shadow_2} 0px 2px 16px 0px`
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
                        size={360}
                        logoHeight={75}
                        logoWidth={75}
                        style={{
                            backgroundColor: configQR.reverse.bgColor,
                            borderRadius: "1rem",
                            aspectRatio: '1/1',
                            padding: '0.5vh',
                            boxShadow: `${configQR.reverse.shadow_1} 0px 2px 4px 0px, ${configQR.reverse.shadow_2} 0px 2px 16px 0px`
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