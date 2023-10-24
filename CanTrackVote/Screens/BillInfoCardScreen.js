import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BillInfoCardTop from '../Components/BillInfoCardTop';
import BillInfoCardBottom from '../Components/BillInfoCardBottom';
import ParsingService from '../Services/ParsingService';
import ApiService from '../Services/ApiService'; // Import your ApiService

const BillInfoCardScreen = ({ route, navigation }) => {
  const [billDetails, setBillDetails] = useState(null); // State to hold bill details
  const [billStages, setBillStages] = useState(null); // State to hold bill information
  const vote = route.params.vote;

  useEffect(() => {
    const billNumber = vote.billNumber;

    const fetchData = async () => {
      try {
        const billDetails = await ParsingService.getDetailedBillVotes(billNumber);
        setBillDetails(billDetails);

        // Call the ApiService to get bill information
        const billStages = await ApiService.getBillProgress(billNumber);
        setBillStages(billStages);

        //console.log("Bill details:", billDetails[0]);
        //console.log("Bill information:", billInfo);

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
        {billStages && (
          <BillInfoCardBottom
            houseBillStages={billStages.houseBillStages}
            senateBillStages={billStages.senateBillStages}
            royalAssent={billStages.royalAssent}
          />
        )}
      </View>
    </View>
  );
};

// Rest of your component remains the same


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
