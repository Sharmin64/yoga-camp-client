import React from "react";
import {toast} from "react-hot-toast";

const Students = ({student}) => {
  //console.log(student);
  const {
    _id,
    instructorName,
    classImage,
    className,
    enrolled,
    availableSeats,
    seats,
    price,
    description,
  } = student;

  const handleSelected = () => {
    const classDetails = {
      classId: _id,
      instructorName,
      classImage,
      className,
      enrolled,
      availableSeats,
      seats,
      price,
      description,
    };

    fetch(`${import.meta.env.VITE_API_URL}/postSelected`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Class Selected");
        }
      });
  };

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
          <button onClick={handleSelected} className="btn btn-outline">
            Select Course
          </button>
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
