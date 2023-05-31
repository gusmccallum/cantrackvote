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
      <Tab.Screen 
        name="UserScreen" 
        component={UserScreen} 
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};


export { TabNavigator };
