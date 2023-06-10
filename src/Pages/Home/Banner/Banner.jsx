import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
//import "./Banner.css";

import slider1 from "../../../assets/images/slider1.jpeg";
import slider2 from "../../../assets/images/slider2.jpeg";
import slider3 from "../../../assets/images/slider3.jpeg";
import slider4 from "../../../assets/images/slider4.jpeg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AwesomeSlider play={true} cancelOnInteraction={false} interval={2000}>
      {/*<div className=" bg-cover" data-src={slider1} />
      <div className=" bg-cover" data-src={slider2} />
      <div className=" bg-cover" data-src={slider3} />
      <div className=" bg-cover" data-src={slider4} />*/}
      <div>
        <div className="relative">
          <img src={slider1} />
          <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            KindaCode.com
          </h1>
          <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
            Bottom Center
          </h2>
          <h3 className="absolute text-2xl text-blue-300 top-5 left-5">
            Top Left
          </h3>
          <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">
            Bottom Right
          </h3>
        </div>
      </div>

      {/* another div image slider */}
      <div>
        <img className="object-cover w-full" src={slider2} alt="" />
      </div>
      <div>
        <img className="object-cover w-full" src={slider3} alt="" />
      </div>
      <div className="w-cover w-full">
        <img className="max-w-lg" src={slider4} alt="" />
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
