import React from "react";
import { Form, Col, Row, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export default function RegisterProfile() {
  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <p className="text-xl font-semibold my-2 text-gray-700">Profile</p>
      <Form>
        <div className="my-8 mx-auto w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border border-dashed border-gray-300">
          <Upload showUploadList={false}>
            {/* <img
              src="/img/default-avatar.jpg"
              className="min-w-full min-h-full flex-shrink-0"
            /> */}
            <div className="flex flex-col items-center justify-center">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Avatar</div>
            </div>
          </Upload>
        </div>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Full name: </p>
            <Form.Item>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Duong Cong Vu"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Age: </p>

            <Form.Item>
              <input
                type="number"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter your password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Job: </p>
            <Form.Item>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Duong Cong Vu"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Address: </p>

            <Form.Item>
              <input
                type="number"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter your password"
              />
            </Form.Item>
          </Col>
        </Row>
        <p className="font-semibold text-gray-700">About your self: </p>
        <Form.Item>
          <textarea
            className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
          />
        </Form.Item>
        <Form.Item noStyle>
          <button className="w-40 mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end">
            {/* <LoadingOutlined className="text-xl" /> */}
            Save
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
