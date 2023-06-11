import React from "react";
import {Helmet} from "react-helmet-async";
//import useClass from "../../../hooks/useClass";

const MyClass = () => {
  //const [eClass] = useClass();
  //const totalEnrolled = eClass.reduce(
  //  (sum, enrolledClass) => enrolledClass.price + sum,
  //  0
  //);
  return (
    <div>
      <Helmet>
        <title>Yoga Summer Camp || MyClass</title>
      </Helmet>
      <div className="flex justify-evenly">
        <h1>Enrolled Class will be </h1>
        {/*<h1>{totalEnrolled}</h1>*/}
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Students</th>
              <th>ClassName</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
