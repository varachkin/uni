import React from "react";
import { useNavigate } from "react-router";
import errorImg from './assets/img/error.webp'
interface ErrorPageProps {
    message: string; // Error message to display
    resetError: () => void; // Function to reset the error state
    errorInfo?: string; // Additional information about the error (optional)
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ message, resetError, errorInfo }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
        resetError();
    };

    return (
        <div className="error-page-wrapper">

            <div>
                <div className="error-page-img-wrapper">
                    <img src={errorImg} alt="error" />
                </div>
                <h3 className="error-page-title">Error. It looks like Szpachelka</h3>
                <h4 className="error-page-subtitle">{message}</h4>
                {errorInfo && <p className="error-page-description">{errorInfo}</p>}
            </div>
            <button className="error-page-button" onClick={handleBack}>
                TO START
            </button>
        </div>
    );
};
