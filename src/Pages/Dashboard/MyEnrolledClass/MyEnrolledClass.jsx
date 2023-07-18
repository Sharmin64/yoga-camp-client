import React from "react";
import {Helmet} from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import {useEffect} from "react";
import {useState} from "react";

const MyEnrolledClass = () => {
  const {user} = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/enrolledClass`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div className="w-full">
      <Helmet>
        <title>CorePower Yoga || MyEnrolledClass</title>
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
            {enrolledClasses.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-24 h-24 rounded-xl"
                    src={user.classImage}
                    alt=""
                  />
                </td>
                <td>{user.name}</td>
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

export default MyEnrolledClass;
