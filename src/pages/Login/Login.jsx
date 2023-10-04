import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../utility/useHelpers";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const {
    user,
    loading,
    auth,
    handleGoogleSignIn,
    handleGitHubSignIn,
    handleEmailPasswordSignIn,
    handleSignOut,
  } = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  // Redirect to desired route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  const handleLogInGitHub = () => {
    handleGitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");

    handleEmailPasswordSignIn(auth, email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        if (user.emailVerified) {
          setSuccess("User log in is successful!");
          hideSuccessElements();
        } else {
          alert("Please verify your email address.");
        }
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        hideErrorElements();
      });
  };

  const handleResetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      alert("Email field is empty!");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      alert("Please write a valid email address!");
      return;
    } else {
      sendPasswordResetEmail(auth, email)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess("Password reset email is sent!");
          hideSuccessElements();
        })
        .catch((error) => {
          setError("Something went wrong! Email not sent!", error);
          hideErrorElements();
        });
    }
  };

  return (
    <div className="lg:w-3/12 md:w-1/2 mx-auto items-center">
      <Helmet title="React-dragon-news || Login" />
      {loading && <p className="text-center">Loading...</p>}
      <div className="flex justify-center border p-6 bg-base-200 rounded-md shadow-xl min-w-max">
        <div className="lg:space-y-4 space-y-2 w-full">
          <h1 className="text-3xl font-bold text-indigo-800 w-full">
            Please Login
          </h1>
          <form onSubmit={handleLogIn} className="space-y-4">
            <input
              type="email"
              name="email"
              ref={emailRef}
              id="email"
              placeholder="Email..."
              className="input input-bordered input-sm w-full"
            />
            <div className="password-container relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password..."
                className="input input-bordered input-sm w-full"
                required
              />
              <span
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="">
              {error && (
                <p className="text-xs text-red-500" id="error-message">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-sm text-green-500" id="success-message">
                  {success}
                </p>
              )}
            </div>
            <div className="">
              <button className="btn btn-sm w-full btn-primary">Login</button>
            </div>
          </form>
          <div className="">
            <p className="text-xs text-indigo-800">
              <Link
                onClick={handleResetPassword}
                className="hover:underline ml-0"
              >
                Password Forgotten ? Reset password
              </Link>
            </p>
          </div>
          <div className="">
            <p className="text-xs text-indigo-800">
              <Link to="/register" className="hover:underline ml-0">
                New to this site ? Register here
              </Link>
            </p>
          </div>
          <div className="">
            {!user ? <div className="divider">OR</div> : ""}
          </div>
          <div className="">
            {!user ? (
              <p className="text-xs text-center">Login with Google or GitHub</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between lg:mt-10 mt-4">
            {user ? (
              <>
                <div className="flex mx-auto">
                  <button className="btn btn-circle btn-outline p-1 w-14 h-14">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-13 h-13 rounded-full shadow-lg"
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleLoginGoogle}
                  className="btn btn-circle btn-outline btn-sm shadow-lg"
                >
                  <FaGoogle />
                </button>
                <button
                  onClick={handleLogInGitHub}
                  className="btn  btn-circle btn-outline btn-sm shadow-lg"
                >
                  <FaGithub />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
