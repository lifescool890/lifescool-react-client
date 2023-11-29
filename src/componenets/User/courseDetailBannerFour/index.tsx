import { Row, Typography } from "antd";
import "./style.scss";
import "../../font.scss"

function index(props:any) {
  return (
    <Row className="cd-b4-outer">
      <Row className="cd-b4-box">
        <Row className="cd-b4-heading-row">
          <Typography.Title level={3} className="cd-b4-heading type-usage">
            Frequently Asked Questions
          </Typography.Title>
        </Row>
        {props.data.faq?.map((item:any)=>{
          return(
        <Row>
          <Typography.Title level={5} className="cd-b4-question type-usage">
            {item.question} ?
          </Typography.Title>
          <p className="cd-b4-answer raleway">
            {item.answer}
          </p>
        </Row>
          )
        })}
      </Row>
    </Row>
  );
}

export default index;
