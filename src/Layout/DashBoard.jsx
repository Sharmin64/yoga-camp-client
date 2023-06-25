import React from "react";
import {FaUniversalAccess, FaHome} from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";
import {GrUser, GrUserAdmin, GrUserNew} from "react-icons/gr";

const DashBoard = () => {
  const isAdmin = true;
  const isInstructors = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-purple-100">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {isAdmin && isInstructors ? (
            <>
              <li>
                <Link to="/dashboard/home">
                  <GrUserAdmin />
                  Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageclasses">
                  <GrUserNew />
                  Manage Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageusers">
                  <GrUser />
                  Manage users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">
                  <FaHome />
                  Student Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myclass">
                  <FaUniversalAccess />
                  My Class
                </Link>
              </li>
              <li>
                <Link>Payment History</Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
