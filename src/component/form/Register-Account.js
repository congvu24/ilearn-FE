import React, { useState } from "react";
import { Form, Col, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import handleErrorApi from "../../utils/handleErrorApi";
import { postRegister } from "../../api/user";
import cookie from "js-cookie";


export default function RegisterAccount({ nextStep }) {
  const [isLoading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await postRegister(values);
      console.log(res);
      const { token } = res;
      cookie.set("userToken", token, { expires: 1 });

      // console.log(values);
      nextStep();
    } catch (err) {
      setLoading(false);
      handleErrorApi(err);
    }
  };

  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <p className="text-xl font-semibold my-2 text-gray-700">
        Account information
      </p>
      <Form onFinish={onFinish}>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Email: </p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="acba@gmail.com"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Username: </p>
            <Form.Item
              name="nickname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
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

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <input
                type="password"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter your password"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Confirm: </p>

            <Form.Item
              name="passwordTwo"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <input
                type="password"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Confirm your password"
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
            {isLoading ? <LoadingOutlined style={{ fontSize: 20 }} /> : "Next"}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
