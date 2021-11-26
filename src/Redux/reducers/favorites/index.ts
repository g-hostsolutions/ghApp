import { Reducer } from "redux";
import {
  CONSTS_FAVORITE,
  IFavoriteState,
  initialState,
} from "./favorites.types";

const favoritesReducer: Reducer<IFavoriteState> = (
  state = initialState,
  action
): IFavoriteState => {
  switch (action.type) {
    case CONSTS_FAVORITE.SET:
      return state.setIn([action.payload._id], action.payload);
      case CONSTS_FAVORITE.REMOVE:
      return state.delete(action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
