import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('window');

const BillInfoCardTop = ({ billNumber, sponsorName, party, description, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Bill C-{billNumber}</Text>
        <Text style={styles.sponsor}>Sponsor: {sponsorName}</Text>
        <Text style={styles.party}>{party}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <View style={styles.buttonContainer}>
          {/* Follow Button */}
          <TouchableOpacity style={styles.followButton}>
            {/* You can add a bell icon or any other icon here */}
            <Text>🔔 Follow</Text>
          </TouchableOpacity>
          
          {/* More Info Button */}
          <TouchableOpacity style={styles.moreInfoButton}>
            <Text style={styles.moreInfoText}>More Info...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 40,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  leftContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 2,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  sponsor: {
    fontSize: 16,
    marginBottom: 5,
  },
  party: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    alignItems: 'center', // Center buttons vertically
    marginTop: 10,
  },
  followButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  moreInfoButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  moreInfoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BillInfoCardTop;
