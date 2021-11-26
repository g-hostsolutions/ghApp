import { Reducer } from "redux";
import { CONSTS_AUTH, initialState, IAuthState } from "./auth.types";

const authReducer: Reducer<IAuthState> = (
  state = initialState,
  action
): IAuthState => {
  switch (action.type) {
    case CONSTS_AUTH.SET:
      return state
        .set("token", action.payload.token)
        .set("email", action.payload.email)
        .set("auth", "authenticated");
    case CONSTS_AUTH.DE_AUTH:
    case CONSTS_AUTH.DE_AUTH_REMOVE:
      return state
        .set("token", null)
        .set("email", null)
        .set("auth", "unauthenticated");
    default:
      return state;
  }
};

export default authReducer;
