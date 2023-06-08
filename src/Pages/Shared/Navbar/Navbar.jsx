import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        {/*<Link to="/menu">Our MenuBar</Link>*/}
        instructor
      </li>
      <li>
        {/*<Link to="/order/salad">Order Food</Link>*/}
        all user
      </li>
      <li>
        yoga class
        {/*<Link to="/secret">SecretPage</Link>*/}
      </li>

      {/*{user ? (
        <>
          <span>{user?.displayName}</span>

          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            login
            <Link to="/login">Login</Link>
          </li>
        </>
      )}*/}
      {/*<li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart style={{fontSize: "1.5rem"}} />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>*/}
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30  bg-black-100 text-black">
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
          <strong className="text-3xl"> Bistro Boss</strong> <br /> Restaurant
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
