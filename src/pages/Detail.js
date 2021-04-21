import { Affix, Col, Divider, Row } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";
import ClassCard from "../component/class/ClassCard";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import gfm from "remark-gfm";

const markdown = `# Hello, *world*!`;
export default function Homepage() {
  return (
    <div>
      <div
        style={{ maxHeight: "45vh" }}
        className="hero w-full h-screen  relative overflow-hidden"
      >
        <div className="w-full h-full flex overflow-hidden items-center justify-center absolute top-0 left-0 blur-md filter">
          <img src="/img/login-cover.jpg" />
        </div>
        <Header />
        <div className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0"></div>
      </div>
      <div className="container mx-auto xl:px-40">
        <div className="transform -translate-y-1/2 md:flex items-start">
          <div className="mx-auto md:mx-unset w-60 h-60 flex items-center justify-center overflow-hidden ring-4 ring-white ">
            <img
              src="/img/login-cover.jpg"
              className="min-w-full min-h-full flex-shink-0"
            />
          </div>
          <div className="hidden md:block p-2 md:p-0 md:ml-4 text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-4xl filter invert">
              Javascript full course in 75 minutes
            </h2>
            <p className=" filter invert font-semibold text-base">
              Free to join
            </p>
            <p className=" filter invert font-semibold text-base">
              <i class="far fa-clock"></i> 7PM-8PM Saturday
            </p>
            <p className=" filter invert font-semibold text-base">
              <i class="fas fa-user-alt"></i> Duong Cong Vu
            </p>
            <p className="mt-4 font-normal text-base text-justify mx-text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              adipisci, aliquam recusandae distinctio quam nostrum saepe omnis
              et accusamus nulla?
            </p>
          </div>
        </div>
        <div className="transform -translate-y-20">
          <div className="block md:hidden p-2 md:p-0 md:ml-4 text-center md:text-left mt-4 md:mt-0 ">
            <h2 className="text-4xl text-white filter invert">
              Javascript full course in 75 minutes
            </h2>
            <p className="text-black filter invert font-semibold text-base">
              Free to join
            </p>
            <p className="text-white filter invert font-semibold text-base">
              <i class="far fa-clock"></i> 7PM-8PM Saturday
            </p>
            <p className="text-white filter invert font-semibold text-base">
              <i class="fas fa-user-alt"></i> Duong Cong Vu
            </p>
            <p className="mt-4 font-normal text-base text-justify mx-text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              adipisci, aliquam recusandae distinctio quam nostrum saepe omnis
              et accusamus nulla?
            </p>
          </div>
        </div>
        <div className="transform md:-translate-y-40 -translate-y-20 flex items-center md:justify-end justify-center">
          <button className="px-4 mr-2 py-2 uppercase text-green-500 rounded border border-green-500 font-semibold block">
            79 participants
          </button>
          <button className="px-4 mr-2 py-2 uppercase text-white rounded bg-green-400 font-semibold block">
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="container mx-auto xl:px-40 py-4 transform -translate-y-10 md:-translate-y-32">
        <article class="prose lg:prose-md max-w-none px-2">
          <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
