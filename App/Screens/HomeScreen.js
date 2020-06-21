import React from 'react';
// import {} from 'react-native';
import Container from './App/components/Container';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <Container>
      <View>
        <Text style={containerStyles.test}>Test</Text>
      </View>
    </Container>
  );
}

const containerStyles = StyleSheet.create({
  test: {
    color: 'black',
    fontSize: 100,
  },
});
