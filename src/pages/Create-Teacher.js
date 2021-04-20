import { Col, Form, Row, Steps } from "antd";
import React from "react";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import RegisterAccount from "../component/form/Register-Account";
import RegisterZoom from "../component/form/Register-Zoom";
import RegisterProfile from "../component/form/Register-Profile";
import RegisterDone from "../component/form/Register-Done";

const { Step } = Steps;
export default function CreateTeacher() {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <div
        style={{
          backgroundImage: "url(/img/register.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full max-w-3xl mx-auto p-4 "
      >
        <h2 className="text-blue-500 font-semibold text-4xl text-center">
          Register as teacher
        </h2>
        <p className="max-w-sm mx-auto text-gray-400 my-2 font-semibold px-2 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem
          deleniti fuga perspiciatis, quia magni rerum tenetur assumenda vitae
          provident!
        </p>
        {/* <RegisterAccount /> */}
        {/* <RegisterZoom /> */}
        {/* <RegisterProfile /> */}
        <RegisterDone />
        <div className="my-2">
          <Steps responsive={true}>
            <Step status="finish" title="Account" icon={<KeyOutlined className="text-sm md:text-base" />} />
            <Step
              status="finish"
              title="Verification"
              icon={<SolutionOutlined className="text-sm md:text-base" />}
            />
            <Step status="process" title="Profile" icon={<UserOutlined className="text-sm md:text-base" />} />
            <Step status="wait" title="Done" icon={<SmileOutlined className="text-sm md:text-base" />} />
          </Steps>
        </div>
      </div>
    </div>
  );
}
