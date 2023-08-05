import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import {Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";
import bannerF from "../../assets/banner/bannerF.avif";
import bannerB from "../../assets/banner/bannerB.avif";
import bannerC from "../../assets/banner/bannerC.avif";
import bannerD from "../../assets/banner/bannerD.jpg";
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        //slidesPerView={6}
        //pagination={true}
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        className="mySwiper mx-auto"
      >
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${bannerF})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Make Your Summer Unforgettable!
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer text-white">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${bannerB})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    This Will be the best summer Just For You!
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer text-white">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${bannerC})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text right-1/2">
                <div data-aos="fade-right" className="max-w-md px-5 lg:px-0">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Get Ready For a Lot Of Adventures!
                  </h1>
                  <Link to="/">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer">
                      More About Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${bannerD})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    So Fun That You Won`t Want To Leave!
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer text-white">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
