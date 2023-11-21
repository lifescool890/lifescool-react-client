import { Row, Col,Typography } from "antd";
import "./style.scss";

function index(props: any) {
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
              <Typography.Title className="cd-b1-price type-usage" style={{color:"white"}} level={2}>₹{props.data.price}/-</Typography.Title>
          </div>
        </Col>
        <Col className="cd-b1-side" xs={24} sm={24} md={10}>
          <iframe
            className="cd-b1-iframe"
            src={props.data.promoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </>
  );
}

export default index;
