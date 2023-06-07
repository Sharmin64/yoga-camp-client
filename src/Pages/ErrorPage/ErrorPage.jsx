import React from "react";
import {Link} from "react-router-dom";
import errImg from "../../assets/images/error.jpg";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900 relative">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="max-w-fit h-[790px]" src={errImg} alt="error" />
        <Link
          to="/"
          className="pl-72 py-5 pt-5 font-semibold rounded bg-cyan-200 text-gray-900 z-10 bottom-1 left-64 right-64 inset-auto absolute"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
