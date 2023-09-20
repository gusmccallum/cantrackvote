import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActivityFeedScreen from "../Screens/ActivityFeedScreen";
import SearchScreen from "../Screens/SearchScreen";
import IssuesScreen from "../Screens/IssuesScreen";
import MPInfoCardScreen from "../Screens/MPInfoCardScreen";
import UserScreen from "../Screens/UserScreen";
import StackNavigator from "./StackNavigator";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="ActivityFeed"
    screenOptions={{ headerShown: false }}
    >
      <Tab.Screen 
        name="ActivityFeedScreen" 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {() => <StackNavigator initialScreen="ActivityFeed"/>}
        </Tab.Screen>
      <Tab.Screen 
        name="SearchScreen" 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      >
        {() => <StackNavigator initialScreen="Search"/>}
        </Tab.Screen>
        <Tab.Screen 
        name="IssuesScreen" 
        options={{
          tabBarLabel: 'Issues',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sphere" color={color} size={size} />
          ),
        }}
      > 
      {() => <StackNavigator initialScreen="Issues"/>}
      </Tab.Screen>
      <Tab.Screen 
        name="UserScreen" 
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      > 
      {() => <StackNavigator initialScreen="User"/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};


export default TabNavigator;
