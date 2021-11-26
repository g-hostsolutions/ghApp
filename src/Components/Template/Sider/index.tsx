import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { ShopOutlined, UserOutlined, StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { PathsDefault } from "../../../Routes";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store/reducers";

const { Sider: Sdr } = Layout;

const Sider = () => {
  const history = useHistory();
  const authenticated = useSelector(({ auth }: RootState) => auth);
  const auth = authenticated.get("auth") === "authenticated";
  const loggedUser = auth ? authenticated.get("email") : "Anonymous";

  const getLocation = () =>
    window.location.pathname === "/" ? "/produtos" : window.location.pathname;

  return (
    <Sdr
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div
        className="logo"
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            border: "3px black solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={64}
            icon={<UserOutlined />}
            style={{ marginBottom: 10 }}
          />
          <strong style={{ color: "white" }}>{loggedUser}</strong>
        </div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[getLocation()]}>
        <Menu.Item
          key={PathsDefault["page-products"]}
          icon={<ShopOutlined />}
          onClick={() => history.push(PathsDefault["page-products"])}
        >
          Produtos
        </Menu.Item>
        <Menu.Item
          key={PathsDefault["page-register"]}
          icon={<UserOutlined />}
          onClick={() => history.push(PathsDefault["page-register"])}
        >
          Usuário
        </Menu.Item>
        {auth && (
          <Menu.Item
            key={PathsDefault["page-favorites"]}
            icon={<StarOutlined />}
            onClick={() => history.push(PathsDefault["page-favorites"])}
          >
            Favoritos
          </Menu.Item>
        )}
      </Menu>
    </Sdr>
  );
};

export default Sider;
