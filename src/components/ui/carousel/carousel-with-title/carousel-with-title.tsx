import { useRef } from "react";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui/button";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { cn } from "src/utils/cn";

export type CarouselWithTitleProps = {
  title?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  children: React.ReactNode[];
};

export const CarouselWithTitle = ({
  title = "",
  slidesPerView = 4,
  spaceBetween = 0,
  className,
  children,
}: CarouselWithTitleProps) => {
  // swiperRef reference:
  // https://stackoverflow.com/a/76452867/20232773
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className={cn("flex flex-col gap-14", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-h3">{title}</h3>
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="size-14 rounded-xl bg-gray-200 hover:bg-gray-300"
            onClick={() => {
              swiperRef.current?.swiper.slidePrev();
            }}
          >
            <LocalIcon
              iconName="ArrowRight"
              className="rotate-180"
            />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="size-14 rounded-xl bg-gray-950 text-white hover:bg-gray-700"
            onClick={() => {
              swiperRef.current?.swiper.slideNext();
            }}
          >
            <LocalIcon iconName="ArrowRight" />
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={true}
          ref={swiperRef}
        >
          {children.map((node, index) => (
            <SwiperSlide
              key={index}
              className="p-4"
            >
              {node}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
