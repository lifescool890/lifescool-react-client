import React from 'react'
import {  Layout, Menu } from 'antd'; 
import type { MenuProps } from 'antd';
import logo from "../../../assets/images/Logo Lockup (1).png"
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import {
  BookOutlined,
  RiseOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;



function Index() {
  const goTo=(index:number)=>{
    if(index == 0){
      navigate('/admin/courses')
    }else if(index == 1){
      navigate("/admin/trending")
    }
    
  }
  const navigate = useNavigate()
  const labels =[
    "Courses",
    "Trending"
  ]
  const items: MenuProps['items'] = [
    BookOutlined ,
    RiseOutlined ,
    ].map((icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `${labels[index] }`,
      onClick:()=>{goTo(index)}
    }));

  return (
    <>
     <Sider
        style={{
          overflow: 'auto',
          height: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:'#001529'
        }}
      >
        <div className="demo-logo-vertical" />
        <img src={logo} alt="" className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items}/>
      </Sider>
    </>
  )
}

export default Index