import React from "react";
import Sidebar from "../components/Sidebar";

const BaseTemplate = (props) => {
  return (
    <div class="flex bg-offwhite w-full h-screen">
      <div class="w-3/12 bg-gray rounded">
        <Sidebar />
      </div>

      <div class="flex-1 flex w-9/12 text-gray-500 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default BaseTemplate;
