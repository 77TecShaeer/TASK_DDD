import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  I18nManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS, HS, VS} from '../../utils/scaling';
import {AppText} from '../AppText/AppText';

export const AppButton = ({title, style, ...props}) => (
  <TouchableOpacity {...props} style={[styles.container, style]}>
    <AppText style={styles.default}>{title}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    height: HS(48),
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: FS(10),
    paddingVertical: VS(10),
  },
  default: {
    color: 'white',
    fontFamily: Platform.OS == 'ios' ? 'Tajawal' : 'Tajawal-Bold',
    fontWeight: Platform.OS == 'ios' ? 'bold' : 'normal',
    fontSize: FS(16),
  },
});
