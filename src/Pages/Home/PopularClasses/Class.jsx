import React from "react";

const Class = ({classItem}) => {
  const {className, instructorName, classImage, enrolled} = classItem;

  return (
    <div className="my-12">
      <div className="card card-compact w-cover bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-fit h-64 rounded-md w-full"
            src={classImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>{className}</p>
          <p>{enrolled}</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
