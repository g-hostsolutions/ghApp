import React from "react";
import { Layout } from "antd";
import "./App.css";
import { Routes } from "./Routes";
import Sider from "./Components/Template/Sider";
import Header from "./Components/Template/Header";
import MainContent from "./Components/Template/MainContent";

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ backgroundColor: '#fff' }}>
        <Header />
        <MainContent routes={<Routes />} />
      </Layout>
    </Layout>
  );
}

export default App;
