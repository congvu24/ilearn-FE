import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ClassCard() {
  return (
    <Col xs={24} md={12}>
      <div class="flex flex-wrap overflow-hidden rounded border-2 border-gray-100 mb-4 mx-2 md:mx-0 shadow">
        <div class="w-2/6 overflow-hidden hidden md:block">
          <div
            style={{ maxHeight: 250 }}
            className="w-full h-full flex items-center justify-center overflow-hidden relative"
          >
            <img
              src="/img/default-avatar.jpg"
              className="min-w-full min-h-full flex-shrink-0"
            />
            <div className="absolute top-2 left-2 text-white flex items-center ">
              <div className="w-2 h-2 rounded-full flex-shrink-0 bg-red-600 mr-2"></div>
              <p>Live</p>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full h-40 flex items-center justify-center overflow-hidden">
          <img
            src="/img/login-cover.jpg"
            className="min-w-full min-h-full flex-shrink-0"
          />
        </div>

        <div class="md:w-4/6 overflow-hidden p-2 md:p-4">
          <p className="font-semibold text-gray-800 text-xl md:text-2xl text-left">
            Javascript Full Course In 1 Hour
          </p>
          <p className="mb-1">
            by <span className="font-semibold text-base text-gray-600">Cong Vu</span>
          </p>
          <p className="font-semibold text-green-600">Free to join</p>
          <p>
            <span className="font-semibold text-gray-600">8PM - 9PM, Sunday 19th</span>
          </p>
          <p className="mb-2 flex flex-wrap">
            <span className="mr-2 font-semibold text-gray-600">
              #Javascript
            </span>
            <span className="mr-2 font-semibold text-gray-600">#Develop</span>
            <span className="mr-2 font-semibold text-gray-600">#Frontend</span>
            <span className="mr-2 font-semibold text-gray-600">
              #Javascript
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut
            libero tenetur esse eius officiis animi sequi, tempore dolorum quas.
          </p>
          <div>
            <Link to="/detail">
              <button className="py-1 px-3 bg-green-300 text-white rounded font-semibold ml-auto block">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
