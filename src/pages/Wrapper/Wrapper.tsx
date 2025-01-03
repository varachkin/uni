import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
import { RootState } from "../../store/store";
import SecretDevelopmentMode from "../../components/SecretDevelopmentMode/SecretDevelopmentMode";
import Header from "../../components/Header/Header";
import { DevPanel } from "../../components/DevPanel/DevPanel";
import { Footer } from "../../components/Footer/Footer";


interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): JSX.Element {
    const { devMode } = useSelector((state: RootState) => state.configurationReducer)
    const { pathname } = useLocation();
    const enterFullscreen = () => {
        const element = document.documentElement; // Fullscreen for the entire page
        if (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.requestFullscreen) {
                element.requestFullscreen();
            }
        }
    };

    useEffect(() => {
        enterFullscreen()
        const preventNavigation = () => {
            history.pushState(null, '', window.location.href);
        };

        const handlePopState = () => {
            const el = document.documentElement;
            if (el.requestFullscreen) {
                el.requestFullscreen();
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('popstate', preventNavigation);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('popstate', preventNavigation);
        };
    }, [pathname])
    return (
        <>
            {devMode && <DevPanel />}
            <SecretDevelopmentMode />
            <main className="page">
                <main className="main">
                    {!pathname.includes('service') && <Header />}
                    {children}
                    {!(pathname.includes('service') || pathname === '/' || pathname === '/login' || pathname === '/settings' || pathname === '/cart') && <Footer />}
                </main>
            </main>
        </>

    )
}