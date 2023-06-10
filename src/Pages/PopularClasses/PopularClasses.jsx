import React, {useEffect, useState} from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    fetch("http://localhost:5003/yogaCamp")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return <div></div>;
};

export default PopularClasses;
