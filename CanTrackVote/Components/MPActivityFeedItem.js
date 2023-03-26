import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MPActivityFeedItem = ({ imageUri, title, description, voteResult }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.voteResultContainer}>
          <Text style={[styles.voteResult, voteResult === 'Yes' ? styles.yesVote : styles.noVote]}>
            {voteResult}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: 70,
    height: 70,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  voteResultContainer: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  voteResult: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  yesVote: {
    backgroundColor: 'green',
    color: '#fff',
  },
  noVote: {
    backgroundColor: 'red',
    color: '#fff',
  },
});

export default MPActivityFeedItem;
