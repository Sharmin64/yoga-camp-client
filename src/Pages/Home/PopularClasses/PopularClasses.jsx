import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Class from "./Class";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h1 className="text-center font-bold font-mono text-3xl">
        Popular Class
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {classes.data.map((classItem) => (
          <Class key={classItem._id} classItem={classItem}></Class>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
