import React from "react";
import { Form, Col, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function RegisterAccount() {
  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <p className="text-xl font-semibold my-2 text-gray-700">
        Account information
      </p>
      <Form>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Email: </p>
            <Form.Item>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="acba@gmail.com"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Username: </p>
            <Form.Item>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="abc21"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Password: </p>

            <Form.Item>
              <input
                type="password"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter your password"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Confirm: </p>

            <Form.Item>
              <input
                type="password"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Confirm your password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item noStyle>
          <button className="w-40 mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end">
            {/* <LoadingOutlined className="text-xl" /> */}
            Next
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
