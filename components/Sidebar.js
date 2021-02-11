//from https://tailwindcomponents.com/component/sidebar-1
import React from "react";
import HomeIcon from "../components/icons/HomeIcon";

const SidebarItem = (props) => {
  return (
    <li>
      <a
        href="#"
        class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline"
      >
        {props.children}
      </a>
    </li>
  );
};

const Sidebar = (props) => {
  return (
    <div>
      <ul className="flex flex-col space-y-2 text-sm items-end">
        <span class="font-semibold p-2 text-2xl">DRGZ</span>
        <SidebarItem>
          <span>Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-gray-500 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
