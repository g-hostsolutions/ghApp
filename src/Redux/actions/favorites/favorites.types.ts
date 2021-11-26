import { Action } from "redux";
import { CONSTS_FAVORITE, ProductReturn } from "../../reducers/favorites/favorites.types";

interface SetFavorite extends Action {
  type: typeof CONSTS_FAVORITE.SET;
  payload?: ProductReturn
}

interface DelFavorite extends Action {
  type: typeof CONSTS_FAVORITE.REMOVE;
  payload: string;
}

export type FavoriteActionTypes = SetFavorite | DelFavorite
