import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import ActivityFeedScreen from "../Screens/ActivityFeedScreen";
import MPInfoCardScreen from "../Screens/MPInfoCardScreen";
import BillInfoCardScreen from "../Screens/BillInfoCardScreen";
import SearchScreen from "../Screens/SearchScreen";
import IssuesScreen from "../Screens/IssuesScreen";
import InfoScreen from "../Screens/InfoScreen";
import FindmyMPScreen from "../Screens/FindmyMPScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import UserScreen from "../Screens/UserScreen";

const Stack = createStackNavigator();

const StackNavigator = ( { initialScreen } ) => {
  return (
    <Stack.Navigator 
    initialRouteName={initialScreen} 
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
