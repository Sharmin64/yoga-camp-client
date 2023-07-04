import React from "react";

const Students = ({student}) => {
  const {instructorName, classImage, enrolled, price, description} = student;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="object-fit h-64 rounded-md w-full"
          src={classImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="justify-end">
          <button>Select Course</button>
        </div>
        <h2 className="card-title">Instructor Name:{instructorName}</h2>
        <p>Enroll:{enrolled}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Students;
