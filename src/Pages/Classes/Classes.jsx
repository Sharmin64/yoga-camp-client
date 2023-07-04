import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import Students from "./Students";
import {Fade} from "react-awesome-reveal";
import useYogaClass from "../../hooks/useYogaClass";
//import { Fade } from "react-awesome-reveal";

const Classes = () => {
  const [classes, loading, refetch] = useYogaClass();

  const bgStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/yoga-vrikshasana-pose-tropical-location_1163-3366.jpg?size=626&ext=jpg&ga=GA1.2.947883390.1663212112&semt=ais')`,
    backgroundPosition: "top",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundColor: "#606060",
    marginTop: "60px",
  };

  //useEffect(() => {
  //  fetch("http://localhost:5003/postClasses")
  //    .then((res) => res.json())
  //    .then((data) => {
  //      setStudents(data);
  //    });
  //}, []);

  return (
    <div className="container">
      <Helmet>
        <title>CorePower Yoga || Classes</title>
      </Helmet>

      <section style={bgStyle}>
        <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
          <div className="text-center lg:text-left">
            <Fade>
              <h1
                className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-"
                style={{lineHeight: "1.8"}}
              >
                Tune your body <br />
                and soul with our yoga classses
              </h1>
              <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-2xl">
                Find your peace into yoga that helps you heal your body and soul
              </p>
            </Fade>
          </div>
        </div>
      </section>
      <Fade>
        <h1 className="text-center py-12  font-bold md:text-5xl text-4xl   bg-indigo-300">
          Our Classes
        </h1>
      </Fade>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {classes?.map((student) => (
          <Students
            key={student._id}
            student={student}
            refetch={refetch}
            style={{
              backgroundColor: student.availableSeats === 0 ? "red" : "white",
            }}
          ></Students>
        ))}
      </div>
    </div>
  );
};

export default Classes;

//?for testing
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';

//const Classes = () => {
//  const [classes, setClasses] = useState([]);

//  useEffect(() => {
//    // Fetch classes data from the backend server
//    axios.get('/api/classes')
//      .then(response => {
//        setClasses(response.data);
//      })
//      .catch(error => {
//        console.error('Error fetching classes:', error);
//      });
//  }, []);

//  const handleSelectClass = (classId) => {
//    // Handle class selection logic here
//    // For example, show login prompt or disable the button
//  };

//  return (
//    <div>
//      <h2>Classes</h2>
//      {classes.map((classItem) => (
//        <div
//          key={classItem.id}
//          style={{ backgroundColor: classItem.availableSeats === 0 ? 'red' : 'white' }}
//        >
//          <img src={classItem.image} alt="Class" />
//          <h3>{classItem.name}</h3>
//          <p>Instructor: {classItem.instructor}</p>
//          <p>Available seats: {classItem.availableSeats}</p>
//          <p>Price: {classItem.price}</p>
//          <button
//            onClick={() => handleSelectClass(classItem.id)}
//            disabled={classItem.availableSeats === 0 || classItem.isAdmin}
//          >
//            Select
//          </button>
//        </div>
//      ))}
//    </div>
//  );
//};

//export default Classes;

//?another test
//const handleSelectClass = (classId, availableSeats, isAdmin) => {
//  // Handle class selection logic here
//  // For example, show login prompt or disable the button
//  if (availableSeats === 0 || isAdmin) {
//    return true; // Disable the button
//  }
//  return false; // Enable the button
//};
{
  /*<button
  onClick={() => handleSelectClass(classItem.id, classItem.availableSeats, classItem.isAdmin)}
  disabled={handleSelectClass(classItem.id, classItem.availableSeats, classItem.isAdmin)}
>
  Select
</button>*/
}
