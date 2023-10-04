import NavBar from "../pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <NavBar />
      <hr />
      <div className="lg:py-24">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
