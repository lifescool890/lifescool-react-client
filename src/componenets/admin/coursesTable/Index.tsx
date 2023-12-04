import React from "react";
import { Button, Space, Table, Typography, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import adminApi from "../../../constants/axios";

interface DataType {
  id: number;
  courseName: string;
}

const Index: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            onClick={() => {
              goToEdit(record.id);
            }}
          >
            <EditOutlined />
          </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this course?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              deleteCourse(record.id);
            }}
          >
            <Button type="primary" danger ghost>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const [tableData, setTableData] = useState<DataType[]>([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const goToEdit = (id: number) => {
    navigate(`/admin/update-course/${id}/edit`);
  };
  const deleteCourse = async (id: number) => {
    const value = {
      id: id,
    };
    await adminApi.post("/deleteCourse", value).then(() => {
      setReload(!reload);
    });
  };
  useEffect(() => {
    allCourses();
  }, [reload]);
  const createCourse = () => {
    navigate("/admin/add-course");
  };
  let allCourses = async () => {
    await adminApi.get("/getAllCourses").then((response: any) => {
      let data = response.data;
      let arrayData = data.data;
      const dataSource = arrayData.map((item: any, index: number) => ({
        key: index,
        serial: index + 1,
        courseName: item.courseName,
        id: item.id,
      }));
      setTableData(dataSource);
    });
  };

  return (
    <>
      <div className="formBackground">
        <Typography.Title level={2}>Courses</Typography.Title>
        <Button
          className="createButton"
          onClick={() => {
            createCourse();
          }}
        >
          Create New Course
        </Button>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </>
  );
};

export default Index;
