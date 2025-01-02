import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCube,
  Pagination,
  FreeMode,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"; // Import RootState for type-safe Redux state
import { ProductCard } from "../ProductCard/ProductCard";
import "swiper/swiper-bundle.css";

interface SwiperCubeProps {
  products: any[]; // Define `Product` type based on your product structure
  handleOpenModal: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void; // Function to handle modal opening
  autoplay: boolean; // Whether to enable autoplay
  elPerSlide?: number | undefined;
  effect?: string;
  loop?: boolean;
}

// Helper function to chunk an array into smaller arrays
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function SwiperCube({
  products = [],
  handleOpenModal,
  autoplay,
  elPerSlide = 4,
  effect,
  loop = false,
}: SwiperCubeProps) {
  const { devMode } = useSelector((state: RootState) => state.configurationReducer);
  const swiperRef = useRef<any>();

  // Memoize autoplayConfig to prevent recalculation on every render
  const autoplayConfig = useMemo(
    () =>
      autoplay
        ? {
            delay: 6000,
            disableOnInteraction: false,
          }
        : false,
    [autoplay]
  );

  // Memoize chunked array to minimize unnecessary recalculations
  const chunkedArray = useMemo(() => chunkArray(products, elPerSlide), [
    products,
    elPerSlide,
  ]);

  return (
    <Swiper
      ref={swiperRef}
      effect={effect}
      grabCursor={false}
      loop={loop}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 150,
        shadowScale: 1,
      }}
      coverflowEffect={{
        rotate: 60,
        stretch: -125,
        depth: 100,
        modifier: 0.9,
        scale: 1.225,
        slideShadows: false,
      }}
      autoplay={autoplayConfig}
      speed={1000}
      pagination={{ clickable: true }}
      modules={[EffectCube, Pagination, FreeMode, Autoplay, EffectCoverflow]}
      className="swiper-cube"
    >
      {chunkedArray.map((slide, i) => {
        const isSingle = slide.length === 1;
        const isDouble = slide.length === 2;

        return (
          <SwiperSlide
            key={uuidv4()}
            virtualIndex={i}
            style={{
              backfaceVisibility: devMode ? "visible" : "hidden",
            }}
            className={`${isSingle ? "single" : ""}${
              isDouble ? "double" : ""
            }`}
          >
            {slide.map((product, index) => (
              <MemoizedProductCard
                key={uuidv4()}
                handleOpenModal={handleOpenModal}
                product={product}
                box={index}
                className={`${isSingle ? "single" : ""}${
                  isDouble ? "double" : ""
                }`}
              />
            ))}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

// Memoized version of ProductCard
const MemoizedProductCard = React.memo(ProductCard);
