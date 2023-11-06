import "./../../font.scss";
import "./style.scss";
import { Col, Row, Typography } from "antd";
import playStore from "../../../assets/images/google-play-badge.png"
import appStore from "../../../assets/images/256x256.png"

function Index() {
  return (
    <>
      <Row className="outer-row">
        <Col sm={24} md={12}>
          
        </Col>
        <Col className="second-column" sm={24} md={12}>
          <div>
            <Typography.Title
              level={1}
              className="heading" 
              style={{
                margin: 0,
                marginLeft: "auto",
                fontSize: "90px",
                color: "white",
              }}
            >
              Hello
            </Typography.Title>
            <Typography.Title
              level={2}
              className="second"
              style={{ margin: 0, marginLeft: "auto", color: "white" }}
            >
              Creative Learning
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{ margin: 0, marginLeft: "auto", color: "white" }}
            >
              Explore your creativity with creators led , community driven,
              creative upskilling classes
            </Typography.Title>

            <br />
            <a href="https://apps.apple.com/in/app/lifescool-creative-learning/id1598174363"><img className="availableOn" src={appStore} alt="Available On App Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.lifeplug.lifescool&hl=en_IN&gl=US"><img className="availableOn" src={playStore} alt="Get it on play store" /></a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Index;
