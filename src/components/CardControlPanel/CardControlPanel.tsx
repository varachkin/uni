import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TbTrashXFilled } from "react-icons/tb";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import type { RootState } from "../../store/store";
import {
  addToCart,
  decreeseCartProduct,
  increeseCartProduct,
  removeFromCart,
  setQuantityCartProduct,
} from "../../features/data/dataSlice";
import { useNavigate } from "react-router-dom";

interface Product {
  [key: string]: any;
}

interface CardControlPanelProps {
  handleCloseModal?: () => void;
  product: Product;
  mode?: "cart" | "shop";
  isError?: boolean;
  max?: number;
  discount_code_used?: boolean;
  count?: number;
}

export const CardControlPanel = ({
  handleCloseModal,
  product,
  mode,
  isError,
  max,
  count = 1,
}: CardControlPanelProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(1);
  const [isDisableBtn, setIsDisableBtn] = useState<boolean>(false);
  const { cart } = useSelector((state: RootState) => state.dataReducer);
  const { hasCart } = useSelector((state: RootState) => state.configurationReducer);
  const navigate = useNavigate()
  const { current_quantity, product: { id } } = product;

  const cartProductQuantity = cart.find((item: any) => item?.product?.product?.id === id)?.quantity || 0;
  const maxCount = mode === "cart" ? current_quantity : current_quantity - cartProductQuantity;

  const dispatch = useDispatch();

  const handleIncrees = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    if (counter < maxCount) {
      setCounter((prev) => prev + 1);
    }
  };

  const handleDecrees = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const handleIncreeseCart = () => {
    if (counter < product.current_quantity) {
      dispatch(increeseCartProduct(id));
    }
  };

  const handleDecreeseCart = () => {
    dispatch(decreeseCartProduct(id));
  };

  const handleSetQuantityProductCart = () => {
    dispatch(setQuantityCartProduct({ product_id: product.product_id }));
  };

  const handleRemoveFromCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(removeFromCart(id));
  };

  const handleGoToConfirmProduct = (event: React.MouseEvent<HTMLButtonElement>) =>{
    handleAddToCart(event);
    navigate('/cart')
  }

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(
      addToCart({ quantity: counter, product: { ...product } })
    );
    setCounter(1);
    if (handleCloseModal) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (mode === "cart") {
      setCounter(count);
    }
    if (!maxCount) {
      setIsDisableBtn(true);
    }
  }, [cart, count, maxCount]);

  return (
    <div className="card-control-panel-wrapper">
      {isError ? (
        <Button
          className="service button-full-width"
          onClick={max && max > 0 ? handleSetQuantityProductCart : handleRemoveFromCard}
          id={product?.product_id?.toString()}
        >
          <span>{counter}</span>
          <IoMdArrowRoundForward />
          <span>{max}</span>
        </Button>
      ) : (
        <div className={`card-control-panel ${mode === 'cart' ? 'cart-card-control-panel' : ''}`}>
          {<span
            onClick={hasCart ? mode === "cart" ? handleDecreeseCart : handleDecrees : undefined}
          >
            {!(counter <= 1) && hasCart && <AiOutlineMinus />}
          </span>}
          <div>{isDisableBtn ? 0 : counter}</div>
         {<span
            onClick={hasCart ? mode === "cart" ? handleIncreeseCart : handleIncrees : undefined}
          >
            {counter < maxCount && hasCart && <AiOutlinePlus />}
          </span>}
        </div>
      )}
      {!hasCart ? (
        <Button onClick={handleGoToConfirmProduct}>
          <BsBagCheck />
        </Button>) :
        mode === "cart" ? (
          <Button variant="remove" onClick={handleRemoveFromCard}>
            <TbTrashXFilled />
          </Button>
        ) : (
          <Button onClick={!isDisableBtn ? handleAddToCart : () => { }} disabled={isDisableBtn}>
            <FaCartArrowDown />
          </Button>
        )}
    </div>
  );
};
