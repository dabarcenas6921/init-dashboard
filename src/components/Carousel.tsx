// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper h-100 w-10/12"
        slidesPerView={1}
        spaceBetween={10}
      >
        <div className="pr-40">
          <SwiperSlide>
            <Image
              src="/assets/images/people2.png"
              priority
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Init Picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/people3.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Init Picture"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
