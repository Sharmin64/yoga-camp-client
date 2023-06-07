import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
