import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ActivityFeedItem from './ActivityFeedItem';
import Subscription from './Subscription';

const ActivityFeed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve saved subscriptions
      const subscription = await Subscription.retrieveSubscription();
      const bills = subscription.bills;

      // Make API call for each bill in the subscriptions
      let result = [];
      for (const bill of bills) {
        const response = await fetch(`https://www.parl.ca/legisinfo/en/bill/44-1/${bill}/json`);
        const billData = await response.json();
        result.push(billData);
      }

      // Set data state with the result
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <ActivityFeedItem
          key={index}
          billNumber={item.NumberCode}
          billName={item.ShortTitleEn}
          billDescription={item.LongTitleEn}
          currentStatus={item.LatestCompletedMajorStageNameWithChamberSuffix}
          dateUpdated={item.LatestCompletedBillStageDateTime}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityFeed;
