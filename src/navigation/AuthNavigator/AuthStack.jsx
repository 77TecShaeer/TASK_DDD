import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../../screens/Login/LoginScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LOGIN_SCREEN'} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
