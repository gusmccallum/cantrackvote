import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActivityFeedScreen from "../Screens/ActivityFeedScreen";
import SearchScreen from "../Screens/SearchScreen";
import IssuesScreen from "../Screens/IssuesScreen";


const Tab = createBottomTabNavigator();

const ActivityFeedTab = () => {
  return (
    <Tab.Navigator initialRouteName="ActivityFeed"
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivityFeedScreen" 
        component={ActivityFeedScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="IssuesScreen" 
        component={IssuesScreen} 
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

const BillInfoCardScreenTab = () => {
  return (
    <Tab.Navigator initialRouteName="BillInfoCard"
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivityFeedScreen" 
        component={ActivityFeedScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="IssuesScreen" 
        component={IssuesScreen} 
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

const MPInfoCardScreenTab = () => {
  return (
    <Tab.Navigator initialRouteName="BillInfoCard"
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivityFeedScreen" 
        component={ActivityFeedScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="IssuesScreen" 
        component={IssuesScreen} 
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

const IssuesScreenTab = () => {
  return (
    <Tab.Navigator initialRouteName="IssuesScreen"
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivityFeedScreen" 
        component={ActivityFeedScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="IssuesScreen" 
        component={IssuesScreen} 
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

const SearchScreenTab = () => {
  return (
    <Tab.Navigator initialRouteName="SearchScreen"
    screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivityFeedScreen" 
        component={ActivityFeedScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name="IssuesScreen" 
        component={IssuesScreen} 
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

export { ActivityFeedTab, MPInfoCardScreenTab, BillInfoCardScreenTab, IssuesScreenTab, SearchScreenTab};
