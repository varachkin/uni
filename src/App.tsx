import AppRouter from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
import { ReactNode, useEffect } from "react";
import screenfull from 'screenfull';

interface IAppProps {
  children: ReactNode;
}

export default function App(props : IAppProps) {
  
  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.request();
    }
  
    // Ensure the app covers the entire viewport on load
    window.scrollTo(0, 1);
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
