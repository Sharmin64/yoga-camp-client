import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
