import {StyleSheet, View} from 'react-native';
import {VS, HS, sHeight, FS} from '../../utils/scaling';
import {AppText} from '../../common/AppText/AppText';
import {AppButton} from '../../common/AppButton/AppButton';
import {COLORS} from '../../utils/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {a2e} from '../../utils/Helper';
import {useRef, useState} from 'react';

const OTPScreen = () => {
  const [code, setCode] = useState('');
  const otpInputRef = useRef(null);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', paddingHorizontal: HS(24)}}>
        <AppText>
          {
            'الرجاء إدخال الرمز المكوّن من 5 أرقام الذي تم إرساله إلى الرقم 0000000000 .'
          }
        </AppText>
        <OTPInputView
          ref={otpInputRef}
          style={{
            color: COLORS.PRIMARY,
            height: sHeight * 0.09,
            zIndex: 10,
            marginVertical: VS(24),
          }}
          pinCount={4}
          keyboardType="numeric"
          autoFocusOnLoad={true}
          onCodeChanged={c => {
            setCode(a2e(c));
          }}
          codeInputFieldStyle={[
            styles.codeInputFieldStyle,
            code.length == 4 && {
              borderColor: COLORS.PRIMARY,
            },
          ]}
          codeInputHighlightStyle={{borderColor: COLORS.PRIMARY}}
          code={code}
        />
        <AppText>{'00:15'}</AppText>
      </View>
      <View style={styles.bottomView}>
        <AppText>
          {'لم تحصل على رمز؟ '}
          <AppText style={{color: COLORS.PRIMARY}}>
            {'أرسل الرمز مجدداً'}
          </AppText>
        </AppText>
        <AppButton title={'التحقق من الرمز'} />
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: VS(16),
    paddingHorizontal: HS(24),
    backgroundColor: 'white',
    gap: VS(12),
  },
  codeInputFieldStyle: {
    borderColor: COLORS.TEXT_SECONDARY,
    fontSize: FS(32),
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    color: COLORS.PRIMARY,
    height: VS(64),
    width: HS(64),
    marginHorizontal: HS(8),
    borderRadius: FS(8),
  },
});
