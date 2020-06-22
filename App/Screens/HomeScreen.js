import React from 'react';
// import {} from 'react-native';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { StyleSheet, View, Text } from 'react-native';

//// function ////
export default function Home() {
  return (
    <Container>
      <View>
        <Text style={containerStyles.test}>Test</Text>
      </View>
      <Footer />
    </Container>
  );
}

//// style-components ////
const containerStyles = StyleSheet.create({
  test: {
    color: 'black',
    fontSize: 100,
  },
});
