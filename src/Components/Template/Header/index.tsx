import React from "react";
import { Layout } from "antd";

const { Header: Hdr } = Layout;

const Header = () => {
  return (
    <Hdr
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    />
  );
};

Header.propTypes = {};

export default Header;
