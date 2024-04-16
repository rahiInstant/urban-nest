import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "./Card";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mx-4 -z-50 mt-7">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] rounded-lg  bg-[url('/slide_03.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] rounded-lg  bg-[url('/slide_07.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] rounded-lg  bg-[url('/slide_09.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
      </Swiper>
      <Card></Card>
    </div>
  );
};

export default Home;
