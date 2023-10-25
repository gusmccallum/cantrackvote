import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
};

const stagesData = [
  { stageName: 'First reading', iconName: 'numeric-1-circle-outline' },
  { stageName: 'Second reading', iconName: 'numeric-2-circle-outline' },
  { stageName: 'Third reading', iconName: 'numeric-3-circle-outline' },
  { stageName: 'Consideration in committee', iconName: 'dots-horizontal-circle-outline' },
  { stageName: 'Report stage', iconName: 'account-supervisor-circle-outline' },
  { stageName: 'Royal assent', iconName: 'crown-circle-outline' },
  { stageName: 'Senate pre-study', iconName: 'swap-horizontal-circle-outline' },
  // Add more stages as needed
];

const BillInfoCardBottom = ({ houseBillStages, senateBillStages, royalAssent }) => {
  const reversedHouseBillStages = [...houseBillStages].reverse();
  const reversedSenateBillStages = [...senateBillStages].reverse();

  const findIconName = (stageName) => {
    const stage = stagesData.find((stage) => stage.stageName === stageName);
    return stage ? stage.iconName : 'information'; // Default icon if not found
  };

  const renderHouseItem = ({ item }) => {
    const iconName = findIconName(item.BillStageName);
    return (
      <TouchableOpacity style={[styles.voteContainer, styles.houseStyle]}>
        <MaterialCommunityIcons name={iconName} size={48} color="#FFF" />
        <Text style={styles.voteTitle}>{item.BillStageName}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.voteDate}>{formatDate(item.StateAsOfDate)}</Text>
          <Text style={styles.voteTime}>{formatTime(item.StateAsOfDate)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSenateItem = ({ item }) => {
    const iconName = findIconName(item.BillStageName);
    return (
      <TouchableOpacity style={[styles.voteContainer, styles.senateStyle]}>
        <MaterialCommunityIcons name={iconName} size={48} color="#FFF" />
        <Text style={styles.voteTitle}>{item.BillStageName}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.voteDate}>{formatDate(item.StateAsOfDate)}</Text>
          <Text style={styles.voteTime}>{formatTime(item.StateAsOfDate)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.stagesContainer}>
        <FlatList
          data={reversedHouseBillStages}
          renderItem={renderHouseItem}
          keyExtractor={(item) => item.BillStageId.toString()}
        />
        <View style={styles.separator} />
        <FlatList
          data={reversedSenateBillStages}
          renderItem={renderSenateItem}
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
  voteContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  houseStyle: {
    backgroundColor: '#3f7819', // Green color for House of Commons
  },
  senateStyle: {
    backgroundColor: '#7a041d', // Red color for Senate
  },
  voteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF',
  },
  dateTimeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  voteDate: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  voteTime: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  voteResult: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  stagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: 20,
    backgroundColor: '#f2f2f2', // Background color to separate FlatLists
  },
});

export default BillInfoCardBottom;
