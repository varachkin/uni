import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { RootState } from "../../store/store";
import SecretDevelopmentMode from "../../components/SecretDevelopmentMode/SecretDevelopmentMode";
import Header from "../../components/Header/Header";
import { DevPanel } from "../../components/DevPanel/DevPanel";
import { Footer } from "../../components/Footer/Footer";

interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): JSX.Element {
    const { devMode, isMobileDevice } = useSelector((state: RootState) => state.configurationReducer)
    const { pathname } = useLocation();
    return (
        <>
            {devMode && <DevPanel />}
            <SecretDevelopmentMode />
            <main className="page" style={{height: isMobileDevice ? '90vh' : '100vh'}}>
                <main className="main">
                    {!pathname.includes('service') && <Header />}
                    {children}
                    {!(pathname.includes('service') || pathname === '/' || pathname === '/login' || pathname === '/settings' || pathname === '/cart') && <Footer />}
                </main>

            </main>

        </>

    )
}