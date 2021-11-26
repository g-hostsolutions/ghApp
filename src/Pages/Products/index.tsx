/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import { List, Avatar, Rate, Input, Button } from "antd";
import { requestApi } from "../../Config/Axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store/reducers";
import { ProductReturn } from "../../Redux/reducers/favorites/favorites.types";
import { removeFavorite, setFavorite } from "../../Redux/actions/favorites";
import StepBackwardOutlined from "@ant-design/icons";

type Layer = "sources" | "items";
const { Search } = Input;

const Products = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [layer, setLayer] = useState<Layer>("sources");
  const [source, setSource] = useState<string | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  const favorites = useSelector(({ favorites }: RootState) => favorites);

  const handleEndpoint = useCallback(async () => {
    if (layer === "sources" || source === null) return "products";
    if (search !== null) return `products/${source}/${search}`;

    return `products/${source}`;
  }, [layer, source, search]);

  const reqData = useCallback(async () => {
    const endpoint = await handleEndpoint();
    const { status, data } = await requestApi({
      method: "GET",
      endpoint: endpoint,
    });

    if (status) setData(data);
  }, [handleEndpoint]);

  useEffect(() => {
    reqData();
  }, [source, layer, reqData]);

  const handleItemClick = (itemId?: string) => {
    if (layer === "sources" && itemId) {
      setLayer("items");
      setSource(itemId);
    }
  };

  const handleFavorites = (itemId?: string) => {
    if (!itemId) return undefined;
    const item = favorites.get(itemId);
    return item ? 1 : 0;
  };

  const handleRateChange = (value: any, item: ProductReturn) => {
    if (value === 0) return dispatch(removeFavorite(item?._id));
    return dispatch(setFavorite(item));
  };

  const onSearch = (value: string) => setSearch(value);

  const handleBack = () => {
    setSource(null)
    setSearch(null)
    setLayer('sources')
  }

  return (
    <div>
      <div
        style={{
          marginBottom: 15,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {layer !== "sources" && (
          <>
          <Button type="primary" icon={<StepBackwardOutlined />} size='middle' onClick={handleBack} style={{ marginRight: 10 }}>
            Voltar
          </Button>
          <Search
            placeholder="Busca"
            onSearch={onSearch}
            enterButton
            style={{ width: "40%" }}
          />
          </>
        )}
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item?._id}>
            {layer !== "sources" && (
              <Rate
                tooltips={["favorite"]}
                allowClear
                count={1}
                value={handleFavorites(item?._id)}
                onChange={(value) => handleRateChange(value, item)}
                style={{ marginRight: 10 }}
              />
            )}
            <List.Item.Meta
              avatar={<Avatar src={item?.image} />}
              title={
                <a
                  href="javascript:void(0);"
                  onClick={() => handleItemClick(item?._id)}
                >
                  {item?.source}
                </a>
              }
              description={item?.description || ""}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Products;
