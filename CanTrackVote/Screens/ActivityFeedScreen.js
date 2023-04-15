import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import uuid from 'uuid-random';
import { useNavigation } from '@react-navigation/native';
import MPList from '../assets/MPList.json';
import ParsingService from '../Services/ParsingService';
import MPActivityFeedItem from '../Components/MPActivityFeedItem';
import BillActivityFeedItem from '../Components/BillActivityFeedItem';
import bill from '../assets/bill.png';

const ActivityFeedScreen = () => {
  const navigation = useNavigation();

  const [mpActivities, setMpActivities] = useState([]);
  const [billActivities, setBillActivities] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mpVotes = await ParsingService.getRecentMpVotes(
          MPList[0].name,
          MPList[0].ID,
          10
        );
        const billVotes = await ParsingService.getRecentBillVotes(11, 3);
        setMpActivities(mpVotes);
        setBillActivities(billVotes);
      } catch (error) {
        console.log('activity feed error: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const allActivities = [...mpActivities, ...billActivities];
    allActivities.sort((a, b) => new Date(b.date) - new Date(a.date));
    setActivities(allActivities);
  }, [mpActivities, billActivities]);

  const handleMPPress = (vote) => {
    navigation.navigate('MPInfoCardStack', { vote });
  };

  const handleBillPress = (vote) => {
    navigation.navigate('BillInfoCardStack', { vote });
  };

  const renderItem = ({ item }) => {
    if (item.memberVote !== undefined) {
      return (
        <MPActivityFeedItem
          image={item.image}
          name={MPList[0].name}
          billTitle={item.billTitle}
          description={item.description}
          memberVote={item.memberVote}
          date={item.date}
          onPressMp={() => handleMPPress(item)}
        />
      );
    } else {
      return (
        <BillActivityFeedItem
          image={bill}
          billNumber={item.billNumber}
          voteStage={item.voteStage}
          voteStatus={item.voteStatus}
          votesYes={item.votesYes}
          votesNo={item.votesNo}
          date={item.date}
          onPressBill={() => handleBillPress(item)}
        />
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={() => uuid()}
      />
    </View>
  );
};

export default ActivityFeedScreen;
