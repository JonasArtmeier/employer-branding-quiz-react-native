import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../assets/logo.png';

const Logo = (props) => (
  <View style={logoStyles.container}>
    <Image source={logo} style={logoStyles.image}></Image>
  </View>
);

const logoStyles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    opacity: 0.8,
  },
});

export default Logo;
