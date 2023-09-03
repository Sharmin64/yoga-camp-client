import React from "react";

import Swal from "sweetalert2";

import {useNavigation, useParams} from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllClasses from "../../../hooks/useAllClasses";
import {Helmet} from "react-helmet-async";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle";

const UpdateClass = () => {
  const paramsId = useParams();
  const id = paramsId.id;
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [classes, , refetch] = useAllClasses();
  const data = classes.find((item) => item._id === id);

  const handleUpdate = async (e) => {
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
    const updateClass = {
      className,
      classImage,
      instructorName,
      email,
      enrolled,
      availableSeats,
      price,
      status,
    };

    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/popular-classes/${id}`,
      updateClass
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: "Success!",
        text: "Class updated successfully, waiting for admin approval!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <section>
      <Helmet>
        <title>Core Power| Dashboard-Update Class</title>
      </Helmet>
      <SectionTitle
        subHeading={"Only Instructor can"}
        heading={"Update Now"}
      ></SectionTitle>
      <div className="lg:mx-14">
        <form className="w-full space-y-7 mt-16" onSubmit={handleUpdate}>
          {/* Name and email */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 items-center">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2 items-center">
              <input
                type="text"
                name="email"
                defaultValue={user.email}
                placeholder="Your email"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>
          {/* name & photo */}
          <div className="md:flex gap-4 mt-2">
            <div className="md:w-1/2 items-center">
              <input
                type="text"
                defaultValue={data?.className}
                name="className"
                placeholder="Class Name"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2 items-center">
              <input
                type="url"
                defaultValue={data?.image}
                placeholder="Class Image"
                name="photo"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>

          {/* sit & price */}
          <div className="md:flex gap-4 mt-2">
            <div className="md:w-1/2 items-center">
              <input
                type="text"
                defaultValue={data?.availableSeats}
                name="seat"
                placeholder="Available Seat"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
            <div className="md:w-1/2 items-center">
              <input
                type="number"
                defaultValue={data?.price}
                placeholder="Class Price"
                name="price"
                className=" w-full lg:w-96 px-6 py-2 rounded-md bg-indigo-700 bg-opacity-20 focus:outline focus:outline-indigo-300 input"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <input
              className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer w-1/2 my-5 mx-auto"
              type="submit"
              value="Update Class"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateClass;
