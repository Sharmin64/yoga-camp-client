import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import useClass from "../../../hooks/useClass";
import {FaTrashAlt} from "react-icons/fa";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const MySelectedClass = () => {
  const [classes, setClasses] = useState([]);
  //console.log(classes);
  //const [enrolledClass, setEnrolledClass] = useState({});
  const [enrolled, setEnrolled] = useState({});
  const nevigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/selectedClass`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
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

  const handlePayment = (id) => {
    console.log(id);
    nevigate(`/dashboard/paymenthistory/${id}`);
    fetch(`${import.meta.env.VITE_API_URL}/selectedClass/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
        console.log(data);

        console.log(enrolled);
      });
    console.log(enrolled);

    //fetch(`${import.meta.env.VITE_API_URL}/postEnrolled`, {
    //  method: "POST",
    //  headers: {
    //    "content-type": "application/json",
    //  },
    //  body: JSON.stringify(enrolled),
    //})
    //  .then((res) => res.json())
    //  .then((data) => {
    //    if (data.insertedId) {
    //      toast("Enrolled Successful");
    //    }
    //  });

    //fetch(`${import.meta.env.VITE_API_URL}/postEnrolled`, {
    //  method: "POST",
    //  headers: {"Content-Type": "application/json"},
    //  body: JSON.stringify(enrollClass),
    //})
    //  .then((res) => res.json())
    //  .then((result) => {
    //    console.log(result);
    //    toast("Class Posted Successfully");
    //  })
    //  .catch((error) => {
    //    console.log("error occured", error.message);
    //  });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>CorePower Yoga || MyClass</title>
      </Helmet>
      <div className="flex justify-evenly">
        <h1 className="text-3xl mb-10 font-bold font-mono text-indigo-600">
          Selected Class
        </h1>
      </div>
      <div className="mx-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>InstructorName</th>
              <th>Price</th>
              <th>Payment</th>
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
                  <td>{itemName.instructorName}</td>
                  <td>{itemName.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        nevigate(
                          `/dashboard/paymenthistory/${itemName?.classId}`
                        )
                      }
                      className="btn btn-ghost bg-indigo-400 text-white rounded-lg btn-lg"
                    >
                      Pay
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(itemName)}
                      className="btn btn-ghost bg-indigo-400 text-white rounded-lg btn-lg"
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
