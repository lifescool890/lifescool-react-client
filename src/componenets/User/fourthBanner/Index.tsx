import { Row, Typography, Card, Col } from "antd";
import "../../font.scss";
import "./style.scss";
import { useEffect, useState } from "react";
import learnMore from "../../../assets/images/Button.png";
import adminApi from "../../../constants/axios";
import { useNavigate } from "react-router-dom";

function Index() {
  const [trend, setTrend] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getTrend();
  }, []);

  const getTrend = () => {
    adminApi.get("/getTrending").then((response) => {
      setTrend(response.data.data);
    });
  };

  const goTo = (id: any) => {
    navigate(`/course-details/${id}`);
  };
console.log(trend);

  return (
    <Row className="backgroundRow">
      <Row className="titleRow">
        {trend[0]?
        <Typography.Title className="heading" level={1}>
          Trending Courses
        </Typography.Title>
        :""
        }
      </Row>
      {/* <Row className="switchRow">
        <Segmented
          className="switch"
          size="large"
          options={["Online", "Offline"]}
        />
      </Row> */}
      <Row className="trendingRow">
        {trend.map((item: any) => (
          <Col className="trendCardCol" xs={24} sm={24} md={8}>
            <Card
              className="trendCard"
              hoverable
              bodyStyle={{ padding: "0" }}
              onClick={() => goTo(item.id)}
            >
              <img
                className="card-img"
                alt=""
                src={`https://lifescool.s3.ap-south-1.amazonaws.com/cover-images/${item.id}`}
              />
              <div className="card-desc-div">
                <Col className="trendCardHeadRow">
                  <h2 className="card-head raleway">{item.courseName}</h2>
                </Col>
                <p className="card-desc raleway">{item.courseDesc}</p>
                <Typography.Title level={4}>
                  <img src={learnMore} alt="" />
                </Typography.Title>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
}
export default Index;
