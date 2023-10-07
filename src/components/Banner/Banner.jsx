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
              <div className="absolute flex justify-end transform -translate-y-1/2 left-30 top-1/2 bg-gradient-to-r from-[#181c20] via-[#c0c5ce] to-[#c0c5ce] text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Yoga is the practice of quieting the mind
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-[#4f5b66] hover:bg-transparent hover:text-[#fffff4] border-0 border-b-4 border-[#a7adba] cursor-pointer text-white">
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
            className="hero lg:h-[92vh] h-[70vh] sm:h-auto"
            style={{
              backgroundImage: `url(${bannerB})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-[#181c20] via-[#c0c5ce] to-[#c0c5ce] text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Yoga is the journey of the self, through the self, to the
                    self
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl  bg-[#4f5b66] hover:bg-transparent  hover:text-[#fffff4]  border-0 border-b-4 border-[#a7adba] cursor-pointer text-white">
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
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-[#181c20] via-[#c0c5ce] to-[#c0c5ce]  text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    In the heart of summer, take your practice outside, let the
                    sun kiss your skin
                  </h1>
                  <Link to="/">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-[#4f5b66]   hover:bg-transparent hover:text-[#fffff4]  border-0 border-b-4 border-[#a7adba] cursor-pointer">
                      More About Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*from-[#343d46] via-[#c0c5ce] to-[#c0c5ce]   bg-[#4f5b66]   hover:text-[#fffff4]    border-[#a7adba]*/}
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
              <div className="absolute flex justify-end transform -translate-y-1/3 left-30 top-1/2 bg-gradient-to-r from-[#181c20] via-[#c0c5ce] to-[#c0c5ce]  text-transparent bg-clip-text right-1/2">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Summer vibrant energy mirrors the vitality that yoga brings
                    to our lives
                  </h1>
                  <Link to="/classes">
                    <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl bg-[#4f5b66] hover:bg-transparent hover:text-[#fffff4] border-0 border-b-4 border-[#a7adba] cursor-pointer text-white">
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
