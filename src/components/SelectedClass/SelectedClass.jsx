/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import {RiDeleteBinFill} from "react-icons/ri";
import {MdAttachMoney} from "react-icons/md";
import Swal from "sweetalert2";
import PaymentModal from "../Modal/PaymentModal";

const SelectedClass = ({classDetails, index, refetch}) => {
  const {className, instructorName, price} = classDetails;
  let [modal, setModal] = useState(false);

  const handleDelete = (classDetails) => {
    Swal.fire({
      title: "Are you sure you want to cancel?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${import.meta.env.VITE_API_URL}/selected-classes-cart/${
            classDetails?._id
          }`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire(
                "Canceled!",
                "Your class has been canceled.",
                "success"
              );
            }
          });
      }
    });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <tr className="text-xl justify-end font-bold">
        <td>{index + 1}</td>
        <td>{className}</td>
        <td>{instructorName}</td>
        <td>$ {price}</td>
        <th>
          <button
            onClick={() => handleDelete(classDetails)}
            className="flex items-center font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-red-500 hover:bg-transparent hover:text-red-400 border-0 border-b-4 border-red-800 cursor-pointer"
          >
            <RiDeleteBinFill />
            Cancel
          </button>
        </th>
        <th>
          <button
            onClick={() => setModal(true)}
            className="flex items-center font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-indigo-500 hover:bg-transparent hover:text-indigo-400 border-0 border-b-4 border-indigo-800 cursor-pointer"
          >
            <MdAttachMoney />
            Pay
          </button>
        </th>
      </tr>
      <PaymentModal
        isOpen={modal}
        closeModal={closeModal}
        classDetails={classDetails}
      />
    </>
  );
};

export default SelectedClass;
