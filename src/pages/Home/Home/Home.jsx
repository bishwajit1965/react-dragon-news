import BreakingNews from "../BreakingNews/BreakingNews";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <BreakingNews />
      <NavBar />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <LeftSideNav />
        </div>
        <div className="lg:col-span-6">
          {/* <h1 className="text-xl font-bold">Dragon News Home</h1> */}
          <Outlet />
        </div>
        <div className="lg:col-span-3">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
