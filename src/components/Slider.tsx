import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import sliderImages from "../assets/data/slider";

const Slider = () => {
  return (
    <Swiper
      effect={"fade"}
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      modules={[Autoplay, EffectFade]}
      className={`size-full`}
      dir="ltr"
    >
      {sliderImages.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="h-full w-full object-cover"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
