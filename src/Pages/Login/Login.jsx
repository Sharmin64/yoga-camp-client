import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import login from "../../../src/assets/images/loginPage.jpg";
import {AuthContext} from "../../Providers/AuthProvider";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn, gProvider} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, {replace: true});
    });
  };

  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleSocial = () => {
    gProvider()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>CorePower | Login</title>
      </Helmet>
      <div className="hero h-80 bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:w-full lg:object-cover lg:text-left">
            <Link to="/">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </Link>

            <img
              style={{width: "700px"}}
              className="rounded-r-full"
              src={login}
              alt="loginPage"
            />
          </div>
          <div className="card shadow-2xl bg-indigo-100">
            <form onSubmit={handleLogin} className="card-body m-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text"> Password</span>
                </label>
                <input
                  type={passwordEye === false ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="text-2xl absolute top-12 cursor-pointer mt-5 right-5">
                  {passwordEye === false ? (
                    <FaEyeSlash onClick={handlePasswordClick} />
                  ) : (
                    <FaEye onClick={handlePasswordClick} />
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="divider">OR</div>
              <div className=" text-center">
                <button
                  onClick={handleSocial}
                  className="btn btn-circle  btn-outline btn-primary"
                >
                  <FaGoogle className="" />
                </button>
              </div>
              <p className="mb-5 text-center">
                <small>
                  New Here?
                  <Link
                    className="text-xl hover:underline decoration-1 text-indigo-500"
                    to="/signup"
                  >
                    Register
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
