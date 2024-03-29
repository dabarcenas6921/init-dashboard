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
        className="mySwiper h-100 w-7/12 md:w-10/12"
        slidesPerView={1}
        spaceBetween={10}
      >
        <div className="pr-40">
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700205297/init-dashboard/carousel1.png"
              priority={true}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Init Picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700205298/init-dashboard/carousel2.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Init Picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700205303/init-dashboard/carousel3.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Init Picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dh6y8bufo/image/upload/v1700205303/init-dashboard/carousel4.png"
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
