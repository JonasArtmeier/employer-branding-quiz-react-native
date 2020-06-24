import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

//// style-components ////
const inputFieldStyles = StyleSheet.create({
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

//// function ////
export default function InputField(props) {
  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      style={inputFieldStyles.inputField}
      label={props.label}
      value={props.value}
      placeholder={props.label}
      onChangeText={(text) => props.onChange(text)}
      autoCapitalize="none"
    />
  );
}
