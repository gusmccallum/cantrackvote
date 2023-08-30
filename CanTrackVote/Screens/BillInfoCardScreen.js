import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BillInfoCardTop from '../Components/BillInfoCardTop';
import BillInfoCardBottom from '../Components/BillInfoCardBottom';
import ParsingService from '../Services/ParsingService';

const BillInfoCardScreen = ({ route, navigation }) => {
  const [billDetails, setBillDetails] = useState(null); // State to hold bill details
  const vote = route.params;

   useEffect(() => {
    
    const billNumber = vote.billNumber;
    const fetchData = async () => {
      try {
        const billDetails = await ParsingService.getDetailedBillVotes(billNumber);
        setBillDetails(billDetails);  
/*         console.log("Bill image: ", billDetails.image);
        console.log("Bill name: ", billDetails.name);
        console.log("Bill party: ", billDetails.party);
        console.log("Bill description: ", billDetails.description); */
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
            image={billDetails.image}
            name={billDetails.name}
            party={billDetails.party}
            description={billDetails.description}
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
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bottomContainer: {
    flex: 2,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default BillInfoCardScreen;
