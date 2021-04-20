import { Affix } from "antd";
import React, { useState } from "react";

export default function Header() {
  const [isStick, setIsStick] = useState(false);

  return (
    // <Affix onChange={() => setIsStick(!isStick)}>
    <header
      style={{ zIndex: 10000000000 }}
      className={`${
        isStick ? "bg-white border-b relative" : ""
      } py-2 px-4 flex items-center z-10 relative`}
    >
      <div className="flex items-center">
        {/* <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img
                src="/img/logo.png"
                alt="logo"
                className="min-w-full min-h-full flex-shrink-0"
              />
            </div> */}
        <h2 className="text-white font-semibold text-3xl md:mx-2">
          <span className="text-blue-500">i</span>Learn
        </h2>
      </div>
      <ul className="hidden md:flex ml-auto items-center justify-center mr-8">
        <li className="mx-2 font-normal text-xl text-white">Home</li>
        <li className="mx-2 font-normal text-xl text-white">New class</li>
        <li className="mx-2 font-normal text-xl text-white">Trending</li>
        <li className="mx-2 font-normal text-xl text-white">About us</li>
      </ul>
      <div className="hidden md:flex items-center justify-center">
        <button className="px-5 py-1 text-white text-xl font-normal border border-white rounded mx-2">
          Login
        </button>
        <button className="px-5 py-1 text-white text-xl font-normal bg-blue-500 rounded mx-2">
          Register
        </button>
      </div>
      <div className="md:hidden ml-auto">
        <button className="text-white tex-xl  block">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </header>
    // </Affix>
  );
}
