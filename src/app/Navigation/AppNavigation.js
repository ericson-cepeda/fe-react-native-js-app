import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import routes from "./routes";

const routeConfig = {};

routes.map(route => {
  routeConfig[route.name] = route.screen;
});

// https://github.com/kmagiera/react-native-gesture-handler/issues/494
const MainStack = createStackNavigator(
  {
    ...routeConfig
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(MainStack);
