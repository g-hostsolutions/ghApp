/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { List, Avatar, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store/reducers";
import {
  IFavoriteState,
  ProductReturn,
} from "../../Redux/reducers/favorites/favorites.types";
import { removeFavorite, setFavorite } from "../../Redux/actions/favorites";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites: IFavoriteState | any = useSelector(
    ({ favorites }: RootState) => favorites
  );

  const handleFavorites = (itemId?: string) => {
    if (!itemId) return undefined;
    const item = favorites.get(itemId);
    return item ? 1 : 0;
  };

  const handleRateChange = (value: any, item: ProductReturn) => {
    if (value === 0) return dispatch(removeFavorite(item?._id));
    return dispatch(setFavorite(item));
  };

  return (
    <div>
      <List itemLayout="horizontal">
        {favorites?.valueSeq().map((item: ProductReturn) => (
          <List.Item key={item?._id}>
            <Rate
              tooltips={["favorite"]}
              allowClear
              count={1}
              value={handleFavorites(item?._id)}
              onChange={(value) => handleRateChange(value, item)}
              style={{ marginRight: 10 }}
            />
            <List.Item.Meta
              avatar={<Avatar src={item?.image} />}
              title={<a href="javascript:void(0);">{item?.source}</a>}
              description={item?.description || ""}
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default Favorites;
