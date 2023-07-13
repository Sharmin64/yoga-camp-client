import React from "react";
import {useState} from "react";
import {useEffect} from "react";
//import SingleClass from "./SingleClass";
import Students from "../../Classes/Students";
import TypingEffect from "../../../hooks/TypingEffect";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      {classes && (
        <div className="text-center w-96 mx-auto">
          <h2 className=" text-4xl mt-20 lg:mt-0 text-center mb-20 text-indigo-600 font-bold">
            <TypingEffect words={["Popular Classes     ", "Find Yours    "]} />
          </h2>
        </div>
      )}
      {/*<h1 className="text-center font-bold font-mono text-3xl mt-3 mb-3">
        Popular Class
      </h1>*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {classes.map((classItem) => (
          //<SingleClass key={classItem._id} classItem={classItem}></SingleClass>
          <Students key={classItem._id} student={classItem}></Students>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
