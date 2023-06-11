import React from "react";

const Class = ({eClass}) => {
  const {className, instructorName, classImage} = eClass;
  return (
    <div className="mt-12 mb-12">
      <h1>Popular Class here</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={classImage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>{className}</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
