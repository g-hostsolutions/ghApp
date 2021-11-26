import React, { FunctionComponent } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Favorites from "../Pages/Favorites";
import Products from "../Pages/Products";
import User from "../Pages/User";

export const PathsDefault = {
  "page-sign": "/conta/login",
  "page-register": "/conta/cadastro",
  "page-products": "/produtos",
  "page-favorites": "/favoritos",
};

export const routes = [PathsDefault];

export const Routes: FunctionComponent = () => {
  const auth = useAuth();

  if (auth === "unauthenticated") {
    return (
      <Switch>
        <Route exact path={PathsDefault["page-register"]} component={User} />
        <Route
          exact
          path={PathsDefault["page-products"]}
          component={Products}
        />
        <Redirect to={PathsDefault["page-products"]} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path={PathsDefault["page-register"]} component={User} />
      <Route exact path={PathsDefault["page-products"]} component={Products} />
      <Route
        exact
        path={PathsDefault["page-favorites"]}
        component={Favorites}
      />
      <Redirect to={PathsDefault["page-products"]} />
    </Switch>
  );
};
