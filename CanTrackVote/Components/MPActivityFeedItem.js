import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MPActivityFeedItem = ({
  image,
  name,
  billTitle,
  description,
  memberVote,
  date,
  onPressMp,
}) => {
  const voteColor = memberVote === 'Yea' ? 'green' : 'red';
  const voteIcon = memberVote === 'Yea' ? 'check' : 'times';

  return (
    <TouchableOpacity onPress={onPressMp}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontWeight: 'bold' }}>{billTitle}</Text>
          <Text>{description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <FontAwesome name={voteIcon} size={20} color={voteColor} />
            <Text style={{ marginLeft: 5, color: voteColor }}>{memberVote === 'Yea' ? 'Yes' : 'No'}</Text>
            <Text style={{ marginLeft: 10 }}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MPActivityFeedItem;
