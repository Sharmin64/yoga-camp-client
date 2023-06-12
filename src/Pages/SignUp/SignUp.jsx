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
          const saveUser = {name: data.name, email: data.email};
          fetch("http://localhost:5003/users", {
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
                navigate("/");
              }
            });
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
        <title>Yoga Summer Camp | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left object-cover w-full">
            <h1 className="text-5xl font-bold">Sign up !</h1>
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
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
                <label className="label">
                  <span className="label-text">Photo Url*</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", {required: true})}
                  placeholder="photoURL"
                  className="input input-bordered focus:border-red-500 focus:ring-red-500 border-red-500"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
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
              <div className="form-control relative mt-5">
                <label className="label">
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
                <div className="text-2xl absolute top-12 cursor-pointer right-5">
                  {passwordEye === false ? (
                    <FaEyeSlash onClick={handlePasswordClick} />
                  ) : (
                    <FaEye onClick={handlePasswordClick} />
                  )}
                </div>
              </div>
              <div className="form-control relative mt-5">
                <label className="label">
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
                  className={`w-full h-14 border pl-4 rounded-lg ${
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
                <div className="text-2xl absolute cursor-pointer top-12 right-5">
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <div className="divider">OR</div>
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
                <Link className="text-blue-400" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
