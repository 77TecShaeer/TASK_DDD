import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS, HS, VS} from '../../utils/scaling';
import {AppText} from '../../common/AppText/AppText';
import SocialLogin from './componet/SocialLogin';

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_PAGES,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'stretch',
          marginHorizontal: HS(16),
          borderRadius: HS(16),
          alignItems: 'center',
          justifyContent: 'center',
          padding: HS(24),
        }}>
        <Image
          source={require('../../assets/images/Logo/tiplogo.png')}
          style={{width: HS(70), height: VS(70)}}
          resizeMode="contain"
        />
        <AppText
          style={{
            color: COLORS.HEADLINE,
            fontFamily: 'Tajawal-Bold',
            fontWeight: 500,
            fontSize: FS(24),
            marginTop: VS(24),
          }}>
          {'مرحباً بعودتك!'}
        </AppText>

        <AppText
          style={{
            marginTop: VS(12),
          }}>
          {'مرحباً بك في التطبيق الإختباري'}
        </AppText>

        <View style={{backgroundColor: 'red', width: 200, height: 100 , marginVertical:30}}></View>
        <SocialLogin />
      </View>
    </View>
  );
};

export default LoginScreen;
