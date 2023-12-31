import { Navigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <h1 className="text-5xl font-bold">Loading...</h1>;
  } else if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
