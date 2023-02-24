import React from "react";
import Header from "../Dashboard/Header";
import SideNav from "../Dashboard/SideNav";

const Result = () => {
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
        <div className="h-screen mt-10">
          <iframe
            title="aktu result page"
            width="100%"
            height="100%"
            src="https://erp.aktu.ac.in/webpages/oneview/oneview.aspx"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Result;
