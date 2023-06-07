import React from "react";
import {Link} from "react-router-dom";
import errImg from "../../assets/images/error.jpg";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="max-w-fit" src={errImg} alt="error" />
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
