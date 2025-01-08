import { IdleTimerProvider } from "react-idle-timer";
import useLogoutHook from "../../hooks/useLogoutHook";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { MdPublishedWithChanges, MdCancel } from "react-icons/md";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getProducts } from "../../API";
import {
  clearCart,
  removeFromCart,
  setProducts,
  setQuantityCartAllProducts,
  setQuantityCartProduct,
  // updateCart,
  // applyDiscountCode,
} from "../../features/data/dataSlice";
import { languageConfig } from "../../langugeConfig";
import Loader from "../../components/Loader/Loader";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import { TouchScreenList } from "../../components/TouchScreenList/TouchScreenList";
import { InputWithKeyboard } from "../../components/InputWithKeyboard/InputWithKeyboard";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import type { RootState } from "../../store/store";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";
import { hardCodeProducts } from "../../constants";
import { ProductCard } from "../../components/ProductCard/ProductCard";

// Define types for Cart and Product
interface Product {
  product_id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  promo_code_used?: boolean;
  [key: string]: any;
}

interface CartPageProps { }

// Main Component
export default function CartPage({ }: CartPageProps): JSX.Element {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [product, setPrduct] = useState(null)
  // const [showAlert, setShowAlert] = useState<string | null>(null);

  const onIdle = useLogoutHook();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { language, serial, discountCodeMode, clientTimeoutIdle, hasCart, isMobileDevice } = useSelector((state: RootState) => state.configurationReducer);
  const { cart } = useSelector((state: RootState) => state.dataReducer);

  const handleGoBack = () => {
    if (!hasCart) {
      dispatch(clearCart())
    }
    navigate("/home");
  };

  const handleGoToPaymentPage = () => {
    navigate("/payment");
  };

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleLoadFakeProducts = () => {
    setIsLoaded(true);
    dispatch(setProducts(hardCodeProducts))
  }

  const handleChangeAllCartQuantity = () => {
    cart.forEach((product) => {
      if (product.count > product.product.quantity) {
        if (product.product.quantity) {
          dispatch(setQuantityCartProduct(product.product_id));
        } else {
          dispatch(removeFromCart(product.product_id));
        }
      }
    });
    dispatch(setQuantityCartAllProducts());
    handleCloseModal();
  };

  const handleSubmitCode = (code: string) => {
    console.log(code)
  };

  const handleGetProducts = () => {
    setIsLoading(true);
    if (serial) {
      getProducts(serial)
        .then((response) => {
          if (response.status === 200) {
            dispatch(setProducts(response.data.products));
            setIsLoaded(true);
          } else {
            // setIsLoaded(false);
            handleLoadFakeProducts()
          }
        })
        .catch(() => {
          // setIsLoaded(false);
          handleLoadFakeProducts()
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    const hasError = cart.some((product: Product) => product.count > product.product.quantity);
    setIsError(hasError);
  }, [cart]);

  useEffect(() => {
    handleGetProducts();
    if (cart.length) {
      setPrduct(cart?.[0]?.product)
    }
  }, []);

  //   const codeDetails = await validateDiscountCode(discount_code);

  //   if (!codeDetails) return;

  //   dispatch(setDiscountCodeValue(discount_code));

  //   if (discount_code === codeDetails.code) {
  //     const relevantProductsInCart = cart.filter((item) =>
  //       codeDetails.products.includes(item.product_id)
  //     );

  //     const hasUsedDiscountCode = relevantProductsInCart.some((item) => item.discount_code_used);
  //     const hasPromoCode = relevantProductsInCart.some((item) => item.product.promo_code_used);

  //     if (hasUsedDiscountCode) {
  //       setShowAlert("usedDiscountCode");
  //       setTimeout(() => setShowAlert(null), 2000);
  //       return;
  //     }

  //     if (hasPromoCode) {
  //       setShowAlert("usedPromoCode");
  //       setTimeout(() => setShowAlert(null), 2000);
  //       return;
  //     }

  //     const isDiscountValid = relevantProductsInCart.some((item) => {
  //       if (codeDetails.value_type === "amount") {
  //         return item.product.price >= codeDetails.value;
  //       } else if (codeDetails.value_type === "percent") {
  //         return item.product.price > 0;
  //       }
  //       return false;
  //     });

  //     if (isDiscountValid) {
  //       dispatch(applyDiscountCode({ discount_data: codeDetails }));
  //       setShowAlert("accepted");
  //     } else {
  //       setShowAlert("noProducts");
  //     }
  //   } else {
  //     setShowAlert("declined");
  //   }

  //   setTimeout(() => {
  //     setShowAlert(null);
  //   }, 2000);
  // };

  // const getAnimatedTitle = (showAlert: string | null, language: string, locales: any) => {
  //   switch (showAlert) {
  //     case "accepted":
  //       return (
  //         <AnimatedTitle title={languageConfig[language].DISCOUNT_CODE.DISCOUNT_CODE_ACCEPTED} />
  //       );
  //       break;
  //     case "usedDiscountCode":
  //       return (
  //         <AnimatedTitle title={languageConfig[language].DISCOUNT_CODE.PRODUCT_ALREADY_DISCOUNTED} />
  //       );
  //       break;
  //     case "usedPromoCode":
  //       return <AnimatedTitle title="kupon nie działa na przecenione produkty" />;
  //       break;
  //     default:
  //       return (
  //         <AnimatedTitle title={languageConfig[language].DISCOUNT_CODE.DISCOUNT_CODE_DECLINED} />
  //       );
  //       break;
  //   }
  // };
  return (
    <IdleTimerProvider timeout={clientTimeoutIdle} onIdle={onIdle}>
      <>
        {
          <div className="cart-page-container">
            {isLoading ? (
              <div className="cart-btn-container">
                <Loader size={30} />
              </div>
            ) : hasCart ?
              <div className="cart-page-list-wrapper">
                <div className="cart-page-list">
                  {isLoaded ? (
                    <>
                      <div className="title">{languageConfig[language].CART_PAGE.TITLE}</div>
                      <div style={{ height: `${discountCodeMode ? '61vh' : '75vh'}` }}>
                        <TouchScreenList>
                          {cart?.map((product, index) => (
                            <CartProductCard
                              discount_code_used={product.discount_code_used}
                              count={product.quantity}
                              product={product.product}
                              key={index}
                              isError={product.count > product.product.quantity}
                            />
                          ))}
                        </TouchScreenList>
                      </div>
                    </>

                  ) : (
                    <div className="cart-btn-container">
                      <AnimatedTitle
                        title={languageConfig[language].SERVICE_PAGE.ERROR?.toUpperCase()}
                        subTitle={languageConfig[language].SERVICE_PAGE.NO_PRODUCTS}
                      />
                      <Button
                        onClick={handleGetProducts}
                        className={isLoading ? "disabled" : ""}
                        disabled={isLoading}
                      >
                        {languageConfig[language].BUTTONS.REPEAT}{" "}
                        {isLoading ? <Loader /> : <BsArrowRepeat />}{" "}
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  {discountCodeMode && cart.length && (
                    <div className="discount-field-wrapper">
                      <div className="subtitle">
                        {languageConfig[language].DISCOUNT_CODE.TITLE}
                      </div>
                      <InputWithKeyboard
                        placeholder={languageConfig[language].DISCOUNT_CODE.DISCONT_CODE}
                        type="text"
                        className="discont-code"
                        id="discont"
                        bottom={20}
                        handleSubmit={handleSubmitCode}
                        isButton={true}
                        autoClear={true}
                      />
                    </div>
                  )}
                </div>

              </div> :
              <>
                <div className="service-page-container">
                  <div className="title">{languageConfig[language]?.CONFIRMATION_PRODUCT?.TITLE}</div>
                  <div className="product-confirmation-wrapper">
                    {product ? <ProductCard product={product} /> : <Loader size={30} />}
                  </div>
                  <div className="product-confirmation-discount-field">
                    {discountCodeMode && cart.length && (
                      <div className="discount-field-wrapper">
                        <div className="subtitle">
                          {languageConfig[language].DISCOUNT_CODE.TITLE}
                        </div>
                        <InputWithKeyboard
                          placeholder={languageConfig[language].DISCOUNT_CODE.DISCONT_CODE}
                          type="text"
                          className="discont-code"
                          id="discont"
                          bottom={20}
                          handleSubmit={handleSubmitCode}
                          isButton={true}
                          autoClear={true}
                          isShow={!isMobileDevice}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </>
            }

            <div >
              <div className="buttons-footer ">
                {<>
                  <Button
                    onClick={handleGoBack}
                  >
                    <TbCircleArrowLeftFilled />
                    {languageConfig[language].BUTTONS.BACK}
                  </Button>
                  {isError ? (
                    <Button
                      className="service"
                      disabled={!cart?.length}
                      onClick={handleOpenModal}
                    >
                      {languageConfig[language].BUTTONS.CORRECT_ALL}{" "}
                      <MdPublishedWithChanges />
                    </Button>
                  ) : (
                    <Button
                      disabled={!cart?.length}
                      onClick={handleGoToPaymentPage}
                    >
                      {languageConfig[language].BUTTONS.BUY} <HiMiniCurrencyEuro />
                    </Button>
                  )}
                </>}
              </div>
            </div>

          </div>
        }
        {isShowModal && (
          <Modal handleCloseModal={handleCloseModal}>
            <h4 className="service-page-modal-subtitle">
              {languageConfig[language].MODAL.TITLE}
            </h4>
            <h5 className="service-page-modal-subtitle">
              {languageConfig[language].MODAL.SUBTITLE}
            </h5>
            <div className="buttons-footer-modal">
              <Button className="cancel" onClick={handleCloseModal}>
                <MdCancel />
                {languageConfig[language].BUTTONS.NO}
              </Button>
              <Button className="submit" onClick={handleChangeAllCartQuantity}>
                {languageConfig[language].BUTTONS.YES}
                <FaCheckCircle />
              </Button>
            </div>
          </Modal>
        )}
      </>
    </IdleTimerProvider>
  );
}
