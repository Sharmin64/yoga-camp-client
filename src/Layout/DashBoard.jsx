import React from "react";
import {FaUniversalAccess, FaHome} from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";

const DashBoard = () => {
 
  const isAdmin = true;
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageclasses">
                  <FaUniversalAccess />
                  Manage Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageusers">Manage users</Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>
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
