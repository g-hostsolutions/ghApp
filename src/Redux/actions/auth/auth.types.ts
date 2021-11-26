import { Action } from "redux";
import { CONSTS_AUTH } from "../../reducers/auth/auth.types";

interface SetAuth extends Action {
  type: typeof CONSTS_AUTH.SET;
  payload?: { token: string; email: string };
}

interface DeAuth extends Action {
  type: typeof CONSTS_AUTH.DE_AUTH;
  control?: string;
}

interface DeAuthRemove extends Action {
  type: typeof CONSTS_AUTH.DE_AUTH_REMOVE;
  control?: string;
}

export type AuthActionTypes = DeAuth | DeAuthRemove | SetAuth;
