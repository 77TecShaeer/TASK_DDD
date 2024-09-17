import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {AppText} from '../../common/AppText/AppText';
import {AppButton} from '../../common/AppButton/AppButton';
import {FS, HS, VS} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

const {height} = Dimensions.get('window');

const PrivacyScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, alignSelf: 'stretch', paddingBottom: 40}}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <AppText style={styles.welcomeHeading}>{'مرحبا 👋'}</AppText>
            <AppText style={{fontSize: FS(12)}}>
              {
                'قبل إنشاء حساب، يرجى قراءة شروط الاستخدام واتفاقية الخصوصية والموافقة عليها.'
              }
            </AppText>
          </View>
          <AppText style={styles.statusUpdate}>
            {'التحديث الأخير : 20/10/2025'}
          </AppText>

          <AppText style={{marginVertical: VS(18), fontFamily: 'Tajawal-Bold'}}>
            {'أهلاً وسهلاً بك في التطبيق الإختياري'}
          </AppText>

          <ScrollView style={{height: height * 0.51}}>
            <AppText style={{fontSize: FS(16), fontWeight: 400}}>
              {
                'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …'
              }
            </AppText>
          </ScrollView>
        </View>

        <View style={styles.bottomView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: VS(16),
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
                fontSize: FS(12),
                marginStart: HS(8),
                fontWeight: 400,
                color: COLORS.TEXT_SECONDARY,
                // fontWeight: 'Tajawal-Medium',
              }}>
              {'لقد قرأت وفهمت شروط الاستخدام واتفاقية الخصوصية.'}
            </AppText>
          </View>
          <AppButton
            style={{marginBottom: HS(16)}}
            title={'موافق'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // borderColor: COLORS.STROKE,
    // textAlign:'left'
  },
  contentContainer: {
    paddingHorizontal: FS(24),
    paddingTop: VS(15),
    // backgroundColor:'green',
    flex:1,
  },
  welcomeContainer: {
    borderWidth: 1,
    borderRadius: HS(8),
    borderColor: COLORS.STROKE,
    padding: HS(14),
    alignItems: 'baseline',
  },
  welcomeHeading: {
    fontFamily: 'Tajawal-Bold',
    fontSize: FS(18),
    marginBottom: VS(8),
    color: COLORS.HEADLINE,
  },
  statusUpdate: {
    marginTop: HS(8),
    fontSize: FS(12),
    fontWeight: 400,
  },
  bottomView: {
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
    // height: VS(128),
    // backgroundColor:'red',
    // alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLORS.STROKE,
    // paddingBottom:120,
    // paddingBottom: VS(20),
    // paddingTop: VS(6),
    paddingHorizontal: HS(24),
    // backgroundColor: 'white',
    // gap: VS(12),
  },
});
