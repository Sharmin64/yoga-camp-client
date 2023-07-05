import React from "react";

const ClassList = ({classData, setReload, reload, index}) => {
  console.log(classData);
  const {
    _id,
    className,
    instructorName,
    classImage,
    instructorImage,
    email,
    title,
    price,
    enrolled,
    availableSeats,
    description,
    seats,
    status,
  } = classData;
  //todo: comment kora code gulo implement kora baki
  //  const handleStatus = (id, status) => {
  //    const state = { status: status }
  //    setReload(true)
  //    fetch(`${import.meta.env.VITE_API_URL}/status/${id}`, {
  //        method: 'PATCH',
  //        headers: {
  //            'content-type': 'application/json'
  //        },
  //        body: JSON.stringify(state)
  //    })
  //        .then(res => res.json())
  //        .then(data => {

  //            if (data.modidiedCount > 0) {
  //                toast('User Role Updated')
  //                setReload(false)
  //            }
  //        })
  //}

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classImage} alt="Avatar" />
              </div>
            </div>
          </div>
        </td>

        <td>{className}</td>
        <td>{instructorName}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{enrolled}</td>

        <td>{seats}</td>
        <td>
          {(status === "Pending" && (
            <p className=" text-yellow-400">{status}</p>
          )) ||
            (status === "Approved" && (
              <p className=" text-green-400">{status}</p>
            )) ||
            (status === "Denied" && <p className=" text-red-500">{status}</p>)}
        </td>
        <td>
          <button
            onClick={() => handleStatus(_id, "Approved")}
            className=" text-white font-bold bg-red-600 p-2 rounded-md disabled:bg-gray-200"
            disabled={status === "Approved" || status === "Denied"}
          >
            Approve
          </button>
        </td>
        <td>
          <button
            onClick={() => handleStatus(_id, "Denied")}
            className=" text-white font-bold bg-red-600 disabled p-2 px-3 rounded-md disabled:bg-gray-200"
            disabled={status === "Approved" || status === "Denied"}
          >
            Deny
          </button>
        </td>
        <td>
          <button
            onClick={() => openModal(_id)}
            className=" text-white font-bold bg-red-600 p-2 rounded-md"
          >
            Feedback
          </button>
        </td>
      </tr>
    </>
  );
};

export default ClassList;
