import { Col, Form, Row, Steps } from "antd";
import React, { useState } from "react";
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
import SmallHeader from "../component/header/SmallHeader";
import Header from "../component/header/Header";
import { Link } from "react-router-dom";

const { Step } = Steps;
export default function CreateTeacher() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <div className="p-4">
        <Link to="/">
          <h2 className="text-gray-400 font-semibold text-3xl md:mx-2">
            <span className="text-blue-500">i</span>Learn
          </h2>
        </Link>
        {/* <Header /> */}
      </div>
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

          {step == 1 && <RegisterAccount nextStep={nextStep} />}
          {step == 2 && <RegisterZoom nextStep={nextStep} />}
          {step == 3 && <RegisterProfile nextStep={nextStep} />}
          {step == 4 && <RegisterDone nextStep={nextStep} />}

          <div className="my-2">
            <Steps responsive={true}>
              <Step
                status={step >= 1 ? "finish" : "wait"}
                title="Account"
                icon={<KeyOutlined className="text-sm md:text-base" />}
              />
              <Step
                status={step >= 2 ? "finish" : "wait"}
                title="Verification"
                icon={<SolutionOutlined className="text-sm md:text-base" />}
              />
              <Step
                status={step >= 3 ? "finish" : "wait"}
                title="Profile"
                icon={<UserOutlined className="text-sm md:text-base" />}
              />
              <Step
                status={step >= 4 ? "finish" : "wait"}
                title="Done"
                icon={<SmileOutlined className="text-sm md:text-base" />}
              />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
