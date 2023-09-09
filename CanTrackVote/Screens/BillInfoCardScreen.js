import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BillInfoCardTop from '../Components/BillInfoCardTop';
import BillInfoCardBottom from '../Components/BillInfoCardBottom';
import ParsingService from '../Services/ParsingService';

const BillInfoCardScreen = ({ route, navigation }) => {
  const [billDetails, setBillDetails] = useState(null); // State to hold bill details
  const vote = route.params.vote;

   useEffect(() => {
    
    const billNumber = vote.billNumber;
    
    const fetchData = async () => {
      try {
        const billDetails = await ParsingService.getDetailedBillVotes(billNumber);
        setBillDetails(billDetails);  
        console.log("Bill details:", billDetails[0]);
        //console.log("Bill image: ", billDetails[0].image);
        //console.log("Party: ", billDetails[0].party);
      } catch (error) {
        console.log('bill info card screen error: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {billDetails && (
          <BillInfoCardTop
            image={billDetails[0].image}
            billNumber={billDetails[0].billNumber}
            sponsorName={billDetails[0].sponsorName}
            party={billDetails[0].party}
            description={billDetails[0].description}
          />
        )}
      </View>
      <View style={styles.bottomContainer}>
        <BillInfoCardBottom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.55, // Take up a bit more than half of the vertical space
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  bottomContainer: {
    flex: 1, // Take up the remaining space
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default BillInfoCardScreen;
