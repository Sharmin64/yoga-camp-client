import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import {toast} from "react-hot-toast";
import {FaTrashAlt, FaUserShield} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
//import useRole from "../../../hooks/useRole";
//import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  //const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  const [users, setUsers] = useState([]);
  //const role = useRole();
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
              <th> Role</th>
              <th> Make Admin </th>
              <th>Make Instructor </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/*<td>{role}</td>*/}
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
