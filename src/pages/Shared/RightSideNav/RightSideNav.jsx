import "./RightSideNav.css";

import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { AuthContext } from "../../../providers/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import classImage from "../../../assets/qZone2.png";
import playGroundImage from "../../../assets/qZone3.png";
import swimmingImage from "../../../assets/qZone1.png";
import { useContext } from "react";

const RightSideNav = () => {
  const { user, loading, auth, handleGoogleSignIn, handleGitHubSignIn } =
    useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubLogin = () => {
    handleGitHubSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <SectionTitle title="Login with" />

      <div className="my-2 space-y-2">
        <button
          onClick={handleSignInWithGoogle}
          className="btn btn-outline rounded-b-none btn-sm w-full btn-primary capitalize"
        >
          <FaGoogle /> login with google
        </button>
        <button
          onClick={handleGitHubLogin}
          className="btn btn-outline btn-sm w-full rounded-t-none btn-secondary capitalize"
        >
          <FaGithub /> login with GitHub
        </button>
      </div>
      <div className="my-4 space-y-2">
        <div className="join join-vertical w-full">
          <button className="btn join-item flex justify-start bg-white h-16 capitalize">
            <div className="w-10 h-10 rounded-full p-2 bg-slate-200 flex justify-center items-center flex-start shadow-sm">
              <FaFacebookF className="text-xl text-indigo-600" />
            </div>
            Facebook
          </button>
          <button className="btn join-item flex justify-start bg-white h-16 capitalize">
            <div className="w-10 h-10 rounded-full p-2 bg-slate-200 flex justify-center items-center flex-start shadow-sm">
              <FaTwitter className="text-xl text-indigo-600" />
            </div>{" "}
            Twitter
          </button>
          <button className="btn join-item flex justify-start bg-white h-16 capitalize">
            <div className="w-10 h-10 rounded-full p-2 bg-slate-200 flex justify-center items-center flex-start shadow-sm">
              <FaInstagram className="text-xl text-amber-600" />
            </div>
            Instagram
          </button>
        </div>
      </div>

      <div className="my-4 space-y-2 bg-slate-200 p-2 rounded-md">
        <SectionTitle title="Q-Zone" />
        <div className="space-y-4">
          <img src={swimmingImage} alt="" />
          <img src={classImage} alt="" />
          <img src={playGroundImage} alt="" />
        </div>
      </div>
      <div className="right-side-nav my-4 space-y-4  py-12 px-8 rounded-md text-white shadow-lg">
        <h1 className="text-xl font-bold my-2">Create an Amazing Newspaper</h1>
        <p className="text-xs">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className="text-center ">
          <button className="btn bg-red-600 text-white btn-large mt-6 hover:text-black border-none">
            {" "}
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
