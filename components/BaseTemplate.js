import React from "react";
import Sidebar from "../components/Sidebar";

const BaseTemplate = (props) => {
  return (
    <div className="flex bg-offwhite w-full h-screen">
      <div className="w-3/12 bg-white rounded shadow-lg">
        <Sidebar />
      </div>

      <div className="flex-1 flex w-9/12 text-gray-500 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default BaseTemplate;
