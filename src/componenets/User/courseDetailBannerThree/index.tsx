import { Row, Typography } from "antd";
import "./style.scss";

function index(props:any) {
  return (
    <Row className="cd-b3-outer">
      <Row className="cd-b3-box">
        <Row className="cd-b3-heading-row">
          <Typography.Title level={3} className="cd-b3-heading type-usage">
            Course Overview
          </Typography.Title>
        </Row>
        <Typography>
          <p className="cd-b3-desc inter">
            {props.data.courseOverView}
          </p>
        </Typography>
      </Row>
    </Row>
  );
}

export default index;
