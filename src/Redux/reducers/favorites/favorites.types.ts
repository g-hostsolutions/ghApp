import { Record, fromJS } from "immutable";

export enum CONSTS_FAVORITE {
  SET = "favorite/SET",
  REMOVE = "favorite/REMOVE",
}

export interface ProductReturn {
  size: number;
  _id: string;
  source: string;
  image?: string;
  price?: string;
  description?: string;
}

export interface FavoriteState {
  [index: string]: ProductReturn;
}

export const initialState: IFavoriteState = fromJS({});

export interface IFavoriteState extends Record<FavoriteState> {}
