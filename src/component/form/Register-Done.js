import React from "react";
import { Form, Col, Row, Upload, Result } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function RegisterDone() {
  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <Result
        status="success"
        title={<p className="text-green-500">Register completed</p>}
        subTitle="You can now login and start your own class."
        icon={<img src="/img/register-success.jpg" className="w-80 mx-auto" />}
        extra={
          <Link to="/login/teacher">
            <button className="w-40 mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end">
              {/* <LoadingOutlined className="text-xl" /> */}
              Login now
            </button>
          </Link>
        }
      />
    </div>
  );
}
