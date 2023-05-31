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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}
      />

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}
      />

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}
      />

      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
      />

      <Stack.Screen
        name="IssuesStack"
        component={IssuesScreen}
      />

      <Stack.Screen
        name="InfoStack"
        component={InfoScreen}
      />    

      <Stack.Screen
        name="FindmyMPStack"
        component={FindmyMPScreen}
      />    


      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
      />    
      
      <Stack.Screen
        name="UserStack"
        component={UserScreen}
      />    
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="SearchStack"
        component={SearchScreen}
      />

      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}
      />

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}
      />

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}
      />

      <Stack.Screen
        name="IssuesStack"
        component={IssuesScreen}
      />

      <Stack.Screen
        name="InfoStack"
        component={InfoScreen}
      />    

      <Stack.Screen
        name="FindmyMPStack"
        component={FindmyMPScreen}
      />    


      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
      />    
      
      <Stack.Screen
        name="UserStack"
        component={UserScreen}
      />       
    </Stack.Navigator>
  );
};

const IssuesStackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }} >
      <Stack.Screen name="IssuesStack" 
      component={IssuesScreen}/>

      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}/>

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}/>

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}/>

      <Stack.Screen name="SearchStack" 
      component={SearchScreen} />

      <Stack.Screen
        name="InfoStack"
        component={InfoScreen}
      />    

      <Stack.Screen
        name="FindmyMPStack"
        component={FindmyMPScreen}
      />    

      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
      />    
      
      <Stack.Screen
        name="UserStack"
        component={UserScreen}
      /> 
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>

      <Stack.Screen
        name="ActivityFeedStack"
        component={ActivityFeedScreen}/>

      <Stack.Screen
        name="MPInfoCardStack"
        component={MPInfoCardScreen}/>

      <Stack.Screen
        name="BillInfoCardStack"
        component={BillInfoCardScreen}/>

      <Stack.Screen name="SearchStack" 
        component={SearchScreen} />

      <Stack.Screen name="IssuesStack" 
        component={IssuesScreen}/>   

      <Stack.Screen
        name="InfoStack"
        component={InfoScreen}
      />    

      <Stack.Screen
        name="FindmyMPStack"
        component={FindmyMPScreen}
      />    


      <Stack.Screen
        name="SettingsStack"
        component={SettingsScreen}
      />    
      
      <Stack.Screen
        name="UserStack"
        component={UserScreen}
      /> 

    </Stack.Navigator>
  );
};

export { HomeStackNavigator, SearchStackNavigator, IssuesStackNavigator, UserStackNavigator };
