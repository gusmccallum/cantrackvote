import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ActivityFeedItem = ({ billNumber, billName, billDescription, currentStatus, dateUpdated }) => {
  return (
    <View style={styles.container}>
      {/*<Image style={styles.image} source={require('./assets/bill.png')} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.billNumber}>Bill Number: {billNumber}</Text>
        <Text style={styles.billName}>Bill Name: {billName}</Text>
        <Text style={styles.billDescription}>Bill Description: {billDescription}</Text>
        <Text style={styles.currentStatus}>Current Status: {currentStatus}</Text>
        <Text style={styles.dateUpdated}>Date Updated: {dateUpdated}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'lightblue'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  billNumber: {
    fontWeight: 'bold',
    fontSize: 16
  },
  billName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  billDescription: {
    fontSize: 16
  },
  currentStatus: {
    fontSize: 16
  },
  dateUpdated: {
    fontSize: 16
  }
});

export default ActivityFeedItem;