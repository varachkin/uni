import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface PromiseWithStatus {
  status: number;
}

export default function useSnack() {
    const { devMode } = useSelector((state: RootState) => state.configurationReducer);
    let showAlert: (promise: PromiseWithStatus, text?: string) => void = () => {};
    if (devMode) {
        // Update showAlert with the correct type when devMode is true
        showAlert = (promise: PromiseWithStatus, text = '') => {
            if (promise?.status >= 200 && promise?.status < 300) {
                enqueueSnackbar('/' + text, { variant: 'success' });
            } else if (promise.status >= 300) {
                enqueueSnackbar('/' + text, { variant: 'error' });
            } else {
                enqueueSnackbar('/' + text, { variant: 'error' });
            }
        };
    }

    return showAlert;
}
