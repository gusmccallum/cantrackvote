import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
};

const BillInfoCardBottom = ({ houseBillStages, senateBillStages, royalAssent }) => {
  const reversedHouseBillStages = [...houseBillStages].reverse();
  const reversedSenateBillStages = [...senateBillStages].reverse();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.voteContainer}>
        <Text style={styles.voteTitle}>{item.BillStageName}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.voteDate}>Date: {formatDate(item.StateAsOfDate)}</Text>
          <Text style={styles.voteTime}>Time: {formatTime(item.StateAsOfDate)}</Text>
        </View>
        <Text style={styles.voteResult}>Result: {item.StateName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>House of Commons Stages</Text>
      <View style={styles.stagesContainer}>
        <FlatList
          data={reversedHouseBillStages}
          renderItem={renderItem}
          keyExtractor={(item) => item.BillStageId.toString()}
        />
        <FlatList
          data={reversedSenateBillStages}
          renderItem={renderItem}
          keyExtractor={(item) => item.BillStageId.toString()}
        />
      </View>
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
  dateTimeContainer: {
    flexDirection: 'column',
  alignItems: 'flex-start', // Align date and time to the left
  },
  voteDate: {
    fontSize: 12,
    color: '#555',
  },
  voteTime: {
    fontSize: 12,
    color: '#555',
  },
  voteResult: {
    fontSize: 14,
  },
  stagesContainer: {
    flexDirection: 'row', // Display FlatLists side by side
  },
});

export default BillInfoCardBottom;
