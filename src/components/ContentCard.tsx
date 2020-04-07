import React from "react";
import { Card, Typography } from "antd";
import "../app.css";

export interface ContentCardProps {
  imageSrc: string;
  title: string;
  text: string;
  description: string;
  link: JSX.Element;
}
export default (props: ContentCardProps) => {
  const { Title, Text } = Typography;

  const { imageSrc, title, text, link, description } = props;
  return (
    <Card
      hoverable
      className="content-card"
      cover={<img alt="example" src={imageSrc} />}
    >
      <div className="center-div">
        <Title level={3}>{title}</Title>
        <Text>{text}</Text>
        <br />
        <Text>{description}</Text>
        <br />
        <div className="link-div">{link}</div>
      </div>
    </Card>
  );
};
