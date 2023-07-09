import React from "react";
import {useState, useEffect} from "react";
import YogaTeacher from "./YogaTeacher";
import {Helmet} from "react-helmet-async";

const Instructors = () => {
  const [yogaTeachers, setYogaTeachers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setYogaTeachers(data);
        console.log(data);
      });
  }, []);

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
    <div className="container">
      <Helmet>
        <title>CorePower Yoga || Instructors</title>
      </Helmet>
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
      <h1 className="text-center py-12 font-bold font-mono text-3xl bg-indigo-300">
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
