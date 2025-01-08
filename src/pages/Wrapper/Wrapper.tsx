import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { ReactNode} from "react";
import { RootState } from "../../store/store";
import SecretDevelopmentMode from "../../components/SecretDevelopmentMode/SecretDevelopmentMode";
import Header from "../../components/Header/Header";
import { DevPanel } from "../../components/DevPanel/DevPanel";
import { Footer } from "../../components/Footer/Footer";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): JSX.Element {
  const { devMode, isMobileDevice } = useSelector(
    (state: RootState) => state.configurationReducer
  );
  const { pathname } = useLocation();

  // Function to toggle fullscreen (custom behavior for iOS)


  // Detect fullscreen mode and handle pathname changes

  // Show fullscreen button if not in fullscreen mode

  // Render the app when in fullscreen mode
  return (
    <>
      {devMode && <DevPanel />}
      <SecretDevelopmentMode />
      <div
        className="page"
        style={{
          // height: isMobileDevice ? "90vh" : "100vh",
          width: "100%",
          overflow: "hidden", // Prevent scrolling when simulating fullscreen
        }}
      >
        <main className="main">
        {!pathname.includes("service") && <Header />}
          {children}
          {!(pathname.includes("service") || pathname === "/" || pathname === "/login" || pathname === "/settings" || pathname === "/cart") && <Footer />}
        </main>
      </div>
    </>
  );
}
