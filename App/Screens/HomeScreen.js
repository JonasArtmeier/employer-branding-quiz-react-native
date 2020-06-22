import React from 'react';
// import {} from 'react-native';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <Container>
      <View>
        <Text style={containerStyles.test}>Test</Text>
      </View>
      <Footer />
    </Container>
  );
}

const containerStyles = StyleSheet.create({
  test: {
    color: 'black',
    fontSize: 100,
  },
});
