import React from 'react';
import Sidebar from "../components/Sidebar";

const BaseTemplate = (props) => {
    return (
        <div class="flex bg-offwhite w-full h-screen">
          <div class="w-2/12 bg-white rounded shadow-lg">
            <Sidebar />
          </div>
    
          <div class="flex-1 flex w-10/12 text-gray-500 overflow-hidden">
              {props.children}
          </div>
        </div>
      );
}

export default BaseTemplate;