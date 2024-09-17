/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
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
              labelStyle={{
                color: COLORS.TEXT_SECONDARY,
                fontWeight: '400',
                textAlign: 'left',
              }}
              value={phone}
              style={{height: HS(48)}}
              handleChangeText={text => setPhone(text)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                // backgroundColor:'red',
                marginTop: VS(16),
                marginBottom: VS(24),
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: COLORS.PRIMARY, false: COLORS.STROKE}}
                style={{
                  borderRadius: 20,
                  width: HS(18),
                  height: HS(18),
                }}
                value={toggleCheckBox}
                boxType="square"
                onTintColor={COLORS.PRIMARY}
                onFillColor={COLORS.PRIMARY}
                onCheckColor="white"
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <AppText
                style={{
                  color: COLORS.TEXT_SECONDARY,
                  fontSize: FS(12),
                  fontFamily: 'Tajawal',
                  fontWeight: '500',
                  marginStart: HS(8),
                }}>
                {'تذكرني'}
              </AppText>
            </View>
            <AppButton
              title={'تسجيل'}
              onPress={() =>
                navigation.navigate('OTP_SCREEN', {
                  phoneNumber: phone,
                })
              }
            />
          </View>
          <SocialLogin />

          <View style={{marginTop: VS(24)}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <AppText
                style={{
                  color: COLORS.TEXT_SECONDARY,
                  fontSize: FS(12),
                  fontFamily: 'Tajawal',
                  fontWeight: '400',
                }}>
                {'معاينة '}
              </AppText>
              <AppText
                onPress={() => navigation.navigate('PRIVACY_SCREEN')}
                style={{
                  color: COLORS.PRIMARY,
                  marginHorizontal: HS(6),
                  fontWeight: '700',
                }}>
                الشروط و الأحكام
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
