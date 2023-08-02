import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityFeedScreen from "../Screens/ActivityFeedScreen";
import MPInfoCardScreen from "../Screens/MPInfoCardScreen";
import BillInfoCardScreen from "../Screens/BillInfoCardScreen";
import SearchScreen from "../Screens/SearchScreen";
import IssuesScreen from "../Screens/IssuesScreen";
import InfoScreen from "../Screens/InfoScreen";
import FindmyMPScreen from "../Screens/FindMyMPScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import UserScreen from "../Screens/UserScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}
    initialRouteName={initialScreen}>
      <Stack.Screen
        name="ActivityFeed"
        component={ActivityFeedScreen}
      />

      <Stack.Screen
        name="MPInfoCard"
        component={MPInfoCardScreen}
      />

      <Stack.Screen
        name="BillInfoCard"
        component={BillInfoCardScreen}
      />

      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
      />

      <Stack.Screen
        name="Issues"
        component={IssuesScreen}
      />

      <Stack.Screen
        name="Info"
        component={InfoScreen}
      />    

      <Stack.Screen
        name="FindmyMP"
        component={FindmyMPScreen}
      />    


      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />    
      
      <Stack.Screen
        name="User"
        component={UserScreen}
      />    
    </Stack.Navigator>
  );
};


export default StackNavigator;
