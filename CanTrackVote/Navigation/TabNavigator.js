import React from "react";
import { View } from "react-native";
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
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3f7819', // Set header background color
      },
      headerTitle: 'CanTrackVote', // Set header title
      headerTitleStyle: {
        color: '#FFF', // Set header title color to white
      },
      headerTitleAlign: 'center', // Center the header title
      headerRight: () => (
        <View>
          <TouchableOpacity style={{marginLeft:15}}>
            <MaterialCommunityIcons name='dots-vertical' size={28} color='#000'/>
          </TouchableOpacity>          
        </View>
      )
    }}>
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
