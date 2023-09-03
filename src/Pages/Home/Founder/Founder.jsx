import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import pata from "../../../assets/testimon/patangali.jpeg";

const Founder = () => {
  return (
    <div>
      <SectionTitle
        heading={"Founder Of Yoga"}
        subHeading={"Meet Our Special"}
      />
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pata} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold" title="PatanJoli">
              Founder of Yoga
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
