import React, {useEffect, useState} from "react";

import {Helmet} from "react-helmet-async";

import Students from "./Students";

const Classes = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/classes")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="container">
      <Helmet>
        <title>Yoga Summer Camp || Classes</title>
      </Helmet>
      <h1 className="text-center py-12  font-bold md:text-5xl text-4xl   bg-amber-200">
        Our Classes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {students?.map((student) => (
          <Students key={student._id} student={student}></Students>
        ))}
      </div>
    </div>
  );
};

export default Classes;

