import AppRouter from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
import { ReactNode } from "react";

interface IAppProps {
  children: ReactNode;
}

export default function App(props : IAppProps) {
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
