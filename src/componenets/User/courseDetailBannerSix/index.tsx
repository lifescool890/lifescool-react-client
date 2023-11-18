import "./style.scss";
import { Divider, Row, Typography, Image, Col } from "antd";

function index(props: any) {
    console.log("ddd",props.images);
    let imageArray = props.images
    
  return (
    <>
      <Row className="cd-b6-outer">
        <Divider>
          <Typography.Title level={3} className="cd-b3-heading type-usage">
            Reviews
          </Typography.Title>
        </Divider>
        <Row className="cd-b6-img-row">
            {imageArray?.map((item:any)=>{
                return(<>
                    <Col xs={24} sm={24} md={8} className="cd-b6-img-col">
            <Image
            className="cd-b6-review-img"
            src={`${item}`}
            />
          </Col>
            </>
                )
            })}
          
        </Row>
      </Row>
    </>
  );
}

export default index;
