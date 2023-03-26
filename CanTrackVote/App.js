import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActivityFeed from './Screens/ActivityFeed'
import MPInfoCard from './Screens/MPInfoCard';
import BillInfoCard from './Screens/BillInfoCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityFeed></ActivityFeed>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
