//import React from "react";
//import {toast} from "react-hot-toast";
//import {useParams} from "react-router-dom";

//const AddFeedback = () => {
//  const params = useParams();
//  console.log(params.id);
//  const handleFeedback = (event) => {
//    event.preventDefault();
//    const form = event.target;
//    const feedback = form.feedback.value;
//    const data = {feedback: feedback};
//    console.log(data);
//    fetch(`${import.meta.env.VITE_API_URL}/feedback/${params.id}`, {
//      method: "PATCH",
//      headers: {
//        "content-type": "application/json",
//      },
//      body: JSON.stringify(data),
//    })
//      .then((res) => res.json())
//      .then((data) => {
//        if (data.modifiedCount > 0) {
//          toast("Feedback Sent");
//        }
//      });
//  };

//  return (
//    <div>
//      <div className="p-20">
//        <h2 className="text-4xl font-bold text-indigo-300">
//          Give Feedback Here
//        </h2>
//      </div>
//      <div className="w-96 mx-auto">
//        <form onSubmit={handleFeedback}>
//          <textarea
//            id="feedback"
//            rows="10"
//            cols="30"
//            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-10"
//            placeholder="Class description here"
//          ></textarea>
//          <button
//            type="submit"
//            className="w-80 ml-8 text-white text-lg font-semibold bg-red-700 hover:bg-red-800 dark:bg-indigo-600 dark:hover:bg-indigo-800 py-3 rounded-md"
//          >
//            Add Feedback
//          </button>
//        </form>
//      </div>
//    </div>
//  );
//};

//export default AddFeedback;
