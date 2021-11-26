/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { Form, Input, Button, Tabs } from "antd";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../Redux/actions/auth";

const { TabPane } = Tabs;

const RegisterUser = () => {
  const dispatch = useDispatch();
  const [registering, setRegistering] = useState<boolean>(true);

  const onFinish = (values: { username: string; password: string }) => {
    if (registering) {
      return dispatch(
        registerUser({ email: values.username, password: values.password })
      );
    }

    return dispatch(
      loginUser({ email: values.username, password: values.password })
    );
  };

  const handleChange = (key: string) => setRegistering(key === "1");

  const validateMessages = {
    required: "${label} é obrigatório!",
    types: {
      email: "${label} Precisa ser um email válido!",
    },
  };

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={handleChange}>
        <TabPane tab="Registrar!" key="1" />
        <TabPane tab="Já sou Cadastrado" key="2" />
      </Tabs>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "Por favor insira seu email!", type: "email" }]}
        >
          <Input placeholder="#usuário" />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Por favor insira sua senha!" }]}
        >
          <Input.Password placeholder="#senha" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
          <Button type="primary" htmlType="submit">
            {registering ? "Registrar" : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterUser;
