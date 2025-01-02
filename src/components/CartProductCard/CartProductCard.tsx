import { useSelector } from "react-redux";
import { CardControlPanel } from "../CardControlPanel/CardControlPanel";
import type { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import DEFAULT_IMAGE_URL from '/DefaultImage.png'
import { imagesUrl } from "../../API";

interface Product {
  [key: string]: any
}

interface CartProductCardProps {
  count: number;
  product: Product;
  isError: boolean;
  discount_code_used?: boolean;
}

export const CartProductCard = ({
  count,
  product,
  isError,
  discount_code_used,
}: CartProductCardProps): JSX.Element => {
  const { language, currency } = useSelector((state: RootState) => state.configurationReducer);
  const {
    product: {
      id,
      price,
      info
    }
  } = product;

  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const imageSrc = `${imagesUrl}${id}.webp`;
      const img = new Image();
      img.src = imageSrc;
      img.onerror = () => setHasError(true)

    }
  }, [id]);

  return (
    <div className={`cart-card-wrapper ${isError ? "error-card" : ""}`}>
      <div
        className="cart-product-img-block"
        style={{
          backgroundImage: `url('${hasError ? DEFAULT_IMAGE_URL : `${imagesUrl}${id}.webp`}')`,
        }}
      ></div>
      <div className="cart-card-description-block">
        <div className="cart-card-subtitle">{info?.[language]?.name}</div>
        <div className="cart-card-title">{info?.[language]?.description}</div>
        <div className="card-control-block">
          <div className="cart-card-price-block">
            {price?.discounted ? (
              <>
                <div className="current-price">
                  {currency} {price?.discounted.toFixed(2)}
                  <span className="old-price">
                    {<>{currency} {price?.regular?.toFixed(2)}</>}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="current-price">
                  {currency} {price?.regular?.toFixed(2)}
                </div>
              </>
            )}
          </div>
          <CardControlPanel
            count={count}
            discount_code_used={discount_code_used}
            product={product}
            mode="cart"
            max={product.current_quantity}
            isError={isError}
          />
        </div>
      </div>
    </div>
  );
};
