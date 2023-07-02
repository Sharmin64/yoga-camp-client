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
        <title>CorePower Yoga || Classes</title>
      </Helmet>
      <h1 className="text-center py-12  font-bold md:text-5xl text-4xl   bg-amber-200">
        Our Classes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {students?.map((student) => (
          <Students
            key={student._id}
            student={student}
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
