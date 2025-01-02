import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { CardControlPanel } from "../CardControlPanel/CardControlPanel";
import DEFAULT_IMAGE_URL from "/DefaultImage.png";
import { languageConfig } from "../../langugeConfig";
import { imagesUrl } from "../../API";

interface ModalCardProductProps {
  modalProductID: string; // The ID of the product being shown
  handleCloseModal: () => void; // Function to handle closing the modal
  handleCloseFadeOut: () => void; // Function to handle fade-out animation
}

type ProductInfo = {
  name: string;
  description: string;
  [key: string]: any; // Allow dynamic properties
};

export const getRestProperties = (info: ProductInfo) => {
  const { name, description, ...rest } = info; // Extract 'name' and 'description', rest are dynamic
  return rest;
};

export const ModalCardProduct = ({
  modalProductID,
  handleCloseFadeOut,
}: ModalCardProductProps): JSX.Element => {
  const { products } = useSelector((state: RootState) => state.dataReducer);
  const { language, currency } = useSelector((state: RootState) => state.configurationReducer);

  const product: any | undefined = products.find((el: any) => el?.product?.id == modalProductID); // == for JS number => string
  const {
    product: { id, price, info },
  } = product || {};

  const restProps = getRestProperties(info?.[language] || {});
  const onSale = false; // Placeholder for future onSale logic

  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE_URL);

  useEffect(() => {
    if (id) {
      const imageSrc = `${imagesUrl}${id}.webp`;

      // Check if the image is accessible
      const img = new Image();
      img.onload = () => setImageUrl(imageSrc); // If the image loads successfully, use it
      img.src = imageSrc;
    }
  }, [id]);

  return (
    <div className="modal-card-wrapper">
      {onSale && <div className="sale"></div>}
      <div
        className="modal-card-img-block"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></div>
      <div className="modal-card-title">{info?.[language]?.name}</div>
      <div className="modal-card-subtitle">{info?.[language]?.description}</div>
      <div className="modal-card-description-block">
        <div className="modal-card-description-wrapper">
          <div className="modal-card-description">
            <ul>
              {Object.entries(restProps).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="modal-card-control-block">
        <div className="modal-card-price-block">
          {price?.discounted ? (
            <div
            className="mmodal-card-price-block-wrapper"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "20px",
                alignItems: "space-between",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="current-price">
                {price?.discounted?.toFixed(2)} {currency}
              </div>

              <div className="old-price">
                {price?.regular?.toFixed(2)} {currency}
              </div>
            </div>
          ) : (
            <div className="current-price">
              {currency} {price?.regular?.toFixed(2)}
            </div>
          )}
        </div>
        <CardControlPanel handleCloseModal={handleCloseFadeOut} product={product} />
      </div>

      {price?.lowest?.toFixed(0) && (
        <div className="modal-card-additional-info">
          {languageConfig[language].PRODUCT.PRICE_FROM_30_DAYS}:{" "}
          {<>{price?.lowest?.toFixed(2)}</>}
          {currency}
        </div>
      )}
    </div>
  );
};
