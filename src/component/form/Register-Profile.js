import React, { useState } from "react";
import { Form, Col, Row, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import handleErrorApi from "../../utils/handleErrorApi";
import ImgCrop from "antd-img-crop";
import { postUpdateProfile, postUploadImage } from "../../api/user";

export default function RegisterProfile({ nextStep }) {
  const [isLoading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(
    "http://localhost:3000/img/default-avatar.jpg"
  );

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const res = await postUpdateProfile({ ...values, avatar });
      nextStep();
    } catch (err) {
      setLoading(false);
      handleErrorApi(err);
    }
  };

  const customAction = async (file) => {
    // uploadImage(file);
    try {
      const form = new FormData();
      form.append("image", file);
      const res = await postUploadImage(form);
      const { link } = res;
      setAvatar(link);
      return link;
    } catch (err) {
      handleErrorApi(err);
    }
  };

  return (
    <div style={{ minHeight: 300 }} className="shadow p-4">
      <p className="text-xl font-semibold my-2 text-gray-700">Profile</p>
      <Form onFinish={onFinish}>
        <div className="my-8 mx-auto w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border border-dashed border-gray-300">
          <ImgCrop>
            <Upload
              showUploadList={false}
              action={customAction}
              accept="image/jpg, image/png"
            >
              {/* <img
              src="/img/default-avatar.jpg"
              className="min-w-full min-h-full flex-shrink-0"
            /> */}
              <div className="flex flex-col items-center justify-center">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Avatar</div>
              </div>
            </Upload>
          </ImgCrop>
        </div>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Full name: </p>
            <Form.Item name="nickname" rules={[{ required: true }]}>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Duong Cong Vu"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Age: </p>

            <Form.Item name="age" rules={[{ required: true }]}>
              <input
                type="number"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Enter age"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Job: </p>
            <Form.Item name="job" rules={[{ required: true }]}>
              <input
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Teacher"
              />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <p className="font-semibold text-gray-700">Address: </p>

            <Form.Item name="address" rules={[{ required: true }]}>
              <input
                type="text"
                className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500"
                placeholder="Ho Chi Minh city"
              />
            </Form.Item>
          </Col>
        </Row>
        <p className="font-semibold text-gray-700">About your self: </p>
        <Form.Item className="detail" rules={[{ required: true }]}>
          <textarea className="bg-blue-50 w-full p-3 px-4 rounded max-auto block font-semibold text-base border-l-4 border-blue-500" />
        </Form.Item>
        <Form.Item noStyle>
          <button
            type="submit"
            disabled={isLoading}
            className="w-40 mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end"
          >
            {isLoading ? <LoadingOutlined style={{ fontSize: 20 }} /> : "Save"}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
