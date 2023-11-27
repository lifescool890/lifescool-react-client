import { Col, Row, Form, Input, Button ,Result,Spin} from "antd";
import "../../font.scss"
import "./style.scss";
import TextArea from "antd/es/input/TextArea";
import location from "../../../assets/images/map.svg";
import mapPin from "../../../assets/images/map-pin.svg";
import envolope from "../../../assets/images/envelope.svg";
import call from "../../../assets/images/phone-square.svg";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

function index() {
  const [submit,setSubmit] = useState(false)
  const [loading, setLoading] = useState(false);
  const [form] = useForm();
  const onSubmit=(values:any)=>{
    setLoading(true)
    const formData =new FormData()
    console.log(formData);
    for ( var key in values ) {
      formData.append(key, values[key]);
  }
    axios.post("https://script.google.com/macros/s/AKfycbyHhdykf9B377LooHF2dbsnf0lTSfiqzEIcK8LfsZAVC7xvcDDc-5bMvFOcOyeGJKmF/exec",formData).then(()=>{
      setLoading(false)
      setSubmit(true)
    })
  }
  return (
    <Row className="fifth-banner">
      <Col className="form-col" xs={24} sm={24} md={12}>
        {submit == false?
        <Spin spinning={loading}>
        <Form
        form={form}
        onFinish={onSubmit}
        name="form"
        >
          <Row>
            <Col xs={24} sm={24} md={12}>
            <h2 className="form-label raleway">First Name</h2>
            <Form.Item className="halfForm" name="FirstName"
            rules={[
              {
                required: true,
              },
            ]}
            >
              <Input className="input" placeholder="Ex.John" />
            </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h2 className="form-label raleway">Last Name</h2>
            <Form.Item className="halfForm" name="LastName"
            rules={[
              {
                required: true,
              },
            ]}
            >
              <Input className="input"  placeholder="Ex.Doe" />
            </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={12}>
              <h2 className="form-label raleway ">Email Address</h2>
            <Form.Item className="halfForm" name="EmailAddress"
            rules={[
              {
                required: true,
                pattern: new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
                message:
                    'Enter a valid email address!',
            },
            ]}
            >
              <Input
                className="input"
                placeholder="Ex.Hello@Email.com"
              />
            </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h2 className="form-label raleway">Subject</h2>
            <Form.Item className="halfForm" name="Subject"
            rules={[
              {
                required: true,
              },
            ]}
            >
              <Input className="input"  placeholder="Subject" />
            </Form.Item>
            </Col>
          </Row>
          <Row>
              <h2 className="form-label raleway">Message</h2>
            <Form.Item className="fullForm" name="Message"
            >
              <TextArea
                className="form-textArea"
                rows={5}
                placeholder="You Message Here..."
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item className="fullForm">
              <Button className="sendButton" htmlType="submit"shape="round">
                <h4 className="sendMessage"> SEND MESSAGE</h4>
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
          Feel free to reach out to our dedicated team of experts for<br/> any assistance or inquiries you may have.
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
                  lifescool.app@gmail.com
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
                  +91 945 945 2255
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
