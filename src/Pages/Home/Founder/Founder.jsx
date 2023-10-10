import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import vadanto from "../../../assets/yogaImage/fonda.jpg";

const Founder = () => {
  return (
    <div>
      <SectionTitle
        heading={"Founder Of Yoga"}
        subHeading={"Meet Our Special"}
      />
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={vadanto} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
          <div className="w-1/2">
            <h1 className="text-3xl font-bold" title="Vedant">
              Founder of Yoga
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
        </div>
      </div>
    </div>
  );
};

export default Founder;
