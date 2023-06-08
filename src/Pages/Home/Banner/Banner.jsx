import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import slider1 from "../../../assets/images/slider1.jpeg";
import slider2 from "../../../assets/images/slider2.jpeg";
import slider3 from "../../../assets/images/slider3.jpeg";
import slider4 from "../../../assets/images/slider4.jpeg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AwesomeSlider play={true} cancelOnInteraction={false} interval={2000}>
      <div className=" bg-cover" data-src={slider1} />
      <div className=" bg-cover" data-src={slider2} />
      <div className=" bg-cover" data-src={slider3} />
      <div className=" bg-cover" data-src={slider4} />
      {/*<div>
        <img className="object-cover w-full" src={slider1} alt="" />
      </div>
      <div>
        <img className="object-cover w-full" src={slider2} alt="" />
      </div>
      <div>
        <img className="object-cover w-full" src={slider3} alt="" />
      </div>
      <div className="w-cover w-full">
        <img className="max-w-lg" src={slider4} alt="" />
      </div>*/}
    </AwesomeSlider>
  );
};

export default Banner;
