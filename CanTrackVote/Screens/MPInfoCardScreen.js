// MPInfoCardScreen.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MPInfoCardTop from '../Components/MPInfoCardTop';
import MPInfoCardBottom from '../Components/MPInfoCardBottom';
import ParsingService from '../Services/ParsingService';

const MPInfoCardScreen = ({ route, navigation }) => {
  const [pastVotes, setPastVotes] = useState([]);
  const mpInfo = route.params.item;

  useEffect(() => {
    const fetchPastVotes = async () => {
      try {
        const mpVotes = await ParsingService.getRecentMpVotes(mpInfo.mpName, mpInfo.mpID, 10);
        setPastVotes(mpVotes);
      } catch (error) {
        console.error('Error fetching past votes:', error);
      }
    };

    fetchPastVotes();
  }, [mpInfo.mpName, mpInfo.mpID]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
    <MPInfoCardTop
      imageUri={mpInfo.image}
      name={mpInfo.mpName}
      party={mpInfo.party}
      bio={mpInfo.mpName + " is a Member of Parliament representing the riding of Ottawa South."}
    />
  </View>
      <View style={styles.cardContainer}>
        <MPInfoCardBottom votes={pastVotes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1, // Ensure child components can take up the available space
  },
});

export default MPInfoCardScreen;
