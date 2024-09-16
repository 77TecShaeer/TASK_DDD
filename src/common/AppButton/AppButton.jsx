import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS, VS} from '../../utils/scaling';
import { AppText } from '../AppText/AppText';

export const AppButton = ({
  title,
  ...props
}) => (
  <TouchableOpacity {...props} style={styles.container}>
    <AppText style={styles.default}>{title}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: FS(10),
    paddingVertical: VS(10)
  },
  default: {
    color: 'white',
    fontFamily: 'Tajawal',
    fontWeight: 'bold',
    fontSize: FS(16),
  },
});
