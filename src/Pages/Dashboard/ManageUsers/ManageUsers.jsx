import React from "react";
import {useQuery} from "@tanstack/react-query";

import {Helmet} from "react-helmet-async";
import {toast} from "react-hot-toast";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";

const ManageUsers = () => {
  const {data: users = [], refetch} = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5003/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5003/users/admin/${user.id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast(`${user.name} is now Admin`);
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5003/users/instructor/${user.id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast(`${user.name} is now Instructor`);
        }
      });
  };
  const handleDelete = () => {
    toast("user deleted ");
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
              <th> Admin Role</th>
              <th> Instructor Role</th>
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
                      onClick={() => handleMakeAdmin(user)}
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
                      onClick={() => handleMakeInstructor(user)}
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

export default ManageUsers;

//?text code
//import React, { useEffect, useState } from 'react';
//import axios from 'axios';

//const UserManagement = () => {
//  const [users, setUsers] = useState([]);

//  useEffect(() => {
//    fetchUsers();
//  }, []);

//  const fetchUsers = async () => {
//    try {
//      const response = await axios.get('/api/users'); // Replace '/api/users' with your server endpoint
//      setUsers(response.data);
//    } catch (error) {
//      console.error('Error fetching users:', error);
//    }
//  };

//  const makeInstructor = async (id) => {
//    try {
//      const response = await axios.put(`/api/users/${id}`, { role: 'Instructor' });
//      const updatedUser = response.data;
//      const updatedUsers = users.map((user) => {
//        if (user.id === updatedUser.id) {
//          return updatedUser;
//        }
//        return user;
//      });
//      setUsers(updatedUsers);
//    } catch (error) {
//      console.error('Error updating user role:', error);
//    }
//  };

//  const makeAdmin = async (id) => {
//    try {
//      const response = await axios.put(`/api/users/${id}`, { role: 'Admin' });
//      const updatedUser = response.data;
//      const updatedUsers = users.map((user) => {
//        if (user.id === updatedUser.id) {
//          return updatedUser;
//        }
//        return user;
//      });
//      setUsers(updatedUsers);
//    } catch (error) {
//      console.error('Error updating user role:', error);
//    }
//  };

//  return (
//    <div>
//      <h2>Manage Users</h2>
//      <table>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Role</th>
//            <th>Actions</th>
//          </tr>
//        </thead>
//        <tbody>
//          {users.map((user) => (
//            <tr key={user.id}>
//              <td>{user.name}</td>
//              <td>{user.role}</td>
//              <td>
//                <button
//                  onClick={() => makeInstructor(user.id)}
//                  disabled={user.role === 'Instructor'}
//                >
//                  Make Instructor
//                </button>
//                <button
//                  onClick={() => makeAdmin(user.id)}
//                  disabled={user.role === 'Admin'}
//                >
//                  Make Admin
//                </button>
//              </td>
//            </tr>
//          ))}
//        </tbody>
//      </table>
//    </div>
//  );
//};

//export default UserManagement;
