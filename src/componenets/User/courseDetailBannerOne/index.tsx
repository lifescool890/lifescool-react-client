import { Row, Col, Typography, Form, Input, Button, Result, Spin } from "antd";
import "./style.scss";
import { useState } from "react";
import location from "../../../assets/images/icons8-location-50.png"
import axios from "axios";

function index(props: any) {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true);
    const courseData = new FormData();
    values.CourseName = props.data.courseName;
    for (var key in values) {
      courseData.append(key, values[key]);
    }
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzJ4pbCVkwDZ00d3h6Gs8vzWC1N7Z8O2BWJGG4BhH1EqoH0PxYzPceWkJH_ZY0N0HHK/exec",
        courseData
      )
      .then(() => {
        setLoading(false);
        setSubmit(true);
      });
  };
  return (
    <>
      <Row className="cd-b1-outer">
        <Col className="cd-b1-text" xs={24} sm={24} md={14}>
          <h1 className="cd-b1-heading type-usage">{props.data.courseName}</h1>
          <p className="cd-b1-desc raleway">{props.data.courseDesc}</p>
            <Row>
              <Col xs={24} sm={24} md={12}>
          {props.data.upComingStartingDate==props.data.upComingEndingDate? <h2 className="inter" style={{ color: "white" }}>
            {new Date(props.data.upComingStartingDate)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
          </h2>:<h2 className="inter" style={{ color: "white" }}>
            {new Date(props.data.upComingStartingDate)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
            -{" "}
            {new Date(props.data.upComingEndingDate)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
          </h2>}
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Row>
            <Col>
            <img className="location-icon" src={location} alt="" />
            </Col>
            <Col>
            <h4 className="location inter">{props.data.location}</h4>
            </Col>
            </Row>
            </Col>
          </Row>
          <div className="cd-b1-price-div">
            <Row>
              {props.data.priceWithOutOffer == 0 ?"":
            <Typography.Title
              className="cd-b1-priceWithOutOffer type-usage"
              style={{ color: "white", marginTop:"45px" }}
              level={4}
            >
              ₹{props.data.priceWithOutOffer}
            </Typography.Title>}
            <Typography.Title
              className="cd-b1-price type-usage"
              style={{ color: "white" }}
              level={2}
            >
              ₹{props.data.price}
            </Typography.Title>
            
            </Row>
          </div>
        </Col>
        <Col className="cd-b1-side" xs={24} sm={24} md={10}>
          <Row>
            <iframe
              className="cd-b1-iframe"
              src={props.data.promoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Row>
          <Row className="cd-b1-form-Row">
            {submit == false ? (
              <Spin spinning={loading}>
                <Form onFinish={onFinish} name="form" className="course-form">
                  <Row>
                    <h4 className="course-form-label raleway">First Name</h4>
                    <Form.Item
                      className="course-halfForm"
                      name="FirstName"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input className="course-input" placeholder="Ex.John" />
                    </Form.Item>
                  </Row>
                  <Row>
                    <h4 className="course-form-label raleway">Last Name</h4>
                    <Form.Item className="course-halfForm" name="LastName">
                      <Input className="course-input" placeholder="Ex.Doe" />
                    </Form.Item>
                  </Row>
                  <Row>
                    <h4 className="course-form-label raleway">Mobile Number</h4>
                    <Form.Item
                      className="course-halfForm"
                      name="MobileNumber"
                      rules={[
                        {
                          required: true,
                          pattern: new RegExp(/^[0-9]+$/),
                          message: "Invalid mobile number",
                        },
                      ]}
                    >
                      <Input className="course-input" placeholder="+91-" />
                    </Form.Item>
                  </Row>
                  <Row>
                    <Form.Item className="fullForm">
                      <Button
                        className="sendButton"
                        htmlType="submit"
                        shape="round"
                      >
                        <h4 className="sendMessage"> Submit Enquiry</h4>
                      </Button>
                    </Form.Item>
                  </Row>
                </Form>
              </Spin>
            ) : (
              <Result
                status="success"
                title="Enquiry Successfully Submitted!"
                className="success"
              />
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default index;
