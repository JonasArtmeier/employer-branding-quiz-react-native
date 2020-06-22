import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

//// style-components ////
const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 90,
    resizeMode: 'contain',
    margin: 8,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

//// function ////
const Button = (props) => (
  <TouchableOpacity
    title="Solid Button"
    onPress={() => props.onPress()}
    style={buttonStyles.wrapper}
  >
    <Text style={buttonStyles.label} allowFontScaling>
      {props.label}
    </Text>
  </TouchableOpacity>
);

export default Button;
