import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS, HS, VS} from '../../utils/scaling';
import {AppText} from '../../common/AppText/AppText';
import SocialLogin from './componet/SocialLogin';
import {AppButton} from '../../common/AppButton/AppButton';
import {PhoneInput} from '../../common/PhoneInput/PhoneInput';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <PhoneInput
              label="رقم الهاتف"
              imageSource={require('../../assets/images/saudi-flag/saudi-flag.png')}
              labelStyle={{color: COLORS.TEXT_SECONDARY}}
              value={phone}
              handleChangeText={(text) => setPhone(text)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: VS(4),
                marginBottom: VS(8),
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: COLORS.PRIMARY, false: COLORS.STROKE}}
                style={{borderRadius: 20}}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <AppText
                style={{
                  color: COLORS.TEXT_SECONDARY,
                  fontSize: FS(12),
                  fontFamily: 'Tajawal-Medium',
                  marginStart: HS(8),
                }}>
                {'تذكرني'}
              </AppText>
            </View>
            <AppButton
              title={'تسجيل'}
              onPress={() => navigation.navigate('OTP_SCREEN')}
            />
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
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
