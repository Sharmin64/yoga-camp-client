import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import maskA from "../../../assets/testimon/portraitH.jpeg";
import maskB from "../../../assets/testimon/portriatT.jpeg";
import maskC from "../../../assets/testimon/potraitC.jpeg";
import maskD from "../../../assets/testimon/protraitD.jpeg";

const MaskFit = () => {
  return (
    <div>
      <SectionTitle
        heading={"Famous Trainer"}
        subHeading={"who special in traning"}
      />
      <div className="lg:flex flex-row sm:mx-auto sm:w-full sm:my-4 justify-around gap-4 items-center md:object-center">
        <img
          className="card rounded-full w-auto py-14 box-border hover:scale-125 transition duration-500 cursor-pointer"
          src={maskA}
          alt=""
        />
        <img
          className="card rounded-full w-auto box-border py-14  hover:scale-125 transition duration-500 cursor-pointer"
          src={maskB}
          alt=""
        />
        <img
          className="card rounded-full w-auto box-border py-14  hover:scale-125 transition duration-500 cursor-pointer"
          src={maskC}
          alt=""
        />
        <img
          className="card rounded-full w-auto py-14  box-border hover:scale-125 transition duration-500 cursor-pointer"
          src={maskD}
          alt=""
        />
      </div>
    </div>
  );
};

export default MaskFit;
//className="card rounded-full w-72 hover:scale-125 transition duration-500 cursor-pointer"
//lg:flex flex-row sm:mx-auto sm:w-full sm:my-4 justify-around gap-4 items-center
