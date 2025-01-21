import ServicePageWrapper from "./pages/ServicePageWrapper/ServicePageWrapper";
import useStartHook from "./hooks/useStartHook";

export const NotFoundPage = () => {
    const start= useStartHook()

    return (
        <ServicePageWrapper className="error">
            <div className="notFound-page-wrapper">
                <div>
                    <div className="notFound-page-title" title="404">404</div>
                    <h4 className="notFound-page-subtitle">Page not found</h4>
                </div>
                <button className="notFound-page-button" onClick={start}>
                    TO START
                </button>
            </div>
        </ServicePageWrapper>
    );
};