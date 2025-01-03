import { IdleTimerProvider } from "react-idle-timer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, type ReactNode } from "react";
import { setProducts } from "../../features/data/dataSlice";
import { BsArrowRepeat } from "react-icons/bs";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import Loader from "../../components/Loader/Loader";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import useLogoutHook from "../../hooks/useLogoutHook";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { getProducts } from "../../API";
import SwiperCube from "../../components/SwiperCube/SwiperCube";
import { ModalCardProduct } from "../../components/ModalCardProduct/ModalCardProduct";
import { hardCodeProducts } from "../../constants";

interface HomePageProps {
  children?: ReactNode;
}

export default function HomePage({ children }: HomePageProps): JSX.Element {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean | null>(false);
  const [modalProductID, setModalProductID] = useState<string | null>(null);

  const onIdle = useLogoutHook();
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.dataReducer);
  const {
    language,
    serial,
    clientTimeoutIdle,
    swiperSettings,
  } = useSelector((state: RootState) => state.configurationReducer);

  const handleOpenModal = (event: React.MouseEvent<HTMLDivElement>) => {
    setModalProductID(event.currentTarget.id);
    setIsShowModal(true);
  };

  const handleCloseFadeOut = () => {
    const modalContainer = document.getElementById("modal-container");
    const cart = document.getElementById("cart");

    if (modalContainer && cart) {
      const handleAnimationEnd = (event: AnimationEvent) => {
        if (event.animationName === "splash") {
          setTimeout(() => cart.classList.remove("splash-cart"), 3000);
          cart.removeEventListener("animationend", handleAnimationEnd);
        }
      };

      setTimeout(handleCloseModal, 1180);
      cart.classList.add("splash-cart");
      cart.addEventListener("animationend", handleAnimationEnd);
      modalContainer.classList.add("hide-modal");
    }
  };

  const handleCloseModal = () => {
    setIsShowModal(false)
  };

  const handleLoadFakeProducts = () => {
    setIsLoaded(true);
    dispatch(setProducts(hardCodeProducts))
  }

  const handleGetProducts = () => {
    getProducts(serial)
      .then((response: any) => {
        if (response.status === 200) {
          dispatch(setProducts(response.data.products));
          setIsLoaded(true);
        } else {
          // setIsLoaded(false);
          handleLoadFakeProducts()
        }
      })
      .catch(() => {
        handleLoadFakeProducts()
        // setIsLoaded(false)
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    if (serial) {
      handleGetProducts();
    } else {
      setIsLoaded(false);
    }
  }, [serial, dispatch]);

  return (
    <IdleTimerProvider timeout={clientTimeoutIdle} onIdle={onIdle}>
      <>
        {children}
        <div className="home-container">
          {isLoading ? (
            <div className="loader-wrapper">
              <Loader size={30} />
            </div>
          ) : isLoaded ? (
            products.length ? (
              <SwiperCube
                products={products}
                handleOpenModal={handleOpenModal}
                autoplay={false}
                elPerSlide={swiperSettings.cardsPerSlide}
                effect={swiperSettings.effect}
                loop={swiperSettings.loop}
              />
            ) : (
              <div className="loader-wrapper">
                <AnimatedTitle
                  title={languageConfig[language].HOME_PAGE.MACHINE_EMPTY_TITLE?.toUpperCase()}
                  subTitle={languageConfig[language].HOME_PAGE.MACHINE_EMPTY_SUBTITLE}
                />
              </div>
            )
          ) : (
            <div className="loader-wrapper">
              <AnimatedTitle
                title={languageConfig[language].SERVICE_PAGE.ERROR?.toUpperCase()}
                subTitle={languageConfig[language].SERVICE_PAGE.NO_PRODUCTS}
              />
              <div className="btn-container">
                <Button
                  onClick={handleGetProducts}
                  className={isLoading ? "disabled" : ""}
                  disabled={isLoading}
                >
                  {languageConfig[language].BUTTONS.REPEAT}{" "}
                  {isLoading ? <Loader /> : <BsArrowRepeat />}
                </Button>
              </div>
            </div>
          )}
        </div>

        {isShowModal && modalProductID && (
          <Modal handleCloseModal={handleCloseModal}>
            <ModalCardProduct
              modalProductID={modalProductID}
              handleCloseModal={handleCloseModal}
              handleCloseFadeOut={handleCloseFadeOut}
            />
          </Modal>
        )}
      </>
    </IdleTimerProvider>
  );
}
