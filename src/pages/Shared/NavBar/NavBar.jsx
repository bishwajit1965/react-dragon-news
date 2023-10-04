import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import UserPicture from "../../../assets/user.png";

const NavBar = () => {
  const { user, handleSignOut, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        console.log("User has been logged out!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mx-4">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="mx-4">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/career" className="mx-4">
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-2 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? <img src={user.photoURL} /> : <img src={UserPicture} />}
          </div>
        </label>

        {user ? (
          <>
            <Link
              onClick={handleLogOut}
              className="btn btn-md bg-red-500 text-white capitalize"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-md bg-slate-900 text-white capitalize"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
