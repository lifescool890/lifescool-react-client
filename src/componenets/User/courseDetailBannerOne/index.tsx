import { Row, Col, Typography, Form, Input, Button,Result, Spin } from "antd";
import "./style.scss"
import { useState } from "react";
import axios from "axios";

function index(props: any) {
  const [submit,setSubmit] = useState(false)
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    setLoading(true)
    const courseData =new FormData()
    values.CourseName = props.data.courseName
    console.log(values);
    for ( var key in values ) {
      courseData.append(key, values[key]);
    }
    console.log(props.data.courseName);
    axios.post("https://script.google.com/macros/s/AKfycbzJ4pbCVkwDZ00d3h6Gs8vzWC1N7Z8O2BWJGG4BhH1EqoH0PxYzPceWkJH_ZY0N0HHK/exec",courseData).then(()=>{
      setLoading(false)
      setSubmit(true)
    })
  };
  return (
    <>
      <Row className="cd-b1-outer">
        <Col className="cd-b1-text" xs={24} sm={24} md={14}>
          <h1 className="cd-b1-heading type-usage">{props.data.courseName}</h1>
          <p className="cd-b1-desc raleway">{props.data.courseDesc}</p>
          <h2 className="type-usage">
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
          </h2>
          <div className="cd-b1-price-div">
            <Typography.Title
              className="cd-b1-price type-usage"
              style={{ color: "white" }}
              level={2}
            >
              ₹{props.data.price}
            </Typography.Title>
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
       
      
            {submit == false?
          <Spin spinning={loading}>
            <Form onFinish={onFinish} name="form" className="course-form">
              <Row>
                <h4 className="course-form-label raleway">First Name</h4>
                <Form.Item className="course-halfForm" name="FirstName">
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
                <Form.Item className="course-halfForm" name="MobileNumber">
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
            :<Result
            status="success"
            title="Enquiry Successfully Submitted!"
            className="success"
          />}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default index;
