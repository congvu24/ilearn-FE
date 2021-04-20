import { Affix, Col, Divider, Row } from "antd";
import React from "react";
import ClassCard from "../component/class/ClassCard";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

export default function Homepage() {
  return (
    <div>
      <div
        style={{ maxHeight: "60vh" }}
        className="hero w-full h-screen bg-red-500 relative"
      >
        <video autoPlay muted loop id="myVideo">
          {/* <source src="/video/login-video.mp4" type="video/mp4" /> */}
          {/* <source src="/video/landing-video.mp4" type="video/mp4" /> */}
          <source src="/video/landing-video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0"></div>
        <Header />

        <div className="z-10 relative flex flex-col items-center justify-center h-5/6 p-4">
          <h1 className="text-white my-8 mx-auto max-w-xl text-left font-semibold text-4xl md:leading-normal">
            Thousands of free classes are waiting for you to join on{" "}
            <span className="text-blue-500 z-10">i</span>Learn.
          </h1>
          <div className="flex items-center w-full max-w-xl mx-auto h-14 bg-white rounded-md justify-between">
            <input
              className="w-5/6 mx-2 h-full px-4 text-xl font-light"
              placeholder="Enter your key words"
            />
            <button className="py-2 px-4 text-gray-500 h-full">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div className="flex items-center w-full max-w-xl mx-auto my-4 flex-wrap text-left">
            <p className="text-white font-semibold">Suggested:</p>{" "}
            <p>
              <span className="text-gray-200 mx-1 font-normal">
                Javascript,
              </span>
              <span className="text-gray-200 mx-1 font-normal">English,</span>
              <span className="text-gray-200 mx-1 font-normal">Math,</span>
              <span className="text-gray-200 mx-1 font-normal">Physics,</span>
              <span className="text-gray-200 mx-1 font-normal">History,</span>
              <span className="text-gray-200 mx-1 font-normal">Chemistry</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center p-0 border-b-2 border-gray-100 w-full">
          <li className="px-4 py-4 border-b-2 border-blue-500 md:text-xl font-semibold text-blue-500">
            Lasted
          </li>
          <li className="px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
            On stream
          </li>
          <li className="px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
            In Comming
          </li>
          <li className="px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
            Finish
          </li>
        </ul>
      </div>
      <div className="container mx-auto xl:px-40 py-4 md:py-8">
        <h3 className="text-xl my-2 font-semibold mx-2 md:mx-0">
          Lasted classes
        </h3>
        <Row gutter={24}>
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </Row>
      </div>
      <Footer />
    </div>
  );
}
