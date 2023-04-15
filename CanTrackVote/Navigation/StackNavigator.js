import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityFeedScreen from "../Screens/ActivityFeedScreen";
import MPInfoCardScreen from "../Screens/MPInfoCardScreen";
import BillInfoCardScreen from "../Screens/BillInfoCardScreen";
import SearchScreen from "../Screens/SearchScreen";
import IssuesScreen from "../Screens/IssuesScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="IssuesStack"
        component={IssuesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="IssuesStack"
        component={IssuesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const IssuesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IssuesStack" component={IssuesScreen} />

      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}
        options={{ headerShown: false }}/>

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}
        options={{ headerShown: false }}/>

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}
        options={{ headerShown: false }}/>

      <Stack.Screen name="SearchStack" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SearchStackNavigator, IssuesStackNavigator };
