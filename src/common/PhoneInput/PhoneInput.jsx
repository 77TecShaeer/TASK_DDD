import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';


import { a2e } from '../../utils/Helper';
import { AppText } from '../AppText/AppText';
import { COLORS } from '../../utils/colors';
import { VS } from '../../utils/scaling';

const formatPhoneNumber = input => {
  if (!input) return '';
  // Remove non-numeric characters
  const numericInput = a2e(input).replace(/\D/g, '');

  const formattedNumber = numericInput
    .split('')
    .map((c, i) => ((i + 1) % 3 === 0 && i < 8 ? `${c} ` : c))
    .join('')
    .trim()
    .replace(/\s/g, '-');

  return formattedNumber;
};

export const PhoneInput = ({
  label,
  value,
  containerStyle,
  handleChangeText,
  error,
  style,
  placeholder,
  defaultValue,
  keyboardType,
  editable = true,
  labelStyle,
  multiline,
  onBlur,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyle}>
        {label && <AppText style={[styles.label, labelStyle]}>{label}</AppText>}
        <TextInput
          value={String(formatPhoneNumber(value))}
          defaultValue={defaultValue}
          onChangeText={text => handleChangeText(a2e(text).replace(/\-/g, ''))}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={__DEV__ ? 14 : 12}
          multiline={multiline}
          placeholderTextColor={COLORS.PLACE_HOLDER}
          editable={editable}
          keyboardType={'number-pad'}
          placeholderFillCharacter={'x'}
          placeholder={'رقم الجوال'}
          style={[
            styles.input,
            style,
            isFocused ? styles.focusedInput : styles.unfocusedInput,
            !editable ? styles.disabled : {},
            error ? styles.errorInput : {},
          ]}
          {...inputProps}
        />
        {error && <AppText style={styles.errorText}>{error}</AppText>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
  
    color: COLORS.GRAY900,
  },
  input: {
    borderColor: COLORS.GRAY100,
    marginBottom: 10,
    textAlign: 'right',
    color: COLORS.GRAY900,
    paddingVertical: 14,
    height: VS(50),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: COLORS.GRAY500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0,
    shadowRadius: 4,
  },
  focusedInput: {
    borderWidth: 1.3,
    borderColor: COLORS.BLUE400,
  },
  disabled: {
    color: COLORS.GRAY500,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: COLORS.CoralRed,
  },
  unfocusedInput: {
    borderWidth: 1,
    borderColor: COLORS.GRAY100,
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
  },
});
