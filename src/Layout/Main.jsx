import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;

//?for example
//import React from 'react';

//const instructorData = [
//  {
//    name: 'Instructor 1',
//    students: 100,
//    image: 'path/to/image1.jpg',
//  },
//  {
//    name: 'Instructor 2',
//    students: 80,
//    image: 'path/to/image2.jpg',
//  },

//];

//const PopularInstructors = () => {
// Sort instructors based on student count (descending order)
//  const sortedInstructors = instructorData.sort((a, b) => b.students - a.students);

// Select the top 6 instructors
//  const topInstructors = sortedInstructors.slice(0, 6);

//  return (
//    <div>
//      <h2>Popular Instructors</h2>
//      <div className="instructor-list">
//        {topInstructors.map((instructor, index) => (
//          <div key={index} className="instructor-card">
//            <img src={instructor.image} alt={instructor.name} />
//            <h3>{instructor.name}</h3>
//            <p>{`${instructor.students} students`}</p>
//          </div>
//        ))}
//      </div>
//    </div>
//  );
//};

//export default PopularInstructors;
