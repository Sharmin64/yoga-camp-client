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
    path: "dashboard",
    element: (
      //<PrivateRoute>
      <DashBoard />
      //</PrivateRoute>
    ),
    children: [
      {
        path: "myselectedclass",
        element: <MySelectedClass />,
      },

      {
        path: "manageusers",
        element: <ManageUsers />,
      },
      {
        path: "manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "myenrolledclass",
        element: <MyEnrolledClass />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclasses",
        element: <MyClasses />,
      },
    ],
  },
]);
