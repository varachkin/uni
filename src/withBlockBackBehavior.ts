import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is the correct typing for an HOC
const withBlockBackBehavior = (
  WrappedComponent: any // This correctly types the wrapped component
): React.FC => {
  const BlockBackHOC: any = (): React.FC => {
    const navigate = useNavigate();

    useEffect(() => {
      const blockBackNavigation = () => {
        window.history.pushState(null, "", window.location.href);
      };

      blockBackNavigation(); // Block back navigation when mounted

      const handlePopState = () => {
        blockBackNavigation();
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, [navigate]);

    return WrappedComponent;
  };

  return BlockBackHOC;
};

export default withBlockBackBehavior;
