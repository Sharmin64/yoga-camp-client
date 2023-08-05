///* eslint-disable no-unused-vars */
//import React, {useState} from "react";
//import {useContext} from "react";
//import {Link, useNavigate} from "react-router-dom";
//import registration from "../../assets/jeson/register.json";
////import Lottie from "react-lottie";
//import {useForm} from "react-hook-form";
//import {toast} from "react-hot-toast";
//import {saveUser} from "../../api/auth";
//import {TbBrandGoogle} from "react-icons/tb";
//import {Helmet} from "react-helmet-async";
//import {AuthContext} from "../../Providers/AuthProvider";
//import {LottiePlayer} from "lottie-react";

//const SignUp = () => {
//  const {createUser, updateUserProfile, gProvider} = useContext(AuthContext);
//  const defaultOptions = {
//    loop: true,
//    autoplay: true,
//    animationData: registration,
//    rendererSettings: {
//      preserveAspectRatio: "xMidYMid slice",
//    },
//  };

//  const navigate = useNavigate();
//  const [error, setError] = useState("");
//  const [showPassword, setShowPassword] = useState(false);

//  const {
//    register,
//    handleSubmit,
//    formState: {errors},
//  } = useForm();

//  const onSubmit = (data) => {
//    if (data.password != /(?=.*?[#?!@$%^&*-])/) {
//      setError("Password Should have at least one special character");
//    }
//    if (data.password != data.confirmPassword) {
//      setError("Passwords do not match");
//      return;
//    }
//    if (data.password.length < 6) {
//      setError("Please provide a 6 character password");
//      return;
//    } else {
//      setError("");
//    }
//    if ((!data.email, !data.password, !data.name, !data.photo)) {
//      setError("Please provide valid information");
//      return;
//    } else {
//      createUser(data.email, data.password)
//        .then((result) => {
//          updateUserProfile(result.user, data.name, data.photo);
//          const saveUser = {
//            name: data.name,
//            email: data.email,
//            photo: data.photo,
//          };
//          console.log(saveUser);
//          fetch(`${import.meta.env.VITE_API_URL}/users`, {
//            method: "POST",
//            headers: {
//              "content-type": "application/json",
//            },
//            body: JSON.stringify(saveUser),
//          })
//            .then((res) => res.json())
//            .then((data) => {
//              if (data.insertedId) {
//                toast.success("Successfully registered");
//                navigate("/");
//                setError("");
//              }
//            });
//        })
//        .catch((err) => {
//          setError(err.message);
//        });
//    }
//  };

//  return (
//    <div className="md:flex justify-center items-center gap-8">
//      <Helmet>
//        <title>Core Power | Sign-up</title>
//      </Helmet>
//      <div>
//        <LottiePlayer options={defaultOptions} height={600} width={400} />
//      </div>
//      <div className="text-center">
//        <p className="text-4xl bg-gradient-to-r from-teal-400 via-teal-400 to-teal-600 text-transparent bg-clip-text mb-8">
//          New to our website? Register now!
//        </p>
//        <p>Register using social networks</p>
//        <div className="flex justify-center mt-4 mb-2">
//          <button
//            className="text-4xl text-black p-2 bg-teal-400 rounded-xl hover:scale-110 duration-150"
//            onClick={gProvider}
//          >
//            <TbBrandGoogle />
//          </button>
//        </div>
//        <div className="divider">Or</div>
//        <form className=" mb-4" onSubmit={handleSubmit(onSubmit)}>
//          <div>
//            <input
//              type="text"
//              placeholder="Name"
//              {...register("name")}
//              required
//              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
//            />
//          </div>
//          <div>
//            <input
//              type="email"
//              placeholder="Email"
//              {...register("email")}
//              required
//              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
//            />
//          </div>
//          <div>
//            <input
//              type={showPassword ? "text" : "password"}
//              required
//              placeholder="Password"
//              {...register("password", {
//                required: true,
//                minLength: 6,
//                CapLetter: /(?=.*[A-Z])/,
//              })}
//              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
//            />
//          </div>
//          <div>
//            <input
//              type={showPassword ? "text" : "password"}
//              required
//              placeholder="Confirm Password"
//              {...register("confirmPassword")}
//              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
//            />
//          </div>
//          <div>
//            <input
//              type="text"
//              placeholder="Photo URL"
//              {...register("photo")}
//              required
//              className="input input-bordered border-teal-400 w-full max-w-xs "
//            />
//          </div>
//          <p className="text-error">{error}</p>

//          {errors.password?.type === "minLength" && (
//            <p className="text-red-600">Password must be 6 characters</p>
//          )}

//          {errors.password?.type === "CapLetter" && (
//            <p className="text-red-600">Password must have one Uppercase</p>
//          )}
//          <button
//            className="btn rounded-3xl mt-5"
//            onClick={() => setShowPassword(!showPassword)}
//          >
//            {!showPassword ? "Show Password" : "Hide password"}
//          </button>
//          <p className="mb-2">
//            Already have an account?{" "}
//            <Link
//              to="/login"
//              className="text-xl hover:underline decoration-1 text-teal-500"
//            >
//              Sign In
//            </Link>
//          </p>
//          <button type="submit" className="font-medium transition duration-200 shadow-md md: mb-0 px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl text-white bg-teal-500 hover:bg-transparent hover:text-teal-400 border-0 border-b-4 border-teal-800 cursor-pointer">
//            Register
//          </button>
//        </form>
//      </div>
//    </div>
//  );
//};

//export default SignUp;

//?test coopy
import {useContext} from "react";
import {Helmet} from "react-helmet-async";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import registerImg from "../../../src/assets/images/register.jpg";
import {useState} from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm();

  const {createUser, updateUserProfile, gProvider} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("profile updated");
          const saveUser = {name: data.name, email: data.email};
          fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          navigate(from, {replace: true});
        })
        .catch((error) => console.log(error));
    });
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

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");

  return (
    <>
      <Helmet>
        <title>CorePower | SignUp</title>
      </Helmet>
      <div className="hero min-h-scree bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left object-cover w-full">
            <Link to="/">
              <h1 className="text-5xl font-bold">Sign up !</h1>
            </Link>
            <img src={registerImg} alt="" />
          </div>
          <div className="card w-full shadow-2xl h- bg-indigo-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body m-0">
              <div className="form-control">
                <label>
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {required: true})}
                  placeholder="name"
                  name="name"
                  className="input input-bordered focus:border-red-500 focus:ring-red-500 border-red-500"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label>
                  <span className="label-text">Photo Url*</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", {required: true})}
                  placeholder="photo URL"
                  className="input input-bordered focus:border-red-500 focus:ring-red-500 border-red-500"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label>
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", {required: true})}
                  name="email"
                  className="input input-bordered focus:border-red-500 focus:ring-red-500 border-red-500"
                />
                {errors.email && (
                  <span className="text-red-600">Email id is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label>
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordEye === false ? "password" : "text"}
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  className="input input-bordered focus:border-red-500 focus:ring-red-500 border-red-500"
                />
                {errors.password?.type === "required" && (
                  <p className="focus:border-red-500 focus:ring-red-500 border-red-500">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="focus:border-red-500 focus:ring-red-500 border-red-500">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="focus:border-red-500 focus:ring-red-500 border-red-500">
                    Password must be less than 10 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="focus:border-red-500 focus:ring-red-500 border-red-500">
                    Password must be upper case ,lower case one special
                    characters
                  </p>
                )}
                <div className="text-2xl absolute top-12 cursor-pointer right-16 mt-5">
                  {passwordEye === false ? (
                    <FaEyeSlash onClick={handlePasswordClick} />
                  ) : (
                    <FaEye onClick={handlePasswordClick} />
                  )}
                </div>
              </div>
              <div className="form-control relative">
                <label>
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={confirmPasswordEye === false ? "password" : "text"}
                  placeholder="password"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  {...register("confirmpassword")}
                  name="password"
                  className={` h-14 border pl-4 rounded-lg ${
                    errors.confirmPassword &&
                    "focus:border-red-500 focus:ring-red-500 border-red-500"
                  } `}
                  {...register("confirmPassword", {
                    required: "confirm password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <div className="text-2xl absolute cursor-pointer top-12 right-16 mt-5">
                  {confirmPasswordEye === false ? (
                    <FaEyeSlash onClick={handleConfirmPasswordClick} />
                  ) : (
                    <FaEye onClick={handleConfirmPasswordClick} />
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <div className="divider mt-2">OR</div>
              <div className=" text-center">
                <button
                  onClick={handleSocial}
                  className="btn btn-circle  btn-outline btn-primary"
                >
                  <FaGoogle className="" />
                </button>
              </div>
              <p className="text-center mb-3">
                <small>
                  Already have an account ?
                  <Link
                    className="text-xl hover:underline decoration-1 text-blue-400"
                    to="/login"
                  >
                    Login
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

export default SignUp;
