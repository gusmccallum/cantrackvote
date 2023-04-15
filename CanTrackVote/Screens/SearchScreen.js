import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    // perform search logic here with the text input
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchScreen;
