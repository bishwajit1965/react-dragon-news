import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { auth, loading } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const acceptedTerms = form.terms.checked;
    console.log(name, email, password, acceptedTerms);

    setError("");
    setSuccess("");

    if (password.trim() === "") {
      setError("Password field is empty");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!acceptedTerms) {
      setError("Accept terms and conditions");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one small letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one digit.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess("Registration is successful!");

          // Update profile
          updateProfile(user, {
            displayName: name,
            photoURL: "https://i.ibb.co/MgsDqCZ/FB-IMG-1678691214526.jpg",
          })
            .then((result) => {
              setSuccess("Profile updated successfully!");
            })
            .catch((error) => [setError(error)]);

          // Email verification
          sendEmailVerification(user)
            .then((result) => {
              console.log(result.user);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }
  };
  return (
    <div className="lg:w-3/12 md:w-1/2 mx-auto items-center">
      <Helmet title="WD-8-firebase-auth || Register" />
      {loading && <p className="text-center">Loading...</p>}
      <div className="flex justify-enter border p-6 bg-base-200 rounded-md shadow-xl">
        <div className="lg:space-y-4 space-y-2 w-full">
          <h1 className="text-3xl font-bold text-indigo-800">
            Please Register
          </h1>
          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name to update profile..."
              className="input input-bordered input-sm w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
              className="input input-bordered input-sm w-full"
              required
            />
            <div className="password-container relative">
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
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="bg-indigo-500"
              />
              <label htmlFor="terms" className="text-xs">
                Accept terms & conditions
                <Link
                  to="/terms-conditions"
                  className="text-indigo-600 hover:underline ml-0"
                >
                  {" "}
                  View Terms
                </Link>
              </label>
            </div>
            <div className="">
              <p className="text-xs p-0">
                <Link to="/login" className="hover:underline ml-0">
                  Already registered ?
                  <span className="text-indigo-800"> Login</span>
                </Link>
              </p>
            </div>

            <div className="">
              {error && <p className="text-xs text-red-500">{error}</p>}
              {success && <p className="text-sm text-green-500">{success}</p>}
            </div>
            <div className="">
              <button className="btn btn-sm w-full btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
