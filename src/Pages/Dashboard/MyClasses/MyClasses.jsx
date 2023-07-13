import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import {toast} from "react-hot-toast";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const {user} = useAuth();
  const [users, setUsers] = useState([]);
  const {
    _id,
    className,
    classImage,
    enrolled,
    availableSeats,
    seats,
    price,
    description,
  } = users;
  console.log(classImage);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [user?.email]);
  const handleMakeAdmin = () => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is now Admin`);
        }
      });
  };
  const handleMakeInstructor = () => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is now Instructor`);
        }
      });
  };
  //const handleUpdate = () => {
  //  toast("user deleted ");
  //};
  return (
    <div className="w-full">
      <Helmet>
        <title>CorePower Yoga || ManageUsers</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-200 ">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>

              <th> Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-24 h-24 rounded-xl"
                    src={user.classImage}
                    alt=""
                  />
                </td>
                <td>{user.className}</td>
                <td>{user.email}</td>
                <td className="text-lg font-semibold text-indigo-400">
                  {user.status}
                </td>

                <td>
                  <button
                    //onClick={handleUpdate}
                    className="btn btn-ghost bg-red-400 text-white rounded-md btn-md"
                  >
                    Update
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

export default MyClasses;
