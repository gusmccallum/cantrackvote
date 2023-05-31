import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const FindmyMPScreen = () => {
  const [postalCode, setPostalCode] = useState('');

  const handlePostalCodeChange = (text) => {
    setPostalCode(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Postal Code"
        value={postalCode}
        onChangeText={handlePostalCodeChange}
      />
      <Image
        source={require('../assets/map.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
  },
});

export default FindmyMPScreen;
