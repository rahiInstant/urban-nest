import  { Pagination, Autoplay} from "swiper/modules";
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Card from "./Card";
import { NavContext } from "../navContext";
import Partner from "./Partner";

const Home = () => {
  const { setOPen } = useContext(NavContext);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div onClick={() => setOPen(false)} className="mx-4 -z-50 mt-7">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          
        }}

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
      <Partner></Partner>
    </div>
  );
};

export default Home;
