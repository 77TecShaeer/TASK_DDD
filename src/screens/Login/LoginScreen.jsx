import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS, HS, VS} from '../../utils/scaling';
import {AppText} from '../../common/AppText/AppText';
import SocialLogin from './componet/SocialLogin';
import { AppButton } from '../../common/AppButton/AppButton';
import { PhoneInput } from '../../common/PhoneInput/PhoneInput';

const LoginScreen = ({navigation}) => {
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

        <View
          style={{
            width: '100%',
            marginVertical: 30,
            padding: 10,
          }}>
            <PhoneInput label='رقم الهاتف' labelStyle={{color: COLORS.TEXT_SECONDARY}}/>
            <AppButton title={'تسجيل'} onPress={() => navigation.navigate('OTP_SCREEN')}/>
          </View>
        <SocialLogin />

        <View style={{marginTop: VS(24)}}>
          <AppText>
            {'معاينة '}
            <AppText
              onPress={() => navigation.navigate('PRIVACY_SCREEN')}
              style={{color: COLORS.PRIMARY}}>
              الشروط و الأحكام
            </AppText>
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
