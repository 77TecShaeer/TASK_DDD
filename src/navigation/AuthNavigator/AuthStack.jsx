import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../../screens/Login/LoginScreen';
import PrivacyScreen from '../../screens/Privacy/PrivacyScreen';
import OTPScreen from '../../screens/OTP/OTPScreen';
import {FS, HS} from '../../utils/scaling';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

function AuthStack() {
  const navigation = useNavigation();

  const BackButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/images/arrow-right/arrow-right.png')} // Add your image path here
          style={{width: 30, height: 30, marginLeft: 15}} // Customize as needed
        />
      </TouchableOpacity>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: FS(18),
          fontFamily: 'Tajawal-Bold',
        },
      }}>
      <Stack.Screen
        name={'LOGIN_SCREEN'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'OTP_SCREEN'}
        component={OTPScreen}
        options={{
          title: 'كود التحقق',
         
          headerTitleAlign:'left',
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name={'PRIVACY_SCREEN'}
        component={PrivacyScreen}
        options={{
          title: 'شروط وسياسة الاستخدام',
          headerTitleAlign:'left',
         
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
