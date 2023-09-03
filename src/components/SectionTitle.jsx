import React from "react";

const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="text-center md:w-4/12 mx-auto mb-8">
      <p className="text-violet-600 font-[curve] mb-2 text-2xl">
        ---{subHeading}---
      </p>
      <h3 className="text-5xl uppercase font-mono  border-y-4 border-gray-500 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
