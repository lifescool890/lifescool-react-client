import { Row, Typography, Segmented, Card, Col } from "antd";
import "../../font.scss";
import "./style.scss";
import { useState } from "react";
import trend1 from "../../../assets/images/trend1.png" 
import trend2 from "../../../assets/images/trend2.png" 
import trend3 from "../../../assets/images/trend3.png" 
import trend4 from "../../../assets/images/trend4.png" 
import trend5 from "../../../assets/images/trend5.png" 
import trend6 from "../../../assets/images/trend6.png" 
import learnMore from "../../../assets/images/Button.png"
const online = [trend1, trend2, trend3, trend4, trend5 ];
const offline = [trend1, trend2, trend3, trend4, trend5,trend6 ];

function Index() {
  const[trend,setTrend] = useState(false)
  const trending =trend?online:offline
  return (
    <Row className="backgroundRow">
      <Row className="titleRow">
        <Typography.Title className="heading" level={1}>
          Trending Courses
        </Typography.Title>
      </Row>
      <Row className="switchRow">
        <Segmented
          className="switch"
          size="large"
          options={["Online", "Offline"]}
          onChange={()=>{
            setTrend(!trend)}}
        />
      </Row>
      <Row className="trendingRow">
        {trending.map((item,index) => (
          
          <Col className="trendCardCol" xs={24} sm={24}md={8}>
            <Card
              className="trendCard"
              hoverable
              bodyStyle={{padding: "0"}}
            >
              <img
                className="card-img"
                  alt=""
                  src={item}
                />
                <div className="card-desc-div">
              <h2>Mic Drop</h2>

              <p>Monthly kids' program fosters 21st-century skills and public speaking confidence.</p>
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
