import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../../screens/Login/LoginScreen';
import PrivacyScreen from '../../screens/Privacy/PrivacyScreen';
import OTPScreen from '../../screens/OTP/OTPScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'red'},
      }}>
      <Stack.Screen
        name={'LOGIN_SCREEN'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'OTP_SCREEN'}
        component={OTPScreen}
        options={{title: 'كود التحقق'}}
      />
      <Stack.Screen
        name={'PRIVACY_SCREEN'}
        component={PrivacyScreen}
        options={{title: 'شروط وسياسة الاستخدام'}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
