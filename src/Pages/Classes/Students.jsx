import React from "react";

const Students = ({student, refetch}) => {
  console.log(student);
  const {
    _id,
    instructorName,
    classImage,
    enrolled,
    availableSeats,
    seats,
    price,
    description,
  } = student;
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
          <button className="btn btn-outline">Select Course</button>
        </div>
        <h2 className="card-title">Instructor Name:{instructorName}</h2>
        <p>Enroll:{enrolled}</p>
        <p>Price:{price}</p>
        <p>Seats:{seats}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Students;
