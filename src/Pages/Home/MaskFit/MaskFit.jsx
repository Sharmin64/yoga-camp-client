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
        heading={"Our Story"}
        subHeading={"what special in website"}
      />
      <div className="lg:flex flex-row sm:mx-auto sm:w-fit sm:my-4 justify-around items-center">
        <img className="mask mask-heart w-44" src={maskA} />
        <img className="mask mask-hexagon w-44" src={maskB} />
        <img className="mask mask-heart w-44" src={maskC} />
        <img className="mask mask-hexagon w-44" src={maskD} />
      </div>
    </div>
  );
};

export default MaskFit;
