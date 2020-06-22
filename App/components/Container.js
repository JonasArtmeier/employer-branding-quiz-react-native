import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (props) => (
  <View style={containerStyles.container}>{props.children}</View>
);

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    zIndex: -1,
    flex: 1,
    padding: 20,
  },
});

export default Container;
