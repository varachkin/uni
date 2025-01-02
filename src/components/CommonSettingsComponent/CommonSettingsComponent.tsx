import { ButtonCancel } from "../ButtonCancel/ButtonCancel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeAnimatedQR,
  changeCartMode,
  changeDiscountCodeMode,
  changeEmployeeMode,
  changeMobileAppMode,
  changeQRCodeMode
} from "../../features/configuration/configurationSlice";
import type { RootState } from "../../store/store";
import { languageConfig } from "../../langugeConfig";
import { Swicher } from "../Swicher/Swicher";

export const CommonSettingsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const { QRCodeMode, employeeMode, mobileAppMode, discountCodeMode, animatedQR, language, hasCart } = useSelector((state: RootState) => state.configurationReducer);

  const handleChangeQrPay = () => {
    dispatch(changeQRCodeMode());
  };

  const handleChangeEmployeePay = () => {
    dispatch(changeEmployeeMode());
  };

  const handleChangeMobileApp = () => {
    dispatch(changeMobileAppMode());
  };

  const handleChangeAnimateQR = () => {
    dispatch(changeAnimatedQR());
  };

  const handleChangeDiscontMode = () => {
    dispatch(changeDiscountCodeMode());
  };

  const handleChangeCartMode = () => {
    dispatch(changeCartMode());
  };

  return (
    <div className="terminal-settings-wrapper">
      <div>

        <Swicher checked={hasCart} handleChange={handleChangeCartMode}>
          <h3 className="service-page-subtitle">Cart mode</h3>
        </Swicher>

        <Swicher checked={QRCodeMode} handleChange={handleChangeQrPay}>
          <h3 className="service-page-subtitle">PAY with QR</h3>
        </Swicher>

        <Swicher checked={employeeMode} handleChange={handleChangeEmployeePay}>
          <h3 className="service-page-subtitle">PAY with EMPLOYEE CARD</h3>
        </Swicher>

        <Swicher checked={mobileAppMode} handleChange={handleChangeMobileApp}>
        <h3 className="service-page-subtitle">Mobile APP <br />(QR Code on start page)</h3>
        </Swicher>

        <Swicher checked={animatedQR} handleChange={handleChangeAnimateQR}>
        <h3 className="service-page-subtitle">Animate QR on start page</h3>
        </Swicher>

        <Swicher checked={discountCodeMode} handleChange={handleChangeDiscontMode}>
        <h3 className="service-page-subtitle">Discount code</h3>
        </Swicher>

      </div>
      <section className="button-wrapper">
        <ButtonCancel className="cancel" onClick={handleBack}>
          {languageConfig[language].BUTTONS.BACK}
        </ButtonCancel>
      </section>
    </div>
  );
};
