import React, {useState} from "react";
import {
  FaUniversalAccess,
  FaHome,
  FaWallet,
  FaRegEdit,
  FaUsers,
} from "react-icons/fa";
import {Link, NavLink, Outlet} from "react-router-dom";
import {GrUser, GrUserAdmin} from "react-icons/gr";
import {
  BsGrid,
  BsPersonVideo,
  BsUiChecks,
  BsUiChecksGrid,
} from "react-icons/bs";
import {MdPayments} from "react-icons/md";
import {BiAddToQueue} from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashBoard = () => {
  const {user} = useAuth();
  const role = useRole();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex  items-cente  justify-center bg-indigo-100">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-indigo-400">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {role === "admin" && (
            <li>
              <NavLink
                to="/dashboard/manageClass"
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 text-zinc-400 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                }
              >
                <FaRegEdit className="w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  Manage Classes
                </span>
              </NavLink>
            </li>
          )}
          {role === "admin" && (
            <li>
              <NavLink
                to="/dashboard/manageusers"
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                }
              >
                <FaUsers className="w-6 h-6 transition duration-75 " />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  Manage Users
                </span>
              </NavLink>
            </li>
          )}

          {role === "instructor" && (
            <li>
              <NavLink
                to="/dashboard/updateClass"
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 text-zinc-400 rounded-lg dark:text-gray-50 hover:bg-blue-400 dark:hover:bg-blue-600"
                    : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                }
              >
                <FaRegEdit className="w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  Update Class
                </span>
              </NavLink>
            </li>
          )}
          {role === "instructor" && (
            <li>
              <NavLink
                to="/dashboard/myClasses"
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 text-zinc-400 rounded-lg dark:text-gray-50 hover:bg-blue-400 dark:hover:bg-blue-600"
                    : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                }
              >
                <FaRegEdit className="w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  My Classes
                </span>
              </NavLink>
            </li>
          )}
          {role === "instructor" && (
            <li>
              <NavLink
                to="/dashboard/addClass"
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                }
              >
                <BiAddToQueue className="w-6 h-6 transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  Add a Class
                </span>
              </NavLink>
            </li>
          )}

          {role === "admin" || role === "instructor" ? (
            <></>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/selected-classes"
                  className={({isActive}) =>
                    isActive
                      ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                  }
                >
                  <BsUiChecks className="w-6 h-6 transition duration-75" />
                  <span className="flex-1 ml-3 whitespace-nowrap ">
                    My Selected Classes
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/enrolled-classes"
                  className={({isActive}) =>
                    isActive
                      ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                  }
                >
                  <BsUiChecksGrid className="w-6 h-6 transition duration-75" />
                  <span className="flex-1 ml-3 whitespace-nowrap ">
                    My Enrolled Classes
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({isActive}) =>
                    isActive
                      ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
                  }
                >
                  <MdPayments className="w-6 h-6 transition duration-75" />
                  <span className="flex-1 ml-3 whitespace-nowrap ">
                    Payment
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/dashboard/profile">
              <img
                src={user?.photoURL}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive
                  ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
              }
            >
              <FaHome className="w-6 h-6 transition duration-75 " />
              <span className="flex-1 ml-3 whitespace-nowrap ">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({isActive}) =>
                isActive
                  ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
              }
            >
              <BsGrid className="w-6 h-6 transition duration-75 " />
              <span className="flex-1 ml-3 whitespace-nowrap ">Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({isActive}) =>
                isActive
                  ? "flex items-center p-2 text-slate-800 rounded-lg dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700"
              }
            >
              <BsPersonVideo className="w-6 h-6 transition duration-75 " />
              <span className="flex-1 ml-3 whitespace-nowrap ">
                Instructors
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
