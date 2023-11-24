import {Form,Select,Row,Typography, Button} from 'antd'
import adminApi from '../../../constants/axios'
import "./style.scss"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface courseDataType{
    id:number,
    courseName:string
}

function index() {
    const [courses,setCourses] = useState<courseDataType[]>([])
    const navigate = useNavigate()
    useEffect(() => {

    allCourses()
    }, [])
    


    const allCourses =async()=>{
        await adminApi.get('/getAllCourses').then((response)=>{
            setCourses(response.data.data)
        })
    }
     
    const onFinish=(values:object)=>{
        console.log(values);
        console.log(coursePoints);
        
        adminApi.post("/setTrending",coursePoints).then(()=>{
          navigate("/admin/trending")
        })
        
    }
    const pointsArr = [
      {
        type: "text",
        value: "",
      },
    ];
    const [coursePoints, setCoursePoints] = useState(pointsArr);
    const addPoints = () => {
      setCoursePoints((s: any) => {
        return [
          ...s,
          {
            type: "text",
            value: "",
          },
        ];
      });
    };
    const handlePoints = (key: any,value:any) => {
      console.log("tes");
      console.log("tes",key,value);
      
      const index = value.key;
      setCoursePoints((s) => {
        const newArr = s.slice();
        newArr[index].value = String(value.value);
        return newArr;
      });
    };
  return (
    <div className='formBackground'>
        <Row style={{ width: "100%" }}>
        <Typography.Title level={1}>
          Trending
        </Typography.Title>
      </Row>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        >
          <Form.Item label="Set trending" name="trendings">
            {coursePoints.map((item, i) => {
              return (
                <Select className='b5-trend-select' key={item.type} onChange={(key,value)=>handlePoints(key,value)}  >
           { courses.map(item=>(
               <Select.Option key={i}value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
              );
            })}
            <Button onClick={addPoints}>+</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' className='td-cancel-button'>Cancel</Button>
            <Button htmlType='submit' className='td-submit-button'>Submit</Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default index