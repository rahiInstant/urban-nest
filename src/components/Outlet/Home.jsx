import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
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
            className={`h-[500px] rounded-lg  bg-[url('/public/slide_02.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] rounded-lg  bg-[url('/public/slide_02.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] rounded-lg  bg-[url('/public/slide_02.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
      </Swiper>
      <Card data={data}></Card>
    </div>
  );
};

export default Home;