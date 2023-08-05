/* eslint-disable react-hooks/rules-of-hooks */
import InstructorView from "../../components/InstructorView/InstructorView";
import useAllInstructors from "../../hooks/useAllInstructors";
import {Helmet} from "react-helmet-async";

import {Fade} from "react-awesome-reveal";
import Loader from "../Shared/Loader";
import {useNavigation} from "react-router-dom";

const Instructors = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const [instructors] = useAllInstructors();

  const bgStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/full-shot-man-doing-warrior-pose-indoor_23-2148717272.jpg?size=626&ext=jpg&ga=GA1.1.947883390.1663212112&semt=ais')`,
    backgroundPosition: "top",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundColor: "#606060",
    marginTop: "60px",
  };
  return (
    <>
      <section style={bgStyle}>
        <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
          <div className="text-center lg:text-left">
            {/*<Fade>*/}
            <h1
              className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-"
              style={{lineHeight: "1.8"}}
            >
              Meet our best <br />
              and favorite yoga Instructors
            </h1>
            <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-2xl">
              Yoga the best way to keep your body and soul fit n calm.
            </p>
            {/*</Fade>*/}
          </div>
        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-10 mt-8">
        <Helmet>
          <title>Core Power | All Instructors</title>
        </Helmet>
        {/*<SectionTitle subHeading="We Provide" heading="The Best Teacher" />*/}
        <Fade cascade damping={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((teacher) => (
              <InstructorView key={teacher._id} teacher={teacher} />
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Instructors;

//?test copy
//import React from "react";
//import {useState, useEffect} from "react";
//import YogaTeacher from "./YogaTeacher";
//import {Helmet} from "react-helmet-async";

//const Instructors = () => {
//  const [yogaTeachers, setYogaTeachers] = useState([]);
//  useEffect(() => {
//    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
//      .then((res) => res.json())
//      .then((data) => {
//        setYogaTeachers(data);
//        console.log(data);
//      });
//  }, []);

//  const bgStyle = {
//    backgroundImage: `url('https://img.freepik.com/free-photo/full-shot-man-doing-warrior-pose-indoor_23-2148717272.jpg?size=626&ext=jpg&ga=GA1.1.947883390.1663212112&semt=ais')`,
//    backgroundPosition: "top",
//    backgroundAttachment: "fixed",
//    backgroundSize: "cover",
//    backgroundBlendMode: "multiply",
//    backgroundColor: "#606060",
//    marginTop: "60px",
//  };
//  return (
//    <div className="container">
//      <Helmet>
//        <title>CorePower Yoga || Instructors</title>
//      </Helmet>
//      <section style={bgStyle}>
//        <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
//          <div className="text-center lg:text-left">
//            {/*<Fade>*/}
//            <h1
//              className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-"
//              style={{lineHeight: "1.8"}}
//            >
//              Meet our best <br />
//              and favorite yoga Instructors
//            </h1>
//            <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-2xl">
//              Yoga the best way to keep your body and soul fit n calm.
//            </p>
//            {/*</Fade>*/}
//          </div>
//        </div>
//      </section>
//      <h1 className="text-center py-12 font-bold font-mono text-3xl bg-indigo-300">
//        Yoga Instructors
//      </h1>
//      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//        {yogaTeachers.map((yogaTeacher) => (
//          <YogaTeacher
//            key={yogaTeacher._id}
//            yogaTeacher={yogaTeacher}
//          ></YogaTeacher>
//        ))}
//      </div>
//    </div>
//  );
//};

//export default Instructors;
