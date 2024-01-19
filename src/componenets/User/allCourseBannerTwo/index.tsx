import { Row, Typography, Col, Segmented } from "antd";
import "./style.scss";
import { userApi } from "../../../constants/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import locationGrey from "../../../assets/images/icons8-location-50-grey.png"

function index() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cityPointer, setCityPointer] = useState(true)
  const [reload, setReload] = useState(false);
  useEffect(() => {
    getData();
  }, [cityPointer]);

  const getData = () => {
    userApi.get("/getAllCourses").then((response) => {
      const data = response.data.data
      const location = cityPointer == true ? "Kozhikode" : "Kochi"

      const result = data.filter((item: any) => {
        return item.Disable == false && item.location == location
      })

      setData(result);
      setReload(!reload)
    });
  };
  const changeCity = () => {
    setCityPointer(!cityPointer)
  }

  const goTo = (id: number) => {
    navigate(`/course-details/${id}`);
  };

  return (
    <Row className="ac-b2-outer">
      <Typography.Title className="ac-b2-title">Courses</Typography.Title>
      <Row className="ac-b2-segment-row">

        <Segmented className="ac-b2-segment" onChange={changeCity} options={[{ label: 'Kozhikode', value: "Kozhikode" }, { label: 'Kochi', value: 'Kochi' }]} />
      </Row>
      {data?.map((item: any) => {
        return (
          <>
            <Row className="ac-b2-row" onClick={() => goTo(item.id)} key={item.id}>
              <Col className="ac-b2-img-col" md={5}>
                <img
                  className="ac-b2-img"
                  src={`https://lifescool.s3.ap-south-1.amazonaws.com/cover-images/${item.id}`}
                  alt=""
                />
              </Col>
              <Col className="ac-b2-desc-col" md={17}>
                <Typography.Title
                  level={4}
                  className="ac-b2-desc-title heading"
                  style={{ marginBottom: "2.5px" }}
                >
                  {item.courseName}
                </Typography.Title>
                <Typography>
                  <Row>
                    <img className="location-grey" src={locationGrey} alt="" />
                    <p className="ac-b2-location" style={{ marginBottom: "2.5px" }}>{item.location}</p>
                  </Row>
                </Typography>
                <Typography className="ac-b2-desc raleway">
                  {item.courseDesc}
                </Typography>
                <Row className="ac-b2-price-row"></Row>
              </Col>
              <Col md={2} className="ac-b2-price-col">
                <Typography.Title level={4} className="ac-b2-price heading">
                  ₹{item.price}
                </Typography.Title>
              </Col>
            </Row>
            <div className="ac-b2-divider" />
          </>
        );
      })}
    </Row>
  );
}

export default index;
