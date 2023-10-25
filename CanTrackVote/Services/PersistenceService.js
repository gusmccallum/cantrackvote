import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the storage keys for MP and Bill subscriptions
const MP_SUBSCRIPTION_KEY = 'MP_SUBSCRIPTIONS';
const BILL_SUBSCRIPTION_KEY = 'BILL_SUBSCRIPTIONS';

// Add an MP subscription to AsyncStorage
export const addMPSubscription = async (mpName) => {
  try {
    // Get the current MP subscriptions from AsyncStorage
    const existingSubscriptions = await getMPSubscriptions();

    // Add the new MP subscription to the list if it doesn't already exist
    if (!existingSubscriptions.includes(mpName)) {
      existingSubscriptions.push(mpName);
      await AsyncStorage.setItem(MP_SUBSCRIPTION_KEY, JSON.stringify(existingSubscriptions));
    }
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error adding MP subscription', error);
  }
};

// Delete an MP subscription from AsyncStorage
export const deleteMPSubscription = async (mpName) => {
  try {
    // Get the current MP subscriptions from AsyncStorage
    const existingSubscriptions = await getMPSubscriptions();

    // Remove the specified MP subscription from the list
    const updatedSubscriptions = existingSubscriptions.filter((subscription) => subscription !== mpName);

    // Save the updated list back to AsyncStorage
    await AsyncStorage.setItem(MP_SUBSCRIPTION_KEY, JSON.stringify(updatedSubscriptions));
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error deleting MP subscription', error);
  }
};

// Get the list of MP subscriptions from AsyncStorage
export const getMPSubscriptions = async () => {
  try {
    const mpSubscriptions = await AsyncStorage.getItem(MP_SUBSCRIPTION_KEY);
    return mpSubscriptions ? JSON.parse(mpSubscriptions) : [];
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error getting MP subscriptions', error);
    return [];
  }
};

// Add a Bill subscription to AsyncStorage
export const addBillSubscription = async (billNum) => {
  try {
    // Get the current Bill subscriptions from AsyncStorage
    const existingSubscriptions = await getBillSubscriptions();

    // Add the new Bill subscription to the list if it doesn't already exist
    if (!existingSubscriptions.includes(billNum)) {
      existingSubscriptions.push(billNum);
      await AsyncStorage.setItem(BILL_SUBSCRIPTION_KEY, JSON.stringify(existingSubscriptions));
    }
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error adding Bill subscription', error);
  }
};

// Delete a Bill subscription from AsyncStorage
export const deleteBillSubscription = async (billNum) => {
  try {
    // Get the current Bill subscriptions from AsyncStorage
    const existingSubscriptions = await getBillSubscriptions();

    // Remove the specified Bill subscription from the list
    const updatedSubscriptions = existingSubscriptions.filter((subscription) => subscription !== billNum);

    // Save the updated list back to AsyncStorage
    await AsyncStorage.setItem(BILL_SUBSCRIPTION_KEY, JSON.stringify(updatedSubscriptions));
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error deleting Bill subscription', error);
  }
};

// Get the list of Bill subscriptions from AsyncStorage
export const getBillSubscriptions = async () => {
  try {
    const billSubscriptions = await AsyncStorage.getItem(BILL_SUBSCRIPTION_KEY);
    return billSubscriptions ? JSON.parse(billSubscriptions) : [];
  } catch (error) {
    // Handle errors, e.g., by logging or displaying a message
    console.error('Error getting Bill subscriptions', error);
    return [];
  }
};
