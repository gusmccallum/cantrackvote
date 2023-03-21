import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const ActivityFeed = () => {
  const data = [
    { id: 1, name: 'Justin Trudeau', party: 'Liberal Party', riding: 'Papineau', image: require('./assets/mp.png') },
    { id: 2, name: 'Erin O\'Toole', party: 'Conservative Party', riding: 'Durham', image: require('./assets/mp.png') },
    { id: 3, name: 'Jagmeet Singh', party: 'New Democratic Party', riding: 'Burnaby South', image: require('./assets/mp.png') },
    { id: 4, name: 'Annamie Paul', party: 'Green Party', riding: 'Toronto Centre', image: require('./assets/mp.png') },
    { id: 5, name: 'Yves-François Blanchet', party: 'Bloc Québécois', riding: 'Beloeil—Chambly', image: require('./assets/mp.png') },
    { id: 6, name: 'Elizabeth May', party: 'Green Party', riding: 'Saanich—Gulf Islands', image: require('./assets/mp.png') },
    { id: 7, name: 'Charlie Angus', party: 'New Democratic Party', riding: 'Timmins—James Bay', image: require('./assets/mp.png') },
    { id: 8, name: 'Maxime Bernier', party: 'People\'s Party of Canada', riding: 'Beauce', image: require('./assets/mp.png') },
    { id: 9, name: 'Jody Wilson-Raybould', party: 'Independent', riding: 'Vancouver Granville', image: require('./assets/mp.png') },
    { id: 10, name: 'Navdeep Bains', party: 'Liberal Party', riding: 'Mississauga—Malton', image: require('./assets/mp.png') },
    { id: 11, name: 'Steven Guilbeault', party: 'Liberal Party', riding: 'Laurier—Sainte-Marie', image: require('./assets/mp.png') },
    { id: 12, name: 'Bill Blair', party: 'Liberal Party', riding: 'Scarborough Southwest', image: require('./assets/mp.png') },
    { id: 13, name: 'Catherine McKenna', party: 'Liberal Party', riding: 'Ottawa Centre', image: require('./assets/mp.png') },
    { id: 14, name: 'Andrew Scheer', party: 'Conservative Party', riding: 'Regina—Qu\'Appelle', image: require('./assets/mp.png') },
    { id: 15, name: 'Pierre Poilievre', party: 'Conservative Party', riding: 'Carleton', image: require('./assets/mp.png') },
    { id: 16, name: 'Chrystia Freeland', party: 'Liberal Party', riding: 'University—Rosedale', image: require('./assets/mp.png') },
    { id: 17, name: 'Jack Harris', party: 'New Democratic Party', riding: 'St. John\'s East', image: require('./assets/mp.png') },
    { id: 18, name: 'François-Philippe Champagne', party: 'Liberal Party', riding: 'Sneed\'s Feed and Seed', image: require('./assets/mp.png') },
    { id: 19, name: 'Judy Sgro', party: 'Liberal Party', riding: 'Humber River—Black Creek', image: require('./assets/mp.png') },
    { id: 20, name: 'Niki Ashton', party: 'New Democratic Party', riding: 'Churchill—Keewatinook Aski', image: require('./assets/mp.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Image
        source={item.image}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>Party: {item.party}</Text>
      <Text>Riding: {item.riding}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ActivityFeed;
