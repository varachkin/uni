import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/data/dataSlice";

export default function useStartHook() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onIdle = () => {
    dispatch(clearCart())
    navigate("/");
  };
  
  return onIdle;
}
