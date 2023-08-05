import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import yogaLogo from "../../../assets/logo/yogaLogo.png";
import {toast} from "react-hot-toast";
import ThemeChange from "../../../components/ThemeChange/ThemeChange.jsx";
import {AuthContext} from "../../../Providers/AuthProvider.jsx";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  return (
    <div className="px-4 py-16 mx-auto sm: max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    isActive
                      ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({isActive}) =>
                    isActive
                      ? "activfont-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-fulle"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({isActive}) =>
                    isActive
                      ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                  }
                >
                  Classes
                </NavLink>
              </li>
              <li>
                {user && (
                  <NavLink
                    to="/dashboard"
                    className={({isActive}) =>
                      isActive
                        ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                        : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                    }
                  >
                    Dashboard
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              src={yogaLogo}
              alt=""
              className="w-12 h-12 mr-6 rounded-full"
            />
            Core Power
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive
                    ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({isActive}) =>
                  isActive
                    ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                }
              >
                Instructors
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/classes"
                className={({isActive}) =>
                  isActive
                    ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                }
              >
                Classes
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/dashboard"
                  className={({isActive}) =>
                    isActive
                      ? "font-medium tracking-wide text-indigo-500 transition-colors duration-200 bg-transparent rounded-full"
                      : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-5"
                  }
                >
                  Dashboard
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center">
              <div>
                <button
                  onClick={handleLogOut}
                  className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
              <div className="tooltip" data-tip={user?.displayName}>
                <img
                  src={user?.photoURL}
                  className="w-12 h-12 rounded-full ml-4"
                />
              </div>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer">
                  Log In
                </button>
              </NavLink>
            </>
          )}
        </div>
        <div className="ml-2 flex justify-center items-center">
          <ThemeChange />
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default Navbar;