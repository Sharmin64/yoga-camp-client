import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    element: <DashBoard />, //?ToDo: dashboard needs to be under private route
    children: [
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
