import React from 'react';
import { StyleSheet, View } from 'react-native';
import MPInfoCardTop from '../Components/MPInfoCardTop';
import MPInfoCardBottom from '../Components/MPInfoCardBottom';

const MPInfoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MPInfoCardTop
          imageUri="https://static.wikia.nocookie.net/supermarioglitchy4/images/a/a8/Saul.webp/revision/latest?cb=20220811065029"
          name="John Smith"
          party="Liberal Party of Canada"
          bio="John Smith is a Member of Parliament representing the riding of Ottawa South."
        />
      </View>
      <View style={styles.bottomContainer}>
        <MPInfoCardBottom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bottomContainer: {
    flex: 2,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default MPInfoCard;
