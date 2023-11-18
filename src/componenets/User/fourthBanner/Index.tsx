import { Row, Typography, Card, Col } from "antd";
import "../../font.scss";
import "./style.scss";
import { useEffect, useState } from "react";
import learnMore from "../../../assets/images/Button.png";
import adminApi from "../../../constants/axios";


function Index() {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    getTrend();
  }, []);

  const getTrend = () => {
    adminApi.get("/getTrending").then((response) => {
      console.log("trend", response);
      setTrend(response.data.data);
    });
  };
  console.log(trend);

  return (
    <Row className="backgroundRow">
      <Row className="titleRow">
        <Typography.Title className="heading" level={1}>
          Trending Courses
        </Typography.Title>
      </Row>
      {/* <Row className="switchRow">
        <Segmented
          className="switch"
          size="large"
          options={["Online", "Offline"]}
        />
      </Row> */}
      <Row className="trendingRow">
        {trend.map((item:any) => (
          <Col className="trendCardCol" xs={24} sm={24} md={8}>
            <Card className="trendCard" hoverable bodyStyle={{ padding: "0" }}>
              <img className="card-img" alt="" src={`https://lifescool.s3.ap-south-1.amazonaws.com/cover-images/${item.id}`} />
              <div className="card-desc-div">
                <h2 className="raleway">{item.courseName}</h2>

                <p className="card-desc raleway">
                  {item.courseDesc}
                </p>
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
