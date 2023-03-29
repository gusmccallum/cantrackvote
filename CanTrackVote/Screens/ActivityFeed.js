import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import MPList from '../assets/MPList.json'
import mp from '../assets/mp.png'
import ParsingService from '../Services/ParsingService';

const ActivityFeed = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    try {
      ParsingService.getVotes(MPList[0].name, MPList[0].ID, 5)
        .then(response => {
          console.log('The votes are: ', response.voteResults);
          setVotes(response);
        })
        .catch(error => {
          console.log('activity feed error1: ', error);
        });
    } catch (error) {
      console.log('activity feed error2: ', error);
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={{ uri: votes.image }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{MPList[0].name}</Text>
        <Text style={{ fontWeight: 'bold' }}>{item.billTitle}{item.description}</Text>
        <Text>{item.memberVote}</Text>
        <Text>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={votes.voteResults}
        renderItem={renderItem}
        keyExtractor={() => uuidv4}
      />
    </View>
  );
};

export default ActivityFeed;
