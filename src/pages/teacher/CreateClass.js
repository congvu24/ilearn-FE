import React, { useState } from "react";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
  DatePicker,
  notification,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import MdEditor from "../../component/form/MdEditor";
import ImgCrop from "antd-img-crop";
import { postCreateClass, postUploadImage } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";
import { useHistory } from "react-router";

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export default function CreateClass() {
  const history = useHistory();
  const [thumbnail, setThumbnail] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");

  const customUpload = async (type, file) => {
    try {
      const form = new FormData();
      form.append("image", file);
      const res = await postUploadImage(form);
      const { content } = res;
      if (type == "thumbnail") setThumbnail(content);
      if (type == "cover") setCover(content);
      return content;
    } catch (err) {
      handleErrorApi(err);
    }
  };

  const onFinish = async (values) => {
    try {
      if (thumbnail && cover) {
        const res = await postCreateClass({
          ...values,
          thumbnail,
          cover,
          content,
        });
        notification.success({ message: "Create class successfully!" });
        history.push("/dashboard");
      }
    } catch (err) {
      handleErrorApi(err);
    }
    console.log("Received values of form: ", values);
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="text-center text-2xl font-semibold">Create new class</h2>
      <p className="text-center mb-8 text-gray-500">
        Just create on{" "}
        <b>
          <span className="text-blue-500">i</span>Learn
        </b>{" "}
        and we setup all for you.
      </p>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          free_to_join: true,
          duration: 40,
          max_participant: 50,
        }}
      >
        <Form.Item
          name="topic"
          label="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please select category",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select category">
            <Option value="math">Math</Option>
            <Option value="physics">Physics</Option>
            <Option value="frontend">Frontend</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Max participants"
          name="max_participant"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} max={100} defaultValue={50} />
          <span className="ant-form-text"> people</span>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="free_to_join"
          label="Free to join"
          valuePropName="checked"
        >
          <Switch defaultChecked={true} />
        </Form.Item>

        <Form.Item
          name="start_time"
          rules={[{ required: true }]}
          label="Start time"
        >
          <DatePicker showTime showSecond={false} />
        </Form.Item>

        <Form.Item
          name="duration"
          rules={[{ required: true }]}
          label="Duration (minutes)"
        >
          <Slider
            marks={{
              0: "0",
              20: "20",
              40: "40",
              60: "60",
              80: "80",
              100: "100",
            }}
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true }]}
          label="Description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Thumbnail">
          <ImgCrop aspect={1}>
            <Upload
              showUploadList={false}
              action={(file) => {
                customUpload("thumbnail", file);
              }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </ImgCrop>
        </Form.Item>

        <Form.Item label="Cover">
          <Upload.Dragger
            multiple={false}
            showUploadList={false}
            name="files"
            action={(file) => {
              customUpload("cover", file);
            }}
          >
            {cover && (
              <img
                src={cover}
                className="min-w-full min-h-full flex-shrink-0 "
              />
            )}
            {!cover && (
              <>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </>
            )}
          </Upload.Dragger>
        </Form.Item>

        <Form.Item label="Content">
          <MdEditor content={content} setContent={setContent} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
