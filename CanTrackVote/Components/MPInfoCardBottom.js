// MPInfoCardVotes.js

import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import uuid from 'uuid-random';


const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const MPInfoCardBottom = ({ votes }) => {
  const renderVoteItem = ({ item }) => {
    let icon = <MaterialCommunityIcons name="checkbox-marked-circle" size={48} color="#3f7819" />;


    if (item.memberVote[0] === "Nay") {
      icon = <MaterialCommunityIcons name="close-circle" size={48} color="red" />;
    }
  
    return (
      <TouchableOpacity style={styles.voteContainer}>
        {icon}
        <Text style={styles.voteTitle}>{item.billTitle}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.voteDate}>{formatDate(item.date)}</Text>
        </View>
        <Text style={styles.voteResult}>Vote: {item.memberVote}</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={votes}
        renderItem={renderVoteItem}
        keyExtractor={() => uuid()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  voteContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  voteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#3f7819',
  },
  dateTimeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  voteDate: {
    fontSize: 12,
    color: '#3f7819',
  },
  voteResult: {
    fontSize: 14,
    color: '#3f7819',
  },
});

export default MPInfoCardBottom;
