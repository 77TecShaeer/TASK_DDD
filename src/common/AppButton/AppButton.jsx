import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS} from '../../utils/scaling';
import { AppText } from '../AppText/AppText';

export const AppButton = ({
  title,
  ...props
}) => (
  <TouchableOpacity>
    <AppText>{title}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  default: {
    color: COLORS.GREY,
    fontFamily: 'Tajawal',
    fontWeight: 500,
    fontSize: FS(14),
  },
});
