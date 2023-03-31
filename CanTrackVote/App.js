import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import ActivityFeedScreen from './Screens/ActivityFeedScreen'
import MPInfoCardScreen from './Screens/MPInfoCardScreen';
import BillInfoCardScreen from './Screens/BillInfoCardScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ActivityFeed" component={ActivityFeedScreen} />
        <Stack.Screen name="MPInfoCard" component={MPInfoCardScreen} />
        <Stack.Screen name="BillInfoCard" component={BillInfoCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
