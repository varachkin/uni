import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { changeDevMode } from "../../features/configuration/configurationSlice";

const SecretDevelopmentMode: React.FC = () => {
  const { devMode } = useSelector((state: RootState) => state.configurationReducer);
  const [clickCount, setClickCount] = useState<number>(0);
  const devModeRef = useRef<HTMLSpanElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };
    const element = devModeRef.current;
    if (element) {
      element.addEventListener("click", handleClick);
    }
    
    return () => {
      if (element) {
        element.removeEventListener("click", handleClick);
      }
    };
  }, []);

  // Effect for handling triple clicks
  useEffect(() => {
    if (clickCount === 3) {
      dispatch(changeDevMode());
      setClickCount(0); // Reset the click count after enabling dev mode
    }

    // Reset click count after 1 second
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 1000);

    return () => {
      clearTimeout(timer); // Clear timeout on cleanup
    };
  }, [clickCount, dispatch]);

  return (
    <span
      className={`secret-btn-dev ${devMode ? "active-label" : ""}`}
      ref={devModeRef}
    >
      {devMode && <span>DEV MODE ENABLED</span>}
    </span>
  );
};

export default SecretDevelopmentMode;
