import {Form,Select,Row,Typography, Button} from 'antd'
import adminApi from '../../../constants/axios'
import "./style.scss"
import { useEffect, useState } from 'react'

interface courseDataType{
    id:number,
    courseName:string
}

function index() {
    const [courses,setCourses] = useState<courseDataType[]>([])
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
        adminApi.post("/setTrending",values)
        
    }
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
        <Form.Item
        label = "Trending 1"
        name="trending1"
        >
          <Select>
           { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
        </Form.Item>
        <Form.Item
        label = "Trending 2"
        name="trending2"
        >
          <Select>
          { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
        </Form.Item>
        <Form.Item
        label = "Trending 3"
        name="trending3"
        >
          <Select>
          { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
        </Form.Item>
        <Form.Item
        label = "Trending 4"
        name="trending4"
        >
          <Select>
          { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
        </Form.Item>
        <Form.Item
        label = "Trending 5"
        name="trending5"
        >
          <Select>
          { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
        </Form.Item>
        <Form.Item
        label = "Trending 6"
        name="trending6"
        >
          <Select>
          { courses.map(item=>(
               <Select.Option value={item.id}>{item.courseName}</Select.Option>
           ))}
          </Select>
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