import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
//import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";

import Classes from "../Pages/Classes/Classes";
//import PrivateRoute from "./PrivateRoute";
import Instructors from "../Pages/Instructors/Instructors";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../Pages/Dashboard/MyClass/MySelectedClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      //<PrivateRoute>
      <DashBoard />
      //</PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myselectedclass",
        element: <MySelectedClass />,
      },

      {
        path: "/dashboard/manageusers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/myenrolledclass",
        element: <MyEnrolledClass />,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/myclasses",
        element: <MyClasses />,
      },
    ],
  },
]);
