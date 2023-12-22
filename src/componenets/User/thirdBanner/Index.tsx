import { Row, Typography, Card, Col } from "antd";
import "./style.scss";
import "../../font.scss";
import commune from "../../../assets/images/commune-16x9.png";
import creatorMart from "../../../assets/images/creatormart-16x9.png";
import lifescool from "../../../assets/images/Logo Lockup (1) (1).png";
import communeBg from "../../../assets/images/Rectangle 6.png"
import creatorMartBg from "../../../assets/images/Rectangle 6 (2).png"
import lifescoolBg from "../../../assets/images/Rectangle 6 (1).png"
import learnMore from "../../../assets/images/Button.png"
import micDrop from "../../../assets/images/mic-drop-banner.jpg"
import micDropVertical from "../../../assets/images/mic-drop-vertical.jpg"
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate()
  const goTo=()=>{
    navigate("/courses")
    window.scroll(0,0)
  }
  return (
    <Row className="third-banner">
      <Row className="titleRow">
        <Typography.Title
          className="heading thirdHeading"
          level={1}
          
        >
          The Lifescool Ecosystem
        </Typography.Title>
      </Row>
      <Row className="cardRow">
        <Col sm={24} xs={24} md={8} className="courseCard">
          <div className="card-image-div">
          <img className="cardImg"src={communeBg} alt="" />
          </div>
          <a onClick={goTo}>
          <Card
              className="card"
              hoverable
              cover={<img alt="example" src={commune} />}
            >
              <Typography.Title level={4}>
              <img src={learnMore} alt="" />
              </Typography.Title>
            </Card>
            </a>
        </Col>
        <Col sm={24} xs={24} md={8} className="courseCard">
        <div className="card-image-div">
          <img className="cardImg"src={lifescoolBg} alt="" />
          </div>
          <a href="https://lifescool.learnyst.com/learn">
            <Card
              className="card"
              hoverable
              cover={<img alt="example" src={lifescool} />}
            >
              <Typography.Title level={4}>
               
                <img src={learnMore} alt="" />
              </Typography.Title>
            </Card>
          </a>
        </Col>
        <Col sm={24} xs={24} md={8} className="courseCard">
        <div className="card-image-div">
          <img className="cardImg"src={creatorMartBg} alt="" />
          </div>
          <a href="https://creatormart.lifescool.app/">
            <Card
              className="card"
              hoverable
              cover={<img alt="example" src={creatorMart} />}
            >
              <Typography.Title level={4}>
              <img src={learnMore} alt="" />
              </Typography.Title>
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
      <a href="https://micdrop.webflow.io/">
      <img className="mic-drop" alt="example"  src={micDrop}/>
      <img className="mic-drop-vertical" alt="example"  src={micDropVertical}/>
            </a>
      </Row>
    </Row>
  );
}
export default Index;
