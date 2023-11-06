import { Col, Row, Form, Input, Button } from "antd";
import "../../font.scss"
import "./style.scss";
import TextArea from "antd/es/input/TextArea";
import location from "../../../assets/images/map.svg";
import mapPin from "../../../assets/images/map-pin.svg";
import envolope from "../../../assets/images/envelope.svg";
import call from "../../../assets/images/phone-square.svg";

function index() {
  return (
    <Row className="fifth-banner">
      <Col className="form-col" xs={24} sm={24} md={12}>
        <Form>
          <Row>
            <Form.Item className="halfForm">
              <h2 className="form-label raleway">First Name</h2>
              <Input className="input" name="firstName" placeholder="Ex.John" />
            </Form.Item>
            <Form.Item className="halfForm">
              <h2 className="form-label raleway">Last Name</h2>
              <Input className="input" name="firstName" placeholder="Ex.Doe" />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item className="halfForm">
              <h2 className="form-label raleway ">Email Address</h2>
              <Input
                className="input"
                name="firstName"
                placeholder="Ex.Hello@Email.com"
              />
            </Form.Item>
            <Form.Item className="halfForm">
              <h2 className="form-label raleway">Subject</h2>
              <Input className="input" name="firstName" placeholder="Subject" />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item className="fullForm">
              <h2 className="form-label raleway">Message</h2>
              <TextArea
                className="form-textArea"
                rows={5}
                placeholder="You Message Here..."
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item className="fullForm">
              <Button className="sendButton" shape="round">
                <h4 className="sendMessage"> SEND MESSAGE</h4>
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
      <Col className="contact-col" xs={24} sm={24} md={12}>
        <Row>
          <h5 className="contact-us">CONTACT US</h5>
        </Row>
        <Row>
          <h1 className="get-in-touch first-heading">
            Get In Touch With Our <br />
            Professional Team
          </h1>
        </Row>
        <Row>
          <Col>
          <p className="contact-desc">
            hdjsfklshjdfkldfjkldsjfklsjdflksjdflksjdflksjdlkfjslkdfjslkdfjlskdfjklsdjflksjdf
            <br />
            jfglkjdflkgjdflkj
          </p>
          </Col>
        </Row>
        <Row>
          <Col className="address-col">
            <Row>
              <Col>
                <img src={location} alt="" />
              </Col>
              <Col>
                <h3 className="head-office raleway ">Head Office</h3>
                <p className="location-desc">
                  1216, Second Floor, HiLITE
                  <br /> Business Park, NH 66,
                  <br /> Bypass, Thondayad,
                  <br /> Kozhikode, Kerala 673014
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="address-col">
            <Row>
              <Col>
                <img src={mapPin} alt="" />
              </Col>
              <Col>
                <h3 className="head-office raleway">Secondary Office</h3>
                <p className="location-desc">
                  1216, Second Floor, HiLITE
                  <br /> Business Park, NH 66,
                  <br /> Bypass, Thondayad,
                  <br /> Kozhikode, Kerala 673014
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="address-col">
            <Row>
              <Col>
                <img src={envolope} alt="" />
              </Col>
              <Col>
                <h3 className="head-office raleway">Email Address</h3>
                <p className="location-desc">
                  1216, Second Floor, HiLITE
                  <br /> Business Park, NH 66,
                  <br /> Bypass, Thondayad,
                  <br /> Kozhikode, Kerala 673014
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="address-col">
            <Row>
              <Col>
                <img src={call} alt="" />
              </Col>
              <Col>
                <h3 className="head-office raleway">Telephone</h3>
                <p className="location-desc">
                  1216, Second Floor, HiLITE
                  <br /> Business Park, NH 66,
                  <br /> Bypass, Thondayad,
                  <br /> Kozhikode, Kerala 673014
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default index;
