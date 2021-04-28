import { Col, Divider, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SmallHeader from "../component/header/SmallHeader";
import { motion, AnimatePresence } from "framer-motion";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function UserLogin() {
  const responseFacebook = (res) => {
    console.log(res);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        // initial={{ x: "-100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ bounce: 0, duration: 0.5 }}
        // exit={{ rotate: 360 }}
        className="max-w-screen min-h-screen flex flex-col "
      >
        <motion.div
          exit={{ rotate: 360 }}
          class="flex flex-wrap overflow-hidden h-full flex-1 "
        >
          <div class="hidden md:block md:w-4/6 overflow-hidden relative">
            <Link to="/">
              <div className="w-12 absolute top-0 left-10 z-10 flex items-center justify-center overflow-hidden mx-auto my-8">
                {/* <img
                src="/img/logo.png"
                className="min-w-full min-h-full flex-shrink-0"
              /> */}
              </div>
            </Link>
            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
              <img
                src="/img/login-cover.jpg"
                className="min-w-full min-h-full flex-shrink-0"
              />
            </div>
          </div>

          <div class="w-full md:w-2/6 overflow-hidden overflow-y-auto bg-gray-100">
            <SmallHeader />
            <div className="w-full h-full text-center flex items-center justify-center flex-col">
              <div>
                <Link to="/">
                  <div className="w-32 flex items-center justify-center overflow-hidden mx-auto my-8">
                    {/* <img
                    src="/img/logo.png"
                    className="min-w-full min-h-full flex-shrink-0"
                  /> */}
                  </div>
                </Link>
                <h2 className="text-blue-500 font-semibold text-4xl ">
                  Login into iLearn
                </h2>
                <p className="max-w-sm mx-auto text-gray-400 my-2 font-semibold p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero rem deleniti fuga perspiciatis, quia magni rerum
                  tenetur assumenda vitae provident!
                </p>
                <div className="max-w-sm p-4 mx-auto">
                  <FacebookLogin
                    appId="309379057451049"
                    autoLoad={false}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className="w-full p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase"
                      >
                        <i class="fab fa-facebook-f mr-4"></i> Facebook
                      </button>
                    )}
                  />

                  <button className="w-full p-3 px-4 rounded-full max-auto bg-red-500 block my-4 text-white font-semibold text-base uppercase">
                    <i class="fab fa-google mr-4"></i> Google
                  </button>
                  <Divider>
                    <p className="text-gray-300 font-normal">or</p>
                  </Divider>
                  <Link to="/login/teacher">
                    <a className="text-center block w-full text-gray-400 hover:text-blue-400">
                      Login teacher account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
