import React from "react";
import {Helmet} from "react-helmet-async";
import useClass from "../../../hooks/useClass";
import {FaTrashAlt} from "react-icons/fa";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const MySelectedClass = () => {
  const classes = useClass();
  console.log(classes);

  const handleDelete = (itemName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/classes/${itemName._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>CorePower Yoga || MyClass</title>
      </Helmet>
      <div className="flex justify-evenly">
        <h1>Selected Class</h1>
        <Link to="/dashboard/paymenthistory">
          <button className="btn btn-warning">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-300">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>ClassName</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 &&
              classes.map((itemName, index) => (
                <tr key={itemName._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={itemName.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{itemName.className}</td>
                  <td>{itemName.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(itemName)}
                      className="btn btn-ghost bg-red-400 text-white rounded-full btn-lg"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
