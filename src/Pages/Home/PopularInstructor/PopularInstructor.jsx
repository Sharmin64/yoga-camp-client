import {useState, useEffect} from "react";
import Instructors from "./Instructors";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold font-mono text-3xl mt-16">
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
