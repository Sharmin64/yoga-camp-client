import React from "react";

import {Helmet} from "react-helmet-async";
import useEnroll from "../../../hooks/useEnroll";


const EnrolledClasses = () => {
  const [enrollClasses] = useEnroll();
  console.log(enrollClasses);
  return (
    <section>
      <Helmet>
        <title>Core Power| Dashboard-Enroll Classes</title>
      </Helmet>
   
      <div className="flex items-center justify-center lg:mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {enrollClasses.map((enrollClass) => (
            <div
              key={enrollClass._id}
              className="card card-compact w-84 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={enrollClass?.classImage}
                  alt="Image"
                  className="h-40 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Enrolled Class:
                  <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text">
                    {enrollClass?.className}
                  </span>
                </h2>
                <div className="space-y-3 mb-3">
                  <h2 className="text-lg">
                    Instructor Name:
                    <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text">
                      {enrollClass?.instructorName}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrolledClasses;

