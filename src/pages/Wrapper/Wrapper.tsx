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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Function to toggle fullscreen
  const toggleFullScreen = () => {
    const elem = document.documentElement; // Full app
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    }
  };

  // Check fullscreen state whenever the location (pathname) changes
  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement); // Update state
    };

    // Event listener for fullscreen changes
    document.addEventListener("fullscreenchange", checkFullscreen);
    document.addEventListener("webkitfullscreenchange", checkFullscreen); // Safari
    document.addEventListener("msfullscreenchange", checkFullscreen); // IE/Edge

    // Initial check on component mount and pathname change
    checkFullscreen();

    return () => {
      // Cleanup event listeners
      document.removeEventListener("fullscreenchange", checkFullscreen);
      document.removeEventListener("webkitfullscreenchange", checkFullscreen);
      document.removeEventListener("msfullscreenchange", checkFullscreen);
    };
  }, [pathname]); // Re-run on pathname change

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
      <div className="page" style={{ height: isMobileDevice ? "90vh" : "100vh" }}>
        <main className="main">
          {!pathname.includes("service") && <Header />}
          {children}
          {!(pathname.includes("service") || pathname === "/" || pathname === "/login" || pathname === "/settings" || pathname === "/cart") && <Footer />}
        </main>
      </div>
    </>
  );
}
