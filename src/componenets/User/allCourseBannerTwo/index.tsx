import { Row, Typography, Col } from "antd";
import testImg from "../../../assets/images/trend1.png";
import "./style.scss";
import { userApi } from "../../../constants/axios";
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";


function index() {
    const navigate =useNavigate()
    const [data,setData] = useState([])

    useEffect(() => {
     getData()
    }, [])
    
    const getData=()=>{
        userApi.get("/getAllCourses").then((response)=>{
            setData(response.data.data)
        })
    }
    console.log(data);

    const goTo = (id:number)=>{
        navigate(`/course-details/${id}`)
    }
    
  return (
    <Row className="ac-b2-outer">
      <Typography.Title className="ac-b2-title">Courses</Typography.Title>
      {data?.map((item:any)=>{
        return(
          <>
      <Row className="ac-b2-row" onClick={()=>goTo(item.id)}>
        <Col className="ac-b2-img-col"  md={5}>
          <img className="ac-b2-img" src={testImg} alt="" />
        </Col>
        <Col className="ac-b2-desc-col" md={17}>
          <Typography.Title level={4} className="ac-b2-desc-title heading">
            {item.courseName} 
          </Typography.Title>
          <Typography className="ac-b2-desc raleway">
            {item.courseDesc}
          </Typography>
          <Row className="ac-b2-price-row">
          
          </Row>
        </Col>
        <Col  md={2}className="ac-b2-price-col">
        <Typography.Title level={4}className="ac-b2-price heading">
          ₹{item.price}
          </Typography.Title>
        </Col>
      </Row>
        <div className="ac-b2-divider"/>
        </>
        )
      })}
    </Row>
  );
}

export default index;
