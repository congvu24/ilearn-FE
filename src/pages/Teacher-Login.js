import { Col, Divider, Form, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SmallHeader from "../component/header/SmallHeader";

export default function TeacherLogin() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col ">
      <div class="flex flex-wrap overflow-hidden h-full flex-1">
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
              src="/img/login-teacher-cover.jpg"
              className="min-w-full min-h-full flex-shrink-0"
            />
          </div>
        </div>

        <div class="w-full md:w-2/6 overflow-hidden bg-gray-100">
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
                Login as teacher
              </h2>
              <p className="max-w-sm mx-auto text-gray-400 my-2 font-semibold px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                rem deleniti fuga perspiciatis, quia magni rerum tenetur
                assumenda vitae provident!
              </p>
              <div className="max-w-sm p-4 mx-auto">
                <Form>
                  <Form.Item>
                    <input
                      className="w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                      placeholder="EMAIL"
                    />
                  </Form.Item>
                  <Form.Item>
                    <input
                      type="password"
                      className="w-full p-3 px-4 rounded max-auto block  font-semibold text-base border-l-4 border-blue-500"
                      placeholder="PASSWORD"
                    />
                  </Form.Item>
                  <Form.Item>
                    <button className="w-full p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase">
                      Login
                    </button>
                  </Form.Item>
                </Form>
                <Link to="/register">
                  <a className="text-center block w-full text-gray-400 hover:text-blue-400">
                    Haven't create account? Join now.
                  </a>
                </Link>
                <Divider>
                  <p className="text-gray-300 font-normal">or</p>
                </Divider>
                <Link to="/login">
                  <a className="text-center block w-full text-gray-400 hover:text-blue-400">
                    Login student account
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
