import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BillActivityFeedItem = ({ 
    image, 
    billNumber, 
    voteStage, 
    voteStatus, 
    votesYes, 
    votesNo, 
    date,
    onPressBill,
 }) => {
  return (
    <TouchableOpacity onPress={onPressBill}>
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={image}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Bill {billNumber}</Text>
        <Text style={{ fontWeight: 'bold' }}>{voteStage}</Text>
        <Text>{voteStatus}</Text>
        <Text>Yes: {votesYes} | No: {votesNo}</Text>
        <Text>{date}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default BillActivityFeedItem;
