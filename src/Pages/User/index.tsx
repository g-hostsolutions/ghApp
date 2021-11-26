import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useAuth } from "../../Hooks/useAuth";
import { deAuthRemove } from "../../Redux/actions/auth";
import RegisterUser from "./registerUser";
import LogoutOutlined from "@ant-design/icons";

const User = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  if (auth === "authenticated") {
    return (
      <div>
        <Button
          type="primary"
          shape="round"
          icon={<LogoutOutlined />}
          size="large"
          onClick={() => dispatch(deAuthRemove())}
        >
          Logout
        </Button>
      </div>
    );
  } else {
    return <RegisterUser />;
  }
};

export default User;
