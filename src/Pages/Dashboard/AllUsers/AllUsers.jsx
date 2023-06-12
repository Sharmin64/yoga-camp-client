import {useQuery} from "@tanstack/react-query";
import React from "react";
import {Helmet} from "react-helmet-async";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";

const AllUsers = () => {
  const {data: users = [], refetch} = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5003/users");
    return res.json();
  });

  const handleDelete = () => {
    alert("tumi gaso  ga ");
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Yoga Summer Camp || AllUsers</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-200 ">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-orange-400 text-white rounded-full btn-lg"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
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

export default AllUsers;
