import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const Subscription = (props) => {
  const [subscription, setSubscription] = useState({});

  const saveSubscription = async (subscription) => {
    try {
      await AsyncStorage.setItem('subscription', JSON.stringify(subscription));
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveSubscription = async () => {
    try {
      const subscription = await AsyncStorage.getItem('subscription');
      setSubscription(JSON.parse(subscription));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    retrieveSubscription();
  }, []);

  const initialSubscription = {
    Bills: ['C-12', 'C-19', 'C-32'],
    MPs: ['Peter Julian', 'Leah Gazan', 'Niki Ashton'],
    Issues: ['Indigenous', 'Oil', 'Education'],
  };

  useEffect(() => {
    saveSubscription(initialSubscription);
    props.onSubscriptionUpdate(initialSubscription);
  }, []);

  return null;
};

export default Subscription;
