import { Affix, Col, Divider, Row } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClassCard from "../component/class/ClassCard";
import Footer from "../component/footer/Footer";
import HomeSearch from "../component/form/Home-Search";
import Header from "../component/header/Header";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

export default function Homepage() {
  const [isScroll, setScroll] = useState(false);
  const handleScroll = (e) => {
    setScroll(true);
    if (window.scrollY > 5 && isScroll == false) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0.25);
    } else {
      document.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        key="home-hero"
        // style={{ maxHeight: "100vh" }}
        initial="not-scroll"
        animate={isScroll ? "scroll" : "not-scroll"}
        variants={{
          "not-scroll": {
            maxHeight: "100vh",
          },
          scroll: {
            maxHeight: "60vh",
          },
        }}
        transition={{ duration: 0.25, ease: "linear", bounce: 0 }}
        className="hero w-full h-screen bg-red-500 relative"
      >
        <video autoPlay muted loop id="myVideo">
          {/* <source src="/video/login-video.mp4" type="video/mp4" /> */}
          {/* <source src="/video/landing-video.mp4" type="video/mp4" /> */}
          <source src="/video/landing-video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0"></div>
        <Header />
        <motion.div
          initial="show"
          animate={isScroll ? "hide" : "show"}
          variants={{
            show: {
              opacity: 1,
              // visibility: "visible",
            },
            hide: {
              opacity: 0,
              // visibility: "hidden",
            },
          }}
          transition={{ duration: 0.25 }}
          style={{ top: "50%" }}
          className="absolute inset-x-1/2 max-w-xl w-full mx-auto transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* <ReactTypingEffect
            className="w-full"
            text={"Wellcome to i-Learn !"}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1 className="text-4xl text-white uppercase font-semibold">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </h1>
              );
            }}
          /> */}
          <h1 className="text-5xl text-white uppercase font-semibold w-full text-center mb-4">
            Wellcome to i-learn!
          </h1>
          <p className="text-base text-white uppercase text-center">
            Schedule an online room, reach students across the globe, and spread
            your knowledge.
          </p>
        </motion.div>
        <motion.div
          initial="show"
          animate={isScroll ? "hide" : "show"}
          variants={{
            show: {
              opacity: 1,
              // visibility: "visible",
            },
            hide: {
              opacity: 0,
              // visibility: "hidden",
            },
          }}
          transition={{ duration: 0.25 }}
        >
          <button className="scroll-down-arrow absolute bottom-40 inset-x-1/2 -translate-x-1/2 transform">
            <i class="fas fa-angle-double-down text-4xl text-white"></i>
          </button>
        </motion.div>

        <motion.div
          initial="show"
          animate={isScroll ? "hide" : "show"}
          variants={{
            show: {
              opacity: 0,
              // visibility: "visible",
            },
            hide: {
              opacity: 1,
              // visibility: "hidden",
            },
          }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="z-10 relative flex flex-col items-center justify-center
          h-5/6 p-4"
        >
          <h1 className="text-white my-8 mx-auto max-w-xl text-left font-semibold text-2xl md:text-4xl md:leading-normal">
            Thousands of free classes are waiting for you to join on{" "}
            <span className="text-blue-500 z-10">i</span>Learn.
          </h1>
          <HomeSearch />
          <div className="flex items-center w-full max-w-xl mx-auto my-4 flex-wrap text-left">
            <p className="text-white font-semibold">Suggested:</p>{" "}
            <p className="flex flex-wrap">
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
        </motion.div>
      </motion.div>

      <motion.div
        initial="show"
        animate={isScroll ? "hide" : "show"}
        variants={{
          show: {
            opacity: 0,
            visibility: "hidden",
          },
          hide: {
            opacity: 1,
            visibility: "visible",
          },
        }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="flex items-center justify-center"
      >
        <ul className="flex items-center justify-center p-0 border-b-2 border-gray-100 w-full">
          <Link to="/">
            <li className="hover:text-blue-500 px-4 py-4 border-b-2 border-blue-500 md:text-xl font-semibold text-blue-500">
              Lasted
            </li>
          </Link>
          <Link to="/live">
            <li className="hover:text-blue-500 px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
              On stream
            </li>
          </Link>
          <Link to="/comming">
            <li className="hover:text-blue-500 px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
              In Comming
            </li>
          </Link>
          <Link to="/finish">
            <li className="hover:text-blue-500 px-4 py-4 border-b-2 border-transparent md:text-xl font-semibold text-gray-600">
              Finish
            </li>
          </Link>
        </ul>
      </motion.div>

      <motion.div
        initial="show"
        animate={isScroll ? "hide" : "show"}
        variants={{
          show: {
            opacity: 0,
            visibility: "hidden",
          },
          hide: {
            opacity: 1,
            visibility: "visible",
          },
        }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="container mx-auto xl:px-40 py-4 md:py-8"
      >
        <h3 className="text-xl my-2 font-semibold mx-2 md:mx-0">
          Lasted classes
        </h3>
        <Row>
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </Row>
      </motion.div>
      <Footer />
    </div>
  );
}
