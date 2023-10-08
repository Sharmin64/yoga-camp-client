/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {toast} from "react-hot-toast";
import {useState} from "react";
import useAuth from "../../hooks/useAuth";
import {Navigate, useNavigation} from "react-router-dom";
import Loader from "../../Pages/Shared/Loader";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import useClass from "../../hooks/useClass";
import useEnroll from "../../hooks/useEnroll";

const ClassCard = ({singleClass}) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const {
    _id,
    className,
    classImage,
    instructorName,
    availableSeats,
    price,
    enrolled,
  } = singleClass;
  const {user} = useAuth();
  const token = localStorage.getItem("access-token");
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [addedClass, refetch] = useClass();
  const [enrollClasses] = useEnroll();
  //console.log(enrollClasses);

  const handleSelected = () => {
    if (user) {
      const classDetails = {
        classId: _id,
        className,
        instructorName,
        availableSeats,
        price,
        classImage,
        enrolled,
        email: user?.email,
      };
      fetch(`${import.meta.env.VITE_API_URL}/selected-classes-cart`, {
        method: "POST",
        headers: {
          authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(classDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Class added successfully");
          }
        });
    } else {
      toast.error("Please log in first");
      Navigate("/login");
    }
  };

  return (
    <div
      className={`card items-center w-96 ${
        availableSeats <= 0 ? "bg-indigo-200" : "bg-indigo-100"
      } shadow-xl mb-6`}
    >
      <figure className="px-10 pt-10">
        <img
          src={classImage}
          alt="Shoes"
          className="rounded-xl w-full relative hover:scale-110 transition-all"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{className}</h2>
        <p className="text-md font-semibold">Instructor: {instructorName}</p>
        <p className="absolute top-10 right-6 bg-indigo-200 font-semibold rounded-xl p-1 text-black text-sm">
          Students: {enrolled}
        </p>
        <p className="font-semibold">Available Seats: {availableSeats}</p>
        <p className="font-semibold">Price: {price}$</p>
        <div>
          <button
            disabled={
              availableSeats <= 0 || isAdmin || isInstructor ? true : false
            }
            onClick={handleSelected}
            className={
              isAdmin || isInstructor
                ? "btn"
                : "font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer"
            }
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
