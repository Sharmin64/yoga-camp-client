import React, {useEffect, useState} from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
//import "./Checkout.css";
//import {useLoaderData} from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../../hooks/useAuth";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);
const PaymentHistory = () => {
  const [selected, setSelected] = useState({});
  const {user} = useAuth();
  console.log(user);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/selected/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
      });
  }, [user?.email]);

  return (
    <div className="p-4 ">
      <div className=" text-center">
        <h1 className="text-5xl font-extrabold text-red-600 dark:text-white">
          Core power Yoga
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Let us move on your fitness journey...
          </small>
        </h1>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm selected={selected} />
      </Elements>
    </div>
  );
};

export default PaymentHistory;
