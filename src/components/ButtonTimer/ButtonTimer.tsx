import { useState, useEffect, ReactNode } from 'react';

interface ButtonTimerProps {
    children?: ReactNode;
    onClick?: () => void;
    callback?: () => void;
    status?: 'error' | 'success' | 'default' | 'warning';
    timer?: number;
}

export const ButtonTimer: React.FC<ButtonTimerProps> = ({
    children,
    onClick,
    callback,
    status = 'default',
    timer = 9,
}) => {
    const [countdown, setCountdown] = useState<number>(timer);
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = () => {
        if (onClick) onClick();
        setCountdown(0); // End the countdown when clicked
    };

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(intervalID);
                    if (callback) callback();
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(intervalID); // Cleanup interval on unmount
    }, [callback]);

    useEffect(() => {
        if (countdown <= Math.round(timer / 4) && !disabled) {
            setDisabled(true);
        }
    }, [countdown, timer, disabled]);

    const progressPercentage = (countdown / timer) * 100;

    return (
        <button
            className={`button light ${status} ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <div
                className="countdown-container"
                style={{ '--progress': `${progressPercentage}%` } as React.CSSProperties} // Pass progress to CSS variable
            >
                <div className="countdown" id="countdown">
                    {countdown}
                </div>
            </div>
            {children}
        </button>
    );
};
