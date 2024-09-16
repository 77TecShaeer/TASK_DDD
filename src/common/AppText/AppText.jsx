import React, {FC} from 'react';
import {Text, StyleSheet, TextStyle, I18nManager} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FS} from '../../utils/scaling';

export const AppText = ({
  style,
  children,
  numberOfLines,
  onPress,
  ...props
}) => (
  <Text
    numberOfLines={numberOfLines}
    style={[styles.default, style]}
    onPress={onPress}
    {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  default: {
    color: COLORS.GREY,
    fontFamily: 'Tajawal',
    fontWeight: 500,
    fontSize: FS(14),
  },
});
