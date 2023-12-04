import { Row, Typography, Table, Button } from "antd";
import { useEffect, useState } from "react";
import adminApi from "../../../constants/axios";
import CourseData from "../../../constants/interfaces";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function index() {
  const [trendData, setTrendData] = useState<Array<CourseData>>();

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await adminApi.get("/getTrending").then((response) => {
      setTrendData(response.data.data);
    });
  };
  const item = trendData?.map((item, i) => {
    return {
      key: ` ${i}`,
      trends: `Trending`,
      course: `${item.courseName}`,
    };
  });

  const columns = [
    {
      title: "Trends",
      dataIndex: "trends",
      key: "trends",
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
  ];
  const goTo = () => {
    navigate("/admin/setTrending");
  };

  return (
    <Row className="formBackground fb-outer">
      <Row style={{ width: "100%" }}>
        <Typography.Title level={1}>Trending</Typography.Title>
      </Row>
      <Row className="tr-button-row">
        <Button className="trendCreateButton" onClick={goTo}>
          Update Tending
        </Button>
      </Row>
      <Table className="treand-table" dataSource={item} columns={columns} />
    </Row>
  );
}

export default index;
