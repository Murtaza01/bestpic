import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// EffectCoverflow, EffectFade
import "swiper/css";
// import "swiper/css/effect-coverflow";
import sliderData from "../assets/data/slider";
import { Link } from "react-router-dom";
// flex flex-1 items-center
const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        // effect={"fade"}
        // grabCursor={true}
        // centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        // fadeEffect={{
        //   crossFade: true,
        // }}
        // coverflowEffect={{
        //   slideShadows: true,
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 150,
        //   modifier: 2,
        // }}
        modules={[Autoplay]}
        className="h-dvh w-dvw"
      >
        {sliderData.map(({ img }, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} className="slider-img" alt="" loading="eager" />
            </SwiperSlide>
          );
        })}
        <Link to={"test"}>
          <button className="absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] text-4xl font-bold">
            Test Page
          </button>
        </Link>
      </Swiper>
    </div>
  );
};

export default Slider;
