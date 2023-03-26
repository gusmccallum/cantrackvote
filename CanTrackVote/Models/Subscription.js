import React from 'react';
import { View, Text } from 'react-native';

const Subscription = ({ subscription }) => {
  console.log("This is the subscritpion" + subscription); // log the subscription prop to the console
  const { MPs, Bills, Issues } = subscription;


  return (
    <View>
      <Text>Subscription Component</Text>
      <Text>MPs: {MPs.join(', ')}</Text>
      <Text>Bills: {Bills.join(', ')}</Text>
      <Text>Issues: {Issues.join(', ')}</Text>
    </View>
  );
};

export default Subscription;
