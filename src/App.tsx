import AppRouter from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
import { ReactNode, useEffect } from "react";

interface IAppProps {
  children: ReactNode;
}

export default function App(props: IAppProps) {
  const store = setupStore()


  const requestFullScreen = () => {
    const docElm = document.documentElement; // The root element of your app
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if ((docElm as any).webkitRequestFullscreen) {
      (docElm as any).webkitRequestFullscreen(); // Safari
    } else if ((docElm as any).mozRequestFullScreen) {
      (docElm as any).mozRequestFullScreen(); // Firefox
    } else if ((docElm as any).msRequestFullscreen) {
      (docElm as any).msRequestFullscreen(); // IE/Edge
    }
  };

  useEffect(() => {
    // Request full-screen mode when the app loads
    requestFullScreen();

    // Optionally, you can reapply fullscreen on "popstate" (browser back button)
    const handlePopState = () => {
      requestFullScreen();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <SnackbarProvider maxSnack={7}>
          <AppRouter {...props} />
        </SnackbarProvider>
      </Provider>
    </>
  );
}
