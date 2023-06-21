import React from "react";

const YogaTeacher = ({yogaTeacher}) => {
  const {image, name, email} = yogaTeacher;
  return (
    <div className="my-12">
      <div className="card card-compact w-cover bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-fit h-64 rounded-md w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default YogaTeacher;
