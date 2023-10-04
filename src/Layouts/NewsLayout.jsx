import Header from "../pages/Shared/Header/Header";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import React from "react";

const NewsLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default NewsLayout;
