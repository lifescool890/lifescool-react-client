import { Col, Row } from "antd";
import "./style.scss";
import tick from "../../../assets/images/Tick Square 1.png";

function index(props:any) {
  
  return (
    <Row className="cd-b2-outer">
      <Row className="cd-b2-box">
        <Row className="cd-b2-heading-row">
          <h2 className="cd-b2-heading">
            What you will get out of this course?
          </h2>
        </Row>
        <Row className="cd-b2-point-row">
          {props.data.coursePoints?.map((item:any)=>{
          return(
          <Col className="cd-b2-point-col" xs={24} sm={12} md={12}>
            <Row>
              <Col xs={2}>
              <img className="cd-b2-img" src={tick} alt="" />
              </Col>
              <Col xs={22}>
              <p className="cd-b2-point">{item.value}</p>
              </Col>
            </Row>
          </Col>)
          })}
        </Row>
      </Row>
    </Row>
  );
}

export default index;
