import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-bold mb-5">
          <span className="uppercase text-red-600">Sorry !</span> The page is
          not found.
        </h1>
        <Link to="/">
          <button className="btn btn-md bg-primary text-white w-full hover:bg-indigo-800">
            <div className="border-2 rounded-full animate-spin border-dashed border-base-200 h-6 w-6 flex justify-center items-center ">
              <span className="text-xs text-white">S</span>
            </div>
            <FaHome /> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
