import React from "react";
import { v4 } from "uuid";

const PlacementCard = ({
  branch = [],
  name = "",
  ctc = "",
  description = "",
  img = "",
  isRev = false,
}) => {
  const branchList = branch.map((el) => (
    <span
      key={v4()}
      className="px-3 py-1 mr-2 text-sm font-semibold text-blue-400 bg-blue-100 border rounded-lg"
    >
      {el}
    </span>
  ));

  return (
    <div
      className={`flex items-center p-4 border border-gray-200 rounded-lg mb-6 shadow-md ${
        isRev && "flex-row-reverse"
      }`}
    >
      <div className="w-4/12">
        <img
          className="w-9/12 mx-auto h-[200px] object-contain"
          src={img}
          alt="google"
        />
      </div>
      <div className="w-8/12 mx-4">
        <p className="mb-6 text-3xl font-bold">{name}</p>
        <p>{description}</p>
        <p className="mt-4 font-bold text-gray-800">CTC : {ctc}</p>
        <div className="mt-6">{branchList}</div>
        <button className="px-4 py-1 mt-8 font-semibold text-white bg-blue-800 rounded-lg text-md">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PlacementCard;
