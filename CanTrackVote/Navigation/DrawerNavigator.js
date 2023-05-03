import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityFeedTab, SearchScreenTab, IssuesScreenTab } from "./TabNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
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
      <Drawer.Screen name="Home" component={ActivityFeedTab}/>
      <Drawer.Screen name="Search" component={SearchScreenTab}/>
      <Drawer.Screen name="Issues" component={IssuesScreenTab}/>
          
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
