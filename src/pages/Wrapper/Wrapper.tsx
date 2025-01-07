import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { RootState } from "../../store/store";
import SecretDevelopmentMode from "../../components/SecretDevelopmentMode/SecretDevelopmentMode";
import Header from "../../components/Header/Header";
import { DevPanel } from "../../components/DevPanel/DevPanel";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): JSX.Element {
  const { devMode, isMobileDevice } = useSelector(
    (state: RootState) => state.configurationReducer
  );
  const { pathname } = useLocation();
  const [isFullscreen, setIsFullscreen] = useState<boolean>(true);

  // Function to toggle fullscreen (custom behavior for iOS)
  const toggleFullScreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      // Enter fullscreen (standard API)
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else {
        // Fallback for iOS: simulate fullscreen via CSS
        setIsFullscreen(true);
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        // Fallback for iOS
        setIsFullscreen(false);
      }
    }
  };

  // Detect fullscreen mode and handle pathname changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement); // Update state
    };

    // Listen for fullscreen changes
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari

    // Initial check on component mount
    handleFullscreenChange();

    return () => {
      // Cleanup event listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, [pathname]);

  // Show fullscreen button if not in fullscreen mode
  if (!isFullscreen) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button onClick={toggleFullScreen}>Enter Fullscreen</Button>
      </div>
    );
  }

  // Render the app when in fullscreen mode
  return (
    <>
      {devMode && <DevPanel />}
      <SecretDevelopmentMode />
      <div
        className="page"
        style={{
          height: isMobileDevice ? "90vh" : "100vh",
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
