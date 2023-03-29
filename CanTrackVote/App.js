import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import 'react-native-gesture-handler';
import ActivityFeedScreen from './Screens/ActivityFeedScreen'
import MPInfoCardScreen from './Screens/MPInfoCardScreen';
import BillInfoCardScreen from './Screens/BillInfoCardScreen';

const navigator = createStackNavigator(
{
  ActivityFeed: ActivityFeedScreen,
  BillInfoCard: BillInfoCardScreen,
  MPInfoCard: MPInfoCardScreen,

},
{
  initialRouteName: "ActivityFeed",
  defaultNavigationOptions: {
    title: "CanTrackVote",
  },
}
);

export default createAppContainer(navigator);
