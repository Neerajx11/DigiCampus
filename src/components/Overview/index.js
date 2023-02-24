import React from "react";
import { useSelector } from "react-redux";
import Group from "./Group";
import Placement from "./Placement";

const Overview = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <p className="text-xl font-semibold">Welcome, {auth.fullName}</p>
      <Group />
      <Placement />
    </div>
  );
};

export default Overview;
