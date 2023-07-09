import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import SingleClass from "./SingleClass";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h1 className="text-center font-bold font-mono text-3xl">
        Popular Class
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {classes.map((classItem) => (
          <SingleClass key={classItem._id} classItem={classItem}></SingleClass>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
