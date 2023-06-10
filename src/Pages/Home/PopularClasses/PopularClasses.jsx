import React from "react";
import {useState} from "react";
import {useEffect} from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div>
      <h1>popular class will be rendered here</h1>
    </div>
  );
};

export default PopularClasses;
