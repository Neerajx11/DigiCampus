import React from "react";

import Header from "./Header";
import PlacementCardList from "./PlacementCardList";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
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
          <PlacementCardList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
