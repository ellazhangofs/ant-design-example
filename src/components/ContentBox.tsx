import React from "react";
import { Row, Col } from "antd";
import "../app.css";
import image from "../images/image.png";
import ContentCard from "./ContentCard";

export default () => {
  return (
    <Row justify="center">
      <Col
        xs={{ span: 22 }}
        sm={{ span: 22 }}
        md={{ span: 11 }}
        lg={{ span: 6 }}
        style={{ paddingTop: "30px" }}
      >
        <ContentCard
          imageSrc={image}
          title="Operator Console"
          text="Report on what happens on the floor."
          description="Track down as it happens."
          link={<a>Get started</a>}
        />
      </Col>
      <Col
        xs={{ span: 22 }}
        sm={{ span: 22 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 6, offset: 1 }}
        style={{ paddingTop: "30px" }}
      >
        <ContentCard
          imageSrc={image}
          title="Analytics"
          text="Track OEE, and view trends to optimise process."
          description="Run a paperless factory."
          link={<a>Get started</a>}
        />
      </Col>
      <Col
        xs={{ span: 22 }}
        sm={{ span: 22 }}
        md={{ span: 12 }}
        lg={{ span: 6, offset: 1 }}
        style={{ paddingTop: "30px" }}
      >
        <ContentCard
          imageSrc={image}
          title="Organization"
          text="Configure your staff, shifts and sensors."
          description="Integrate OFS with other products."
          link={<a>Get started</a>}
        />
      </Col>
    </Row>
  );
};
