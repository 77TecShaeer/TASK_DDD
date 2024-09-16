import {ScrollView, StyleSheet, View} from 'react-native';
import {AppText} from '../../common/AppText/AppText';
import {AppButton} from '../../common/AppButton/AppButton';
import {FS, HS, VS} from '../../utils/scaling';
import {COLORS} from '../../utils/colors';

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
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

        <AppText style={{marginVertical: VS(24), fontWeight: 'bold'}}>
          {'أهلاً وسهلاً بك في التطبيق الإختياري'}
        </AppText>

        <AppText style={{fontSize: FS(16)}}>
          {
            'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت … لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …'
          }
        </AppText>
      </ScrollView>

      <View style={styles.bottomView}>
        <View>
          <View></View>
          <AppText>
            {'لقد قرأت وفهمت شروط الاستخدام واتفاقية الخصوصية.'}
          </AppText>
        </View>
        <AppButton title={'موافق'} />
      </View>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: COLORS.STROKE,
  },
  contentContainer: {
    padding: FS(24),
    marginBottom: 50
  },
  welcomeContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: HS(8),
    padding: FS(16),
  },
  welcomeHeading: {
    fontWeight: 'bold',
    fontSize: FS(18),
    marginBottom: VS(8),
    color: COLORS.HEADLINE,
  },
  statusUpdate: {
    marginTop: FS(8),
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.STROKE,
    paddingVertical: VS(16),
    paddingHorizontal: HS(24),
    backgroundColor: 'white',
    gap: VS(12),
  },
});
