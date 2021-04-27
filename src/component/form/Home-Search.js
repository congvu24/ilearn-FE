import React from "react";
import { Link } from "react-router-dom";

export default function HomeSearch() {
  return (
    <div className="w-full max-w-xl mx-auto relative ">
      <div className="z-10 relative flex items-center w-full max-w-xl  bg-white rounded-md justify-between shadow-sm">
        <input
          className="w-5/6 mx-2 h-full py-3 px-4 text-xl font-light"
          placeholder="Enter your key words"
        />
        <button className="py-2 px-4 text-gray-500 h-full">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div className="z-0 w-full bg-white h-40 absolute top-0 left-0 rounded-md pt-16 px-2">
        <ul>
          <Link to="/detail/asd">
            <li className="p-2 hover:bg-gray-100">
              <p className="text-xl">
                Javascript full course -
                <span className="text-base"> by cong vu</span>
              </p>
              <p>8AM sunday</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
