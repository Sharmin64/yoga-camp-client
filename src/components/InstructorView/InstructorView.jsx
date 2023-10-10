/* eslint-disable react/prop-types */
import React from "react";

const InstructorView = ({teacher}) => {
  return (
    <div className="avatar flex flex-col text-center justify-center items-center shadow-md bg-[#c0c5ce] rounded-2xl">
      <div className="w-full max-w-sm rounded-2xl relative hover:scale-110 transition-all">
        <img src={teacher?.image} />
      </div>
      <>
        <p className="font-bold bg-gradient-to-r from-[#414a4c] via-[#414a4c] to-[#343d46] text-transparent bg-clip-text text-3xl mt-8">
          {teacher.name}
        </p>
        <p className="text-md font-semibold">Class: {teacher?.className}</p>
        <p className="text-sm">Email: {teacher.email}</p>
        <p className="text-sm mb-10 font-semibold absolute top-0 right-20 p-1 bg-[#c0c5ce] rounded-xl text-black">
          Students: {teacher.enrolled}
        </p>
        <div>
          <button className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-[#343d46] hover:bg-transparent hover:text-[#3b444b] border-0 border-b-4 border-[#65737e] cursor-pointer">
            See Classes
          </button>
        </div>
      </>
    </div>
  );
};

export default InstructorView;
