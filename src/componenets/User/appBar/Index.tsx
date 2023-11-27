import React, { useState } from "react";
import {
  Layout,
  Drawer,
  Button,
  Typography,
} from "antd";
import logo from "../../../assets/images/Logo Lockup (1) rectangle.png";
import sandwich from "../../../assets/images/icons8-menu.svg";
import { useMediaQuery } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const Index: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()
  const style = {
    logo: {
      width: "180px",
      marginLeft: "6%",
      padding: 5,
    },
  };
  const matches = useMediaQuery("(max-width: 1000px)");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const goToHome=()=>{
    navigate("/")
  }


  return (
    <Layout >
      <Header
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          height: "80px",
          paddingLeft: "5px",
          width: '100%',
        }}
      >
        <img className="logo" onClick={goToHome} style={style.logo} src={logo} />
        {matches ? (
          <img
            style={{ width: "30px", marginLeft: "auto" }}
            src={sandwich}
            alt=""
            onClick={showDrawer}
          />
        ) : (
          <>
            <Typography.Title
              level={5}
              style={{ margin: 0, marginLeft: "auto" }}
            >
              Teach with Lifescool
            </Typography.Title>
            <a href="https://lifescool.learnyst.com/learn/account/signin">
            <Typography.Title
              level={5}
              style={{ margin: 0, marginLeft: "40px" }}
            >
              Login
            </Typography.Title>
            </a>
            <a href="https://lifescool.learnyst.com/learn/account/signin" target="_blank" rel="noopener noreferrer" style={{marginRight: "4%"}}>
            <Button
              shape="default"
              size="large"
              style={{
                marginTop:"8px",
                marginRight: "1%",
                marginLeft: "10px",
                background:" #FE7D5E",
                border: "none",
                color: "white",
                height:"40px"
              }}
            >
              Sign Up
            </Button>
            </a>
          </>
        )}
      </Header>
      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <Typography.Title
          level={5}
          style={{ margin: "10px", marginLeft: "auto" }}
        >
          Teach with Lifescool
        </Typography.Title>
        <a style={{color:"black"}} href="https://lifescool.learnyst.com/learn/account/signin">
        <Typography.Title
          level={5}
          style={{ margin: "10px", marginLeft: "auto" }}
        >
            Login
          </Typography.Title>
          </a>
        <a href="https://lifescool.learnyst.com/learn/account/signin" target="_blank" rel="noopener noreferrer" >
        <Button
          shape="default"
          size="large"
          style={{
            marginTop: "10px",
            width: "100%",
            background:"#FE7D5E",
            border: "none",
            color: "white",
          }}
        >
          Sign Up
        </Button>
        </a>
      </Drawer>
    </Layout>
  );
};

export default Index;
