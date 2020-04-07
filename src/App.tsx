import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./app.css";
import ContentBox from "components/ContentBox";
import WelcomeBox from "components/WelcomeBox";
import HeaderBox from "components/HeaderBox";
import "ant-design-pro/dist/ant-design-pro.css";
function App() {
  const { Header, Content } = Layout;

  return (
    <>
      <Layout className="layout">
        <Header className="welcome-header">
          <HeaderBox />
        </Header>
        <Content>
          <div className="welcome-content">
            <WelcomeBox />
          </div>
          <div className="content-card-div">
            <ContentBox />
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
