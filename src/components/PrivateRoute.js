import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Dashboard/Header";
import SideNav from "./Dashboard/SideNav";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { auth } = useSelector((state) => state);

  return auth?.email ? (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="flex flex-col w-full px-8 ml-[250px] pb-6">
        <div className="w-full">
          {/* header */}
          <Header />
        </div>
        <div className="mt-10">
          <Component {...props} />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default PrivateRoute;
