import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const IssuesScreen = () => {
  const [searchText, setSearchText] = useState('');

  const issues = [
    { title: 'Climate Change', description: 'The need to reduce greenhouse gas emissions to mitigate global warming' },
    { title: 'Indigenous Rights', description: 'Addressing the legacy of colonialism and recognizing the sovereignty of Indigenous nations' },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    // TODO: implement search logic
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={handleSearch}
        placeholder="Search issues"
      />

      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          {issues.map((issue, index) => {
            if (index % 2 === 0) {
              return (
                <TouchableOpacity style={styles.button} key={issue.title}>
                  <Text style={styles.buttonTitle}>{issue.title}</Text>
                  <Text style={styles.buttonDescription}>{issue.description}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        <View style={styles.column}>
          {issues.map((issue, index) => {
            if (index % 2 === 1) {
              return (
                <TouchableOpacity style={styles.button} key={issue.title}>
                  <Text style={styles.buttonTitle}>{issue.title}</Text>
                  <Text style={styles.buttonDescription}>{issue.description}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  button: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonDescription: {
    fontSize: 14,
  },
});

export default IssuesScreen;
