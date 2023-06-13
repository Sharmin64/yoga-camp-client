import {useState, useEffect} from "react";
import Instructors from "./Instructors";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold font-mono text-3xl">
        Popular Instructors
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {instructors.map((instructor) => (
          <Instructors
            key={instructor._id}
            instructor={instructor}
          ></Instructors>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
