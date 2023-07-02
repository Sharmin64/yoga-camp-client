import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
//import "./Banner.css";

import banA from "../../../assets/images/banA.jpg";
import banB from "../../../assets/images/banB.jpg";
import banC from "../../../assets/images/banC.jpg";
import banD from "../../../assets/images/banD.jpg";
import {Carousel} from "react-responsive-carousel";
//import {Typewriter} from "react-simple-typewriter";
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
    <Carousel>
      <div className="relative">
        <img className="bg-opacity-30 grayscale-0" src={banA} />
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-center"
          className="absolute ml-14 mb-0 -mt-96 text-start "
        >
          <p className="text-white font-bold text-3xl">
            Kids CorePower Yoga Activity <br />
            Early Bird Offer
          </p>
          <button className="btn btn-outline btn-secondary justify-start">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={banB} />
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-center"
          className="absolute ml-14 mb-0 -mt-96 text-start "
        >
          <p className="text-white font-bold text-3xl">
            Kids CorePower Yoga Activity
            <br />
            Heal Yourself from here
          </p>
          <button className="btn btn-outline btn-secondary justify-start">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={banC} />
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-center"
          className="absolute ml-14 mb-0 -mt-96 text-start "
        >
          <p className="text-white font-bold text-3xl">
            Kids CorePower Yoga Activity <br />a way to improve inner strength
            and confidence
          </p>
          <button className="btn btn-outline btn-secondary justify-start">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={banD} />
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-center"
          className="absolute ml-14 mb-0 -mt-96 text-start bg-opacity-20"
        >
          <p className="text-white font-bold text-3xl">
            Kids CorePower Yoga Activity
            <br />
            Be alive | Be fit | Be relaxed
          </p>
          <button className="btn btn-outline btn-secondary justify-start">
            Learn More
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
