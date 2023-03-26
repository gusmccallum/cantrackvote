import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const BillInfoCardBottom = () => {
  const pastVotes = [
    { id: '1', date: 'March 1, 2023', title: 'Consideration in committee', result: 'Completed' },
    { id: '2', date: 'February 15, 2023', title: '2nd reading and referral to committee', result: 'Completed' },
    { id: '3', date: 'January 29, 2023', title: 'Introduction and first reading', result: 'Completed' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.voteContainer}>
        <Text style={styles.voteTitle}>{item.title}</Text>
        <Text style={styles.voteDate}>Vote on {item.date}</Text>
        <Text style={styles.voteResult}>Result: {item.result}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Past Votes</Text>
      <FlatList
        data={pastVotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  voteContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  voteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  voteDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  voteResult: {
    fontSize: 14,
  },
});

export default BillInfoCardBottom;
