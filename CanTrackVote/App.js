import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Navigation/TabNavigator";
import DrawerNavigator from "./Navigation/DrawerNavigator";

 const App = () => {
  return <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>;
}
export default App;