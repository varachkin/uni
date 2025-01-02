import { useNavigate } from "react-router";
import ServicePageWrapper from "./pages/ServicePageWrapper/ServicePageWrapper";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };


    return (
        <ServicePageWrapper className="error">
            <div className="notFound-page-wrapper">
                <div>
                    <div className="notFound-page-title" title="404">404</div>
                    <h4 className="notFound-page-subtitle">Page not found</h4>
                </div>
                <button className="notFound-page-button" onClick={handleBack}>
                    TO START
                </button>
            </div>
        </ServicePageWrapper>
    );
};