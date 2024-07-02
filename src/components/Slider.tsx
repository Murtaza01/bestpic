import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import sliderData from "../assets/data/slider";

const Slider = () => {
  return (
    <div className="px-2 py-5 md:py-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          slideShadows: true,
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className=""
      >
        {sliderData.map(({ img }, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
