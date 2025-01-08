import AppRouter from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
import { ReactNode, useEffect } from "react";

interface IAppProps {
  children: ReactNode;
}

export default function App(props : IAppProps) {
  useEffect(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }, []);
  
  
  const store = setupStore()
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
