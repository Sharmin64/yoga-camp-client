import React from "react";
import {useState, useEffect} from "react";
import YogaTeacher from "./YogaTeacher";
import {Helmet} from "react-helmet-async";

const Instructors = () => {
  const [yogaTeachers, setYogaTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/instructors")
      .then((res) => res.json())
      .then((data) => {
        setYogaTeachers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Yoga Summer Camp || Instructors</title>
      </Helmet>
      <h1 className="text-center py-12 font-bold font-mono text-3xl bg-amber-200">
        Yoga Instructors
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {yogaTeachers.map((yogaTeacher) => (
          <YogaTeacher
            key={yogaTeacher._id}
            yogaTeacher={yogaTeacher}
          ></YogaTeacher>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
