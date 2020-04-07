import React from "react";
import { Row, Col, Typography } from "antd";
import image from "../images/image.png";
import CenterBox from "./CenterBox";

export default () => {
  const { Title, Text } = Typography;
  return (
    <Row align="middle">
      <Col
        xs={{ span: 0 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 12, offset: 2 }}
      >
        <img src={image} className="welcome-image-div"></img>
      </Col>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 8 }}
      >
        <CenterBox value={150}>
          <Title>Welcome to OFS</Title>
          <Text type="secondary">
            Begin your journey by selecting an option below...
          </Text>
        </CenterBox>
      </Col>
    </Row>
  );
};
