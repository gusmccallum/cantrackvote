import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import ActivityFeed from './ActivityFeed';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
