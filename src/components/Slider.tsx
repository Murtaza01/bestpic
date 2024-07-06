import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import sliderData from "../assets/data/slider";

const Slider = () => {
  return (
    <Swiper
      effect={"fade"}
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      modules={[Autoplay, EffectFade]}
      className="size-full"
      dir="ltr"
    >
      {sliderData.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} className="slider-img" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
