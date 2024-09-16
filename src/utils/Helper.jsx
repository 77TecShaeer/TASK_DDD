import {I18nManager} from 'react-native';

export const handleTranslationFromEndPoint = item => {
  return I18nManager.isRTL ? item?.nameAr : item?.nameEn;
};

const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
const englishDigits = '0123456789';

export const a2e = s => s.replace(/[٠-٩]/g, d => arabicDigits.indexOf(d));
export const e2a = s =>
  s.replace(/\d/g, d => arabicDigits[englishDigits.indexOf(d)]);

export const A2EandE2A = s => {
  return I18nManager.isRTL ? e2a(s) : a2e(s);
};
