import React from "react";
import { Row, Col, Typography, Avatar } from "antd";
import logo from "../images/logo.png";
import { UserOutlined } from "@ant-design/icons";
import "../app.css";

export default () => {
  const { Text } = Typography;

  return (
    <Row>
      <Col span={2}>
        <img src={logo} className="logo-image"></img>
      </Col>
      <Col
        xs={{ span: 16, offset: 4 }}
        sm={{ span: 12, offset: 8 }}
        md={{ span: 8, offset: 12 }}
        lg={{ span: 4, offset: 16 }}
      >
        <div className="right-div">
          <Text>Wayne Enterprises</Text>
        </div>
      </Col>
      <Col span={2}>
        <div className="avatar-div">
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Col>
    </Row>
  );
};
