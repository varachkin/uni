import React, { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
import { languageConfig } from "../../langugeConfig";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Loader from "../Loader/Loader";

interface ModalProps {
    handleCloseModal: () => void;
    children?: ReactNode;
    type: 'accepted' | 'rejected' | boolean;
    isLoading?: boolean;
    callBack?: () => void;
}

export const Alert: React.FC<ModalProps> = ({ handleCloseModal, children, type = 'rejected', isLoading, callBack }) => {
    const {language} = useSelector((state: RootState) => state.configurationReducer)
    useEffect(() => {
        if(!isLoading){
            setTimeout(() => {
                handleCloseModal()
                if(callBack && type === 'accepted') callBack()
            }, 5000)
        }
    }, [handleCloseModal, isLoading]);

    const modalRoot = document.getElementById("root-modal");
    if (!modalRoot) {
        console.error("The element with id 'root-modal' was not found in the DOM.");
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fullscreen-overlay">
            {isLoading ? <Loader size={15}/> : type === "accepted" ? (
                <div className="o-circle c-container__circle o-circle__sign--success">
                    <div className="o-circle__sign"></div>
                </div>
            ) : (
                <div className="o-circle c-container__circle o-circle__sign--failure">
                    <div className="o-circle__sign"></div>
                </div>
            )}
            {!isLoading && <AnimatedTitle
                title={type === "accepted" ? languageConfig[language].ALERT.TITLE_ACCEPTED : languageConfig[language].ALERT.TITLE_REJECTED}
                subTitle={type === "accepted" ? languageConfig[language].ALERT.TITLE_ACCEPTED : languageConfig[language].ALERT.TITLE_REJECTED}
            />}
            {children}
        </div>,
        modalRoot
    );
};
