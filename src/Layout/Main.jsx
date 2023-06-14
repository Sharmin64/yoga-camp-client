import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
