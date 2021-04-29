import { Table, Tag, Space, notification } from "antd";
import React, { useEffect, useState } from "react";
import { delCreateClass, getMyClass } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";

export default function ListClass() {
  const columns = [
    {
      title: "Name",
      dataIndex: "Topic",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Paticipants",
      dataIndex: "MaxParticipant",
      key: "pati",
    },
    {
      title: "Duration(mins)",
      dataIndex: "Duration",
      key: "time",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "description",
    },
    // {
    //   title: "Category",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (tags) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            href={record.MeetingStartUrl}
            target="_blank"
            className="text-blue-500"
          >
            Start
          </a>
          <a
            onClick={() => {
              handleDelete(record.ClassId);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const res = await delCreateClass(id);
      notification.success({ message: "Successfully!" });
      getData();
    } catch (err) {
      handleErrorApi(err);
    }
  };
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await getMyClass();
      setData(res.content);
    } catch (err) {
      handleErrorApi(err);
    }
  };
  useEffect(async () => {
    getData();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
