import { useSelector } from "react-redux";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import DEFAULT_IMAGE_URL from '/DefaultImage.png'
import { useEffect, useState } from "react";
import { imagesUrl } from "../../API";

interface ProductCardProps {
  product: Product; // Define `Product` based on the product structure
  handleOpenModal?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Function to handle modal open
  box?: number; // Optional, represents the box number
  productPath?: string; // Optional, for additional product path handling
  className?: string; // Additional classes for styling
}

interface Product {
  [key: string]: any;
}

export const ProductCard = ({
  product,
  handleOpenModal,
  className = "",
}: ProductCardProps) => {
  const { cart } = useSelector((state: RootState) => state.dataReducer);
  const { language, currency } = useSelector((state: RootState) => state.configurationReducer);
  const {
    current_quantity,
    product: {
      id,
      price,
      info
    }
  } = product;


  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (handleOpenModal) {
      handleOpenModal(e);
    }

  };
  // const {details} = product;
  const isExist = cart.find((cartProduct: any) => id === cartProduct.product.product.id);

  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const imageSrc = `${imagesUrl}${id}.webp`;

      // Check if the image is accessible
      const img = new Image();
      img.src = imageSrc;
      img.onerror = () => setHasError(true)

    }
  }, [id]);

  return (
    <div
      className={`swiper-card-wrapper ${className} ${!current_quantity ? "disabled" : ""
        }`}
      id={id}
      onClick={current_quantity ? handleClick : undefined}
    >
      {!product?.current_quantity && (
        <div className="not-available-label">
          {languageConfig[language]?.HOME_PAGE?.NOT_AVALIABLE || 'UNKNOWN'}
        </div>
      )}
      {isExist && (
        <span className={`card-box-number ${isExist ? "exist" : ""}`}>✔︎</span>
      )}
      <div className="swiper-card-img-block">
        <div
          style={{
            backgroundImage: `url('${hasError ? DEFAULT_IMAGE_URL : `${imagesUrl}${id}.webp`}')`,
          }}
        ></div>
      </div>
      <div className="swiper-card-description-block">
        <div className="swiper-card-name">{info?.[language]?.name}</div>
        <div className="swiper-card-description">
          {info?.[language]?.description}
        </div>
      </div>
      <div className="swiper-card-price-block">
        {price?.discounted ? (
          <div className="current-price">
            {price?.discounted?.toFixed(2)} {currency}
            <span className="old-price">
              {price?.regular?.toFixed(2)} {currency}
            </span>
          </div>
        ) : (
          <div className="current-price">
            {price?.regular?.toFixed(2)} {currency}
          </div>
        )}
      </div>
    </div>
  );
};
