import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {a2e} from '../../utils/Helper';
import {AppText} from '../AppText/AppText';
import {COLORS} from '../../utils/colors';
import {HS, VS} from '../../utils/scaling';

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
  imageSource, // New prop for image source
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [country, setCountry] = useState({
    cca2: 'SA',
    name: 'Saudi Arabia',
  });
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyle}>
        {label && <AppText style={[styles.label, labelStyle]}>{label}</AppText>}
        <View
          style={[
            styles.inputContainer,
            isFocused ? styles.focusedInput : styles.unfocusedInput,
            style,
          ]}>
          <CountryPicker
            withFilter // Enable search filter
            withFlag // Display the flag
            onSelect={country => setCountry(country)}
            countryCode={country?.cca2}
            visible={false}
          />

          <TextInput
            value={String(formatPhoneNumber(value))}
            defaultValue={defaultValue}
            onChangeText={text =>
              handleChangeText(a2e(text).replace(/\-/g, ''))
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={__DEV__ ? 14 : 12}
            multiline={multiline}
            placeholderTextColor={COLORS.PLACE_HOLDER}
            editable={editable}
            keyboardType={'number-pad'}
            placeholder={'000 000 0000'}
            style={[
              styles.input,
              style,
              !editable ? styles.disabled : {},
              error ? styles.errorInput : {},
            ]}
            {...inputProps}
          />
        </View>
        {error && <AppText style={styles.errorText}>{error}</AppText>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
    color: COLORS.TEXT_SECONDARY,
  },
  inputContainer: {
    flexDirection: 'row', // Row layout to have image beside TextInput
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: COLORS.GREY,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0,
    shadowRadius: 4,
    paddingHorizontal: HS(6),
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10, // Add some space between the image and input
  },
  input: {
    flex: 1, // Take up remaining space after image
    textAlign: 'right',
    color: COLORS.GREY,
    // height: VS(50),
  },
  focusedInput: {
    borderWidth: 1.3,
    borderColor: COLORS.PRIMARY,
  },
  disabled: {
    color: COLORS.GREY,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: COLORS.CoralRed,
  },
  unfocusedInput: {
    borderWidth: 1,
    borderColor: COLORS.STROKE,
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
  },
});
