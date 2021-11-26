import React from "react";
import { Layout } from "antd";

interface Props {
  routes: JSX.Element;
}

const { Content: Cnt } = Layout;

const MainContent: React.FC<Props> = ({ routes }) => {
  return (
    <Cnt
      style={{
        margin: "24px 16px 0",
        backgroundColor: "#fff",
        height: "100% !important",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, backgroundColor: "#fff" }}
      >
        {routes}
      </div>
    </Cnt>
  );
};

export default MainContent;
