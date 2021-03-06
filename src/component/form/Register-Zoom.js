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
    <div
      style={{ minHeight: 300 }}
      className="shadow p-4 flex items-center justify-center flex-col"
    >
      <Form.Item noStyle>
        <h2 className="text-center font-semibold text-xl text-gray-700">
          Connect to your Zoom account
        </h2>
        <a
          style={{ maxWidth: 250 }}
          className="my-2"
          href="https://zoom.us/oauth/authorize?response_type=code&client_id=qa2irDSgS926Vxcagn_MuQ&redirect_uri=https://hackathon-ihelloworld.vercel.app/connect"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://marketplacecontent.zoom.us/zoom_marketplace/img/add_to_zoom.png"
            height="32"
            alt="Add to ZOOM"
          />
        </a>
        {/* <button
          type="submit"
          disabled={isLoading}
          className=" mx-auto p-3 px-4 rounded-full max-auto bg-blue-500 block my-4 text-white font-semibold text-base uppercase self-end"
        >
          {isLoading ? (
            <LoadingOutlined style={{ fontSize: 20 }} />
          ) : (
            "Connect to Zoom"
          )}
        </button> */}
      </Form.Item>
    </div>
  );
}
