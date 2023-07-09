import React from "react";

//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import "./Banner.css";
import bannerF from "../../../assets/banner/bannerF.avif";
import bannerB from "../../../assets/banner/bannerB.avif";
import bannerC from "../../../assets/banner/bannerC.avif";
import bannerD from "../../../assets/banner/bannerD.jpg";
import manO from "../../../assets/banner/manO.jpg";
//import {Carousel} from "react-responsive-carousel";
//import {Typewriter} from "react-simple-typewriter";
//import AwesomeSlider from "react-awesome-slider";
//import "react-awesome-slider/dist/styles.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init({
    // Global settings:
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      //  slidesPerView={6}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper mx-auto"
    >
      <SwiperSlide>
        <img
          src={bannerF}
          alt="Card Image"
          className="w-full h-auto lg:h-[700px] object-cover lg:rounded-md"
        />
        <div>
          <h2 className="text-white font-bold text-4xl w-1/3 absolute">
            Yoga Activity Early Bird Offer
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerB}
          alt="Card Image"
          className="w-full h-auto lg:h-[700px] object-cover lg:rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerC}
          alt="Card Image"
          className="w-full h-auto lg:h-[700px] object-cover lg:rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerD}
          alt="Card Image"
          className="w-full h-auto lg:h-[700px] object-cover lg:rounded-md"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={manO}
          alt="Card Image"
          className="w-full h-auto lg:h-[700px] object-cover lg:rounded-md"
        />
      </SwiperSlide>
    </Swiper>
    //<Carousel>
    //  <div className="relative h-[700px]">
    //    <img className="bg-opacity-30 grayscale-0" src={bannerF} />
    //    <div
    //      data-aos="fade-up"
    //      data-aos-delay="200"
    //      data-aos-duration="2000"
    //      data-aos-easing="ease-in-out"
    //      className="absolute ml-14 mb-0 -mt-96 text-start "
    //    >

    //      <button className="btn btn-outline btn-secondary justify-start">
    //        Learn More
    //      </button>
    //    </div>
    //  </div>
    //  <div className="relative h-[700px]">
    //    <img src={bannerB} />
    //    <div
    //      data-aos="fade-up"
    //      data-aos-delay="200"
    //      data-aos-duration="2000"
    //      data-aos-easing="ease-in-out"
    //      className="absolute ml-14 mb-0 -mt-96  text-start "
    //    >
    //      <h2 className="text-white font-bold text-4xl w-1/3">
    //        Yoga Activity Heal Yourself from here
    //      </h2>

    //      <button className="btn btn-outline btn-secondary justify-start">
    //        Learn More
    //      </button>
    //    </div>
    //  </div>
    //  <div className="relative h-[700px]">
    //    <img src={bannerC} />
    //    <div
    //      data-aos="fade-up"
    //      data-aos-delay="200"
    //      data-aos-duration="2000"
    //      data-aos-easing="ease-in-out"
    //      className="absolute ml-14 mb-0 -mt-96 text-start "
    //    >
    //      <h2 className="text-white font-bold text-4xl w-1/3">
    //        Yoga Activity a way to improve inner strength and confidence
    //      </h2>

    //      <button className="btn btn-outline btn-secondary justify-start">
    //        Learn More
    //      </button>
    //    </div>
    //  </div>
    //  <div className="relative h-[700px]">
    //    <img src={bannerD} />
    //    <div
    //      data-aos="fade-up"
    //      data-aos-delay="200"
    //      data-aos-duration="2000"
    //      data-aos-easing="ease-in-out"
    //      className="absolute ml-14 mb-0 -mt-96 text-start "
    //    >
    //      <h2 className="text-white font-bold text-4xl w-1/3">
    //        Yoga Activity a way to improve inner strength and confidence
    //      </h2>

    //      <button className="btn btn-outline btn-secondary justify-start">
    //        Learn More
    //      </button>
    //    </div>
    //  </div>
    //  <div className="relative h-[700px]">
    //    <img src={manO} />
    //    <div
    //      data-aos="fade-up"
    //      data-aos-delay="200"
    //      data-aos-duration="2000"
    //      data-aos-easing="ease-in-out"
    //      className="absolute ml-14 mb-0 -mt-96 text-start bg-opacity-20"
    //    >
    //      <h2 className="text-white font-bold text-4xl w-1/3">
    //        Yoga Activity Be alive | Be fit | Be relaxed
    //      </h2>

    //      <button className="btn btn-outline btn-secondary justify-start">
    //        Learn More
    //      </button>
    //    </div>
    //  </div>
    //</Carousel>
  );
};

export default Banner;
