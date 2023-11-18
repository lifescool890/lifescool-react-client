import { Col, Row, Typography } from "antd";
import testimg from "../../../assets/images/gradient.jpeg";
import "./style.scss";

function index(props:any) {
  return (
    <Row className="cd-b5-outer">
      <Row className="cd-b5-box">
        <Row className="cd-b5-heading-row">
          <Typography.Title level={3} className="cd-b5-heading type-usage">
          Instructor
          </Typography.Title>
        </Row>
        <Row className="cd-b5-desc-outer">
          <Col className="cd-b5-img-col" xs={24} sm={4} md={4}>
            <img className="cd-b5-img" src={`https://lifescool.s3.ap-south-1.amazonaws.com/tutor-images/${props.data.id}` }alt="" />
          </Col>
          <Col className="cd-b5-desc" xs={24} sm={20} md={20}>
            <Typography className="cd-b5-tutorName ">
              {props.data.tutorName}
            </Typography>
          <p className="cd-b5-tutor-desc raleway">
            {props.data.tutorDesc}
          </p>
          </Col>
            
        </Row>
      </Row>
    </Row>
  );
}
export default index;
