import { useState, useEffect, ReactNode } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper-bundle.css";
import './styles.css';

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

interface TouchScreenListProps {
  children: ReactNode; // Accepts any valid React child elements
  height?: number;
  center?: boolean | undefined
}

export function TouchScreenList({ children, height=100, center=false }: TouchScreenListProps): JSX.Element {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null); // Store swiper instance

  // Use effect to update swiper height whenever children changes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update(); // Call update on the swiper instance when children change
    }
  }, [children, swiperInstance]);

  return (
    <Swiper
      onSwiper={setSwiperInstance} // Capture the Swiper instance
      direction={'vertical'}
      slidesPerView={'auto'}
      freeMode={true}
      scrollbar={false}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      className={`mySwiper swiper-touch ${center ? 'center': ''}`}
      autoHeight={true} 
      id='swiper-list'
      style={{height: `${height}%`}}
    >
      <SwiperSlide className="swiper-slide-touch">
        {children}
      </SwiperSlide>
    </Swiper>
  );
}
