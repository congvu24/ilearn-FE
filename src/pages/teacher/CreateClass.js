import React from "react";
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
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export default function CreateClass() {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="w-full mx-auto">
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
          is_free: true,
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          hasFeedback
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
              message: "Please select your favourite colors!",
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

        <Form.Item label="Max participants">
          <Form.Item name="input-number" noStyle>
            <InputNumber min={1} max={100} defaultValue={50} />
          </Form.Item>
          <span className="ant-form-text"> people</span>
        </Form.Item>

        <Form.Item name="is_free" label="Free to join" valuePropName="checked">
          <Switch defaultChecked={true} />
        </Form.Item>

        <Form.Item label="Start time">
          <DatePicker showTime showSecond={false} />
        </Form.Item>

        <Form.Item name="duration" label="Duration (minutes)">
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
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Thumbnail">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Cover">
          <Upload.Dragger multiple={false} name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item label="Content">
          <div
            contentEditable={true}
            style={{ minHeight: 200 }}
            className="w-full bg-gray-100 p-4 mx-auto"
          ></div>
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
