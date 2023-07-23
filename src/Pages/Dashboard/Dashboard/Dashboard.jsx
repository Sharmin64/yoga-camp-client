import React from "react";
import dashB from "../../../assets/dashboard/dashB.jpeg";
//import dashA from "../../../assets/dashboard/dashA.jpeg";
const Dashboard = () => {
  return (
    <div className="relative h-full">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          mixBlendMode: "multiply",
          opacity: 0.7,
        }}
      ></div>
      <img className="w-[950px]" src={dashB} alt="" />
    </div>
  );
};

export default Dashboard;
