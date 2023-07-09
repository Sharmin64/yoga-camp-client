import React from "react";

const SingleClass = ({classItem}) => {
  const {_id, className, instructorName, classImage, enrolled} = classItem;

  const handleSelected = () => {
    const classDetails = {className, instructorName, classImage, enrolled};

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
          alert("ruk jaw");
        }
      });
  };

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
          <div className="flex justify-end ">
            <button onClick={handleSelected} className="btn btn-outline ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
