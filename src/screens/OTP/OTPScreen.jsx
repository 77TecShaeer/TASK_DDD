import {useRef, useState, useEffect} from 'react';
import {AppState, StyleSheet, View} from 'react-native';
import {VS, HS, sHeight, FS} from '../../utils/scaling';
import {AppText} from '../../common/AppText/AppText';
import {AppButton} from '../../common/AppButton/AppButton';
import {COLORS} from '../../utils/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {a2e} from '../../utils/Helper';
import BackgroundTimer from 'react-native-background-timer';

const OTPScreen = props => {
  // console.log();

  const [code, setCode] = useState('');
  const otpInputRef = useRef(null);
  const [timerValue, setTimerValue] = useState(60);
  const [appState, setAppState] = useState(AppState.currentState);
  const [resendOtpPressed, setResendOtpPressed] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setTimerValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    }, 1000);
  };

  // Function to stop the timer
  const stopTimer = () => {
    BackgroundTimer.stopBackgroundTimer();
  };

  // Handle when resend OTP is pressed to start the timer again
  useEffect(() => {
    if (resendOtpPressed) {
      setResendOtpPressed(false);
      setCode('');
      setTimerValue(60); // Reset timer
      startTimer();
    }
  }, [resendOtpPressed]);

  // Stop the timer once it reaches zero
  useEffect(() => {
    if (timerValue === 0) {
      stopTimer();
    }
  }, [timerValue]);

  useEffect(() => {
    // Start the timer when the component mounts
    startTimer();
    // Clean up event listener and timer when the component unmounts
    return () => {
      stopTimer();
    };
  }, [appState]);

  useEffect(() => {
    if (code.length === 4) {
      setTimerValue(0); // Reset timer
    }
  }, [code]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', paddingHorizontal: HS(24)}}>
        <AppText
          style={{
            textAlign: 'left',
            marginTop: HS(16),
            fontWeight: '400',
          }}>
          {'الرجاء إدخال الرمز المكوّن من 5 أرقام الذي تم إرساله إلى الرقم  .' +
            props.route.params.phoneNumber}
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
        {timerValue > 0 && (
          <AppText style={styles.timerText}>
            {`0${Math.floor(timerValue / 60)}`}:
            {timerValue % 60 < 10 ? `0${timerValue % 60}` : timerValue % 60}
          </AppText>
        )}
      </View>
      <View style={styles.bottomView}>
        {timerValue <= 0 && (
          <AppText style={{marginBottom: VS(10), fontWeight: '400'}}>
            {'لم تحصل على رمز؟ '}
            <AppText
              style={{color: COLORS.PRIMARY, fontFamily: 'Tajawal-Bold'}}
              onPress={() => setResendOtpPressed(true)}>
              {'أرسل الرمز مجدداً'}
            </AppText>
          </AppText>
        )}
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
    paddingBottom: VS(45),
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
