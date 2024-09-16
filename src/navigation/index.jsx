import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthNavigator/AuthStack';

const RootNavigtion = () => {
  return (
    <NavigationContainer onReady={() => {}}>
      <AuthStack />
    </NavigationContainer>
  );
};
export default RootNavigtion;
