import { Row, Col, Form, Input, Button, Typography } from "antd";
import "../../font.scss";
import logo from "../../../assets/images/Logo Lockup (1).png";
import adminApi from "../../../constants/axios";
import "./style.scss";
import { useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

function Index() {
  console.log("login rendrede");
  
  const [error, setError] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    adminApi.post("/login", values).then((response) => {
      const auth: string = response.data.authentication;
      const authToken: string = response.data.authToken;
      if (auth) {
        localStorage.setItem("authToken", JSON.stringify(authToken));
        window.location.reload();
      } else {
        setError(true);
      }
    });
  };
  return (
    <Row className="outerRow">
      <Col className="leftColumn">
        <img className="loginLogo" src={logo} alt="company logo" />
      </Col>
      <Col className="rightColumn">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Typography.Title className="heading" level={1}>
            Login
          </Typography.Title>
          {error ? (
            <Typography className="error">
              User name or password is not correct
            </Typography>
          ) : (
            ""
          )}
          <Form.Item<FieldType>
            className="password"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="logInInput" placeholder="User Name"/>
          </Form.Item>

          <Form.Item<FieldType>
            className="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="logInInput"  placeholder="Password"/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="logInButton" type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
export default Index;
