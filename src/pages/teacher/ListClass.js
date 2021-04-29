import { Table, Tag, Space } from "antd";
import React, { useEffect, useState } from "react";
import { getMyClass } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";

export default function ListClass() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Zoom ID",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Paticipants",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Duration",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Description",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Category",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Hide</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await getMyClass();
      setData(res);
    } catch (err) {
      handleErrorApi(err);
    }
  });
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
