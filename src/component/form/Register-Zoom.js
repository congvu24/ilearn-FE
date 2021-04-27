import React, { useState } from "react";
import { Form, Col, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import handleErrorApi from "../../utils/handleErrorApi";

export default function RegisterZoom({ nextStep }) {
  const [isLoading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      nextStep();
    } catch (err) {
      setLoading(false);
      handleErrorApi(err);
    }
  };

  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <p className="text-xl font-semibold my-2 text-gray-700">
        Zoom information
      </p>
      <Form onFinish={onFinish}>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Zoom's email: </p>
            <Form.Item name="zoom" rules={[{ required: true }]}>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="acba@gmail.com"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Zoom's password: </p>

            <Form.Item name="password" rules={[{ required: true }]}>
              <input
                type="password"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter your password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item noStyle>
          <button
            type="submit"
            disabled={isLoading}
            className="w-40 mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end"
          >
            {isLoading ? (
              <LoadingOutlined style={{ fontSize: 20 }} />
            ) : (
              "Connect"
            )}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
