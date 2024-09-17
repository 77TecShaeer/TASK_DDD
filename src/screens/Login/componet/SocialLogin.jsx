/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {FS, HS, VS} from '../../../utils/scaling';
import {COLORS} from '../../../utils/colors';
import {AppText} from '../../../common/AppText/AppText';

const SocialLogin = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.STROKE,
            width: HS(57),
          }} />
        <AppText
          style={{
            marginHorizontal: HS(16),
            color: COLORS.TEXT_SECONDARY,
            fontSize: FS(12),
            fontFamily: 'Tajawal',
            fontWeight: '400',
            marginStart: HS(8),
          }}>
          أو تسجيل الدخول بواسطة
        </AppText>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.STROKE,
            width: HS(57),
          }} />
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',

          marginTop: HS(24),
          gap: 12,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: HS(8),
            borderColor: COLORS.STROKE,
            paddingVertical: VS(10),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: HS(8),
            borderWidth: HS(1),
            height: VS(44),
            flex: 1,
          }}>
          <Image
            source={require('../../../assets/images/google/google.png')}
            style={{width: HS(24), height: VS(24)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: HS(8),
            borderColor: COLORS.STROKE,
            paddingVertical: VS(10),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: HS(8),
            borderWidth: HS(1),
            height: VS(44),
            flex: 1,
          }}>
          <Image
            source={require('../../../assets/images/facebook/facebook.png')}
            style={{width: HS(24), height: VS(24)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: HS(8),
            borderColor: COLORS.STROKE,
            paddingVertical: VS(10),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: HS(8),
            borderWidth: HS(1),
            flex: 1,
            height: VS(44),
          }}>
          <Image
            source={require('../../../assets/images/apple/apple.png')}
            style={{width: HS(24), height: VS(24)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
