import React, {useState} from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider";
import icon from "../../../assets/icon/yoga_icon.png";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/dashboard">DashBoard</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-50  bg-indigo-600 text-[#dfd3c5] top-0">
      <div className="navbar-start">
        <div className="dropdown ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-200 text-black rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <h2 className="btn btn-ghost normal-case block text-left text-xl">
          <strong className="text-3xl"> CorePowerYoga </strong>
          <img src={icon} className="inline-flex" alt="" />
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn">
              log out
            </button>
            <button>
              <img
                className=" rounded-full w-12"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
