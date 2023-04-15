import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, SearchStackNavigator, IssuesStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="Home" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchStackNavigator} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="Issues" 
        component={IssuesStackNavigator} 
        options={{
          tabBarLabel: 'Issues',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sphere" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;