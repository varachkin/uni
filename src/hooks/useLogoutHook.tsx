import { useNavigate } from "react-router";

export default function useLogoutHook() {
  let navigate = useNavigate();
  const onIdle = () => {
    navigate("/service-timeout");
  };
  
  return onIdle;
}
