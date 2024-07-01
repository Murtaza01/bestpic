import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import img1 from "../assets/pic.jpg";
import img2 from "../assets/2.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Slider = () => {
  return (
    <div className="px-2">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          slideShadows: true,
          rotate: 0,
          stretch: 20,
          depth: 150,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className=""
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
