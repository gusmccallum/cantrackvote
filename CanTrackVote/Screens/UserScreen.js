import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('ActivityFeedScreen')} style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('IssuesScreen')} style={styles.link}>
        <Text style={styles.linkText}>Issues</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('FindmyMPScreen')} style={styles.link}>
        <Text style={styles.linkText}>Find my MP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('InfoScreen')} style={styles.link}>
        <Text style={styles.linkText}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('SearchScreen')} style={styles.link}>
        <Text style={styles.linkText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('SettingsScreen')} style={styles.link}>
        <Text style={styles.linkText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    fontSize: 18,
  },
});

export default UserScreen;
