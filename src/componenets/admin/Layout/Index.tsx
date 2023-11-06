import React from "react";
import AdminNavbar from "../adminNavbar/Index";
import AdminSideBar from "../adminSideBar/Index";
import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";

function Index() {
  console.log("layout rendered");
  
  return (
    <>
      <React.Fragment>
        <Row>
          <Col md={24}>
            <AdminNavbar /> 
            </Col>
        </Row>
        <Row>
          <Col md={4}  >
            <AdminSideBar />
          </Col>
          <Col md={20} >
            <Outlet  />
          </Col>
        </Row>
      </React.Fragment>
    </>
  );
}

export default  Index 