//import React, {useEffect, useState} from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";
import SectionTitle from "../../../components/SectionTitle";
import useAllClasses from "../../../hooks/useAllClasses";

const PopularClass = () => {
  const [classes] = useAllClasses();
  //console.log(classes);
  return (
    <div>
      <SectionTitle
        heading={"Popular Classes"}
        subHeading={"Our most selected"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-10">
        {classes.slice(0, 6).map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
