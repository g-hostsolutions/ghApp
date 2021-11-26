import { CONSTS_FAVORITE } from "../../reducers/favorites/favorites.types";
import { FavoriteActionTypes } from "./favorites.types";

export function setFavorite(payload: any): FavoriteActionTypes {
  return {
    type: CONSTS_FAVORITE.SET,
    payload,
  };
}

export function removeFavorite(payload: string): FavoriteActionTypes {
  return {
    type: CONSTS_FAVORITE.REMOVE,
    payload
  };
}
