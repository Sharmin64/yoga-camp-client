import React from "react";
import founderimage from "../../../assets/yogaImage/founder-yoga.jfif";

const FounderAlt = () => {
  return (
    <div className="hero  bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold" title="Vedant">
            Old Ethic of Yoga
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            commodi porro error velit iure asperiores?Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Repellendus animi eaque in
            suscipit voluptate ab dolorem eligendi asperiores facere iste, ex
            praesentium perspiciatis iure eum odio quam accusamus eveniet
            aliquam!
          </p>
        </div>
        <img
          src={founderimage}
          className="max-w-sm rounded-lg shadow-2xl w-1/2"
        />
      </div>
    </div>
  );
};

export default FounderAlt;
