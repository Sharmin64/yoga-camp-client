import React from "react";

import useAuth from "../../../hooks/useAuth";

import {toast} from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllClasses from "../../../hooks/useAllClasses";
import axios from "axios";
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";

const AddClass = () => {
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [, , refetch] = useAllClasses();

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const instructorName = form.name.value;
    const email = form.email.value;
    const className = form.className.value;
    const classPrice = form.price.value;
    const price = parseInt(classPrice);
    const classImage = form.photo.value;
    const availableSeats = form.seat.value;
    const enrolled = 0;
    const status = "pending";
    const newClass = {
      className,
      classImage,
      instructorName,
      email,
      enrolled,
      availableSeats,
      price,
      status,
    };

    console.log(newClass);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/popular-classes`,
      newClass
    );
    if (res.data.insertedId) {
      refetch();
      form.reset();
      toast.success("Class added successfully");
    }
  };

  return (
    <section>
      <Helmet>
        <title>Core Power | Dashboard-Add Class</title>
      </Helmet>
      <SectionTitle subHeading="Wanna add a class?" heading="Add Now" />
      <div className="lg:mx-14">
        <form className="w-full  mt-16 space-y-7" onSubmit={handleAdd}>
          {/* Name and email */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2">
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="Your Name"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                name="email"
                defaultValue={user.email}
                placeholder="Your email"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>
          {/* name and photo */}
          <div className="md:flex gap-4 mt-2">
            <div className="md:w-1/2">
              <input
                type="text"
                name="className"
                placeholder="Class Name"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Class Image"
                name="photo"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>

          {/* sit and  price*/}
          <div className="md:flex gap-4 mt-2">
            <div className="md:w-1/2">
              <input
                type="text"
                name="seat"
                placeholder="Available Seat"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="number"
                placeholder="Class Price"
                name="price"
                className="w-full  lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <input
              className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer w-1/2 my-5 mx-auto"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddClass;
