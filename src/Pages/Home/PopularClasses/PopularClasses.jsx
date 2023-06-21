import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Class from "./Class";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  //useEffect(() => {
  //  //fetch("https://assignment-12-summercamp-server.vercel.app/classes")
  //  fetch("http://localhost:5003/classes")
  //    .then((res) => res.json())
  //    .then((data) => {
  //      //const popularClasses = data.filter(
  //      //  (classN) => classN.number === "enrolled"
  //      //);
  //      //setClasses(data);
  //      console.log(data);
  //    });
  //}, []);
  useEffect(() => {
    fetch("https://assignment-12-summercamp-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h1 className="text-center font-bold font-mono text-3xl">
        Popular Class
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {classes.map((eClass) => (
          <Class key={eClass._id} eClass={eClass}></Class>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
