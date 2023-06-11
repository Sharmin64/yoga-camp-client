import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Class from "./Class";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter(
          (classN) => classN.number === "enrolled"
        );
        setClasses(popularClasses);
      });
  }, []);
  return (
    <div>
      {classes.map((eClass) => (
        <Class key={eClass.id} eClass={eClass}></Class>
      ))}
    </div>
  );
};

export default PopularClasses;
