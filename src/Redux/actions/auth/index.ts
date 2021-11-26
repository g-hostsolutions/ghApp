import { AuthActionTypes } from "./auth.types";
import { CONSTS_AUTH, IAuthState } from "../../reducers/auth/auth.types";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react";
import { message } from "antd";
import storage from "redux-persist/lib/storage";
import { requestApi } from "../../../Config/Axios";

type Effect = ThunkAction<unknown, IAuthState, unknown, AuthActionTypes>;

export function auth(payload: {
  token: string;
  email: string;
}): AuthActionTypes {
  return {
    type: CONSTS_AUTH.SET,
    payload,
  };
}

export function deAuth(): AuthActionTypes {
  return {
    type: CONSTS_AUTH.DE_AUTH,
  };
}

export const deAuthRemove =
  (): Effect => (dispatch: Dispatch<AuthActionTypes>) => {
    storage.removeItem("persist:root");
    dispatch(deAuth());
  };

export const registerUser =
  (
    payload: { email: string; password: string },
    callback?: () => void
  ): Effect =>
  async (dispatch: Dispatch<AuthActionTypes | any>) => {
    try {
      const { status, data } = await requestApi({
        method: "POST",
        endpoint: "users",
        payload,
      });

      if (status) {
        dispatch(loginUser(payload));
      } else {
        message.error(
          JSON.stringify(data.message || data.msg) ||
            "Ocorreu um erro ao registrar o usuário"
        );
      }
      if (callback) callback();
    } catch (e: any) {
      message.error(e.message || "Ocorreu um erro ao registrar o usuário");
    }
  };

export const loginUser =
  (
    payload: { email: string; password: string },
    callback?: () => void
  ): Effect =>
  async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      const { status, data } = await requestApi({
        method: "POST",
        endpoint: "auth/login",
        payload,
      });

      if (status) {
        dispatch(auth({ token: data.token, email: payload.email }));
      } else {
        message.error(
          JSON.stringify(data.message || data.msg) ||
            "Ocorreu um erro ao registrar o usuário"
        );
      }
      if (callback) callback();
    } catch (e: any) {
      message.error(e.message || "Ocorreu um erro ao registrar o usuário");
    }
  };

export function getAuth(payload: {
  token: string;
  email: string;
}): AuthActionTypes {
  return {
    type: CONSTS_AUTH.SET,
    payload,
  };
}
