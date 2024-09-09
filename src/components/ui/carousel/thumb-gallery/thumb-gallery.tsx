import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { cn } from "src/utils/cn";
import "swiper/css/bundle";

export type ThumbGalleryProps = {
  images: string[];
  className?: string;
};

export const ThumbGallery = ({ images, className }: ThumbGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  return (
    <div className={cn("w-0", className)}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-100 pt-[100%]">
              <img
                src={image}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="group"
          >
            <div className="relative bg-gray-100 pt-[100%]">
              <img
                src={image}
                className={cn(
                  "group-[.swiper-slide-thumb-active]:opacity-100 absolute inset-0 size-full object-cover object-center",
                  "opacity-40"
                )}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
