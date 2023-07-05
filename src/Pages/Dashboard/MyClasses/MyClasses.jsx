import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import {toast} from "react-hot-toast";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const {user} = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
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
  const handleDelete = () => {
    toast("user deleted ");
  };
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
              <th>Name</th>
              <th>Email</th>
              <th> Admin Role</th>
              <th> Instructor Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={handleMakeAdmin}
                      className="btn btn-ghost bg-orange-400 text-white rounded-full btn-lg"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={handleMakeInstructor}
                      className="btn btn-ghost bg-orange-400 text-white rounded-full btn-lg"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={handleDelete}
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

export default MyClasses;
