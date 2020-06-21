import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (props) => (
  <View style={containerStyles.container}>{props.children}</View>
);

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    zIndex: -1,
  },
});

export default Container;
