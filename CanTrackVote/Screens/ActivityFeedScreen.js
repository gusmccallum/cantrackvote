import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import uuid from 'uuid-random';
import MPList from '../assets/MPList.json';
import ParsingService from '../Services/ParsingService';
import MPActivityFeedItem from '../Components/MPActivityFeedItem';
import BillActivityFeedItem from '../Components/BillActivityFeedItem';
import bill from '../assets/bill.png';
import { useRoute, useNavigation } from '@react-navigation/native';

 
const ActivityFeedScreen = ( { navigation } ) => {

  const [mpActivities, setMpActivities] = useState([]);
  const [billActivities, setBillActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMPActivities, setShowMPActivities] = useState(true);
  const [showBillActivities, setShowBillActivities] = useState(true);

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
    console.log(vote);
    navigation.navigate('MPInfoCard', { vote });
  };

  const handleBillPress = (vote) => {
    console.log("Bill number: ", vote.billNumber);
    navigation.navigate('BillInfoCard', { vote: vote });
  };

  const renderItem = ({ item }) => {
    if (item.memberVote !== undefined && showMPActivities) {
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
    } else if (!showBillActivities) {
      return null;
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

  const setShowMPActivitiesHandler = () => {
    setShowMPActivities(!showMPActivities);
  };

  const setShowBillActivitiesHandler = () => {
    setShowBillActivities(!showBillActivities);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Button title="Filter" onPress={() => setShowModal(true)} />
        </View>
<FlatList
data={activities}
renderItem={renderItem}
keyExtractor={() => uuid()}
/>
<Modal
animationType="fade"
visible={showModal}
transparent={true}
onRequestClose={() => setShowModal(false)}
>
<TouchableWithoutFeedback onPress={() => setShowModal(false)}>
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<View
style={{ backgroundColor: "#3f7819", padding: 20, borderRadius: 10 }}
>
<TouchableOpacity
style={
showMPActivities
? styles.filterButtonActive
: styles.filterButton
}
onPress={() => setShowMPActivitiesHandler()}
>
<Text>MPs</Text>
</TouchableOpacity>
<TouchableOpacity
style={
showBillActivities
? styles.filterButtonActive
: styles.filterButton
}
onPress={() => setShowBillActivitiesHandler()}
>
<Text>Bills</Text>
</TouchableOpacity>
</View>
</View>
</TouchableWithoutFeedback>
</Modal>
</View>
</TouchableWithoutFeedback>
);
};

const styles = StyleSheet.create({
filterButton: {
backgroundColor: '#ff9292',
padding: 20,
borderRadius: 10,
marginRight: 10,
},
filterButtonActive: {
backgroundColor: '#9fff92',
padding: 20,
borderRadius: 10,
marginRight: 10,
},
});

export default ActivityFeedScreen;
