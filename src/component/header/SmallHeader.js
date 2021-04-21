import { Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../menu/DropdownMenu";

export default function SmallHeader() {
  return (
    <div className="flex items-center p-2">
      <div>
        <Link to="/">
          <h2 className="text-gray-400 font-semibold text-3xl md:mx-2">
            <span className="text-blue-500">i</span>Learn
          </h2>
        </Link>
      </div>
      <div className="ml-auto">
        <Dropdown
          overlay={DropdownMenu}
          trigger={["click"]}
          placement="bottomLeft"
          
        >
          <button className="text-xl block text-gray-600">
            <i class="fas fa-bars"></i>
          </button>
        </Dropdown>
      </div>
    </div>
  );
}
