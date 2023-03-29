import React from 'react';
import { StyleSheet, View } from 'react-native';
import BillInfoCardTop from '../Components/BillInfoCardTop';
import BillInfoCardBottom from '../Components/BillInfoCardBottom';

const BillInfoCardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BillInfoCardTop
          imageUri="https://bills-to-laws.weebly.com/uploads/5/0/9/7/50973845/3713462_orig.png"
          name="Bill C-123"
          party="Sponsored by the Liberal Party of Canada"
          description="An Act to amend the Criminal Code and the Immigration and Refugee Protection Act (trafficking in human organs)."
        />
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
